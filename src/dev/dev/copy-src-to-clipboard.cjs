// src/dev/copy-src-to-clipboard.cjs
// ----------------------------------------------------
// Copia TODO el contenido de /src (archivos de texto) al portapapeles,
// formateado en Markdown con bloques por archivo.
// Uso: node src/dev/copy-src-to-clipboard.cjs
//
// macOS  : usa pbcopy
// Windows: usa clip
// Linux  : usa xclip (o xsel si no hay xclip)
// Fallback (si no hay utilitario): genera src_dump.md en la raíz.
//
// Requisitos: Node 16+
// ----------------------------------------------------

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(process.cwd(), 'src');
const MAX_FILE_BYTES = 500 * 1024; // evita binarios/archivos enormes
const OUT_FALLBACK = path.resolve(process.cwd(), 'src_dump.md');

const ALLOW_EXT = new Set([
  '.js', '.jsx', '.ts', '.tsx',
  '.css', '.scss', '.sass',
  '.json', '.html', '.md', '.svg'
]);

const IGNORE_DIRS = new Set([
  'node_modules', 'build', 'dist', '.git', '.cache', 'coverage',
  'tmp', 'logs', '.DS_Store', '.vscode'
]);

function langFromExt(ext) {
  switch (ext) {
    case '.js':
    case '.jsx': return 'jsx';
    case '.ts':
    case '.tsx': return 'ts';
    case '.css': return 'css';
    case '.scss':
    case '.sass': return 'scss';
    case '.html': return 'html';
    case '.json': return 'json';
    case '.md': return 'md';
    case '.svg': return 'xml';
    default: return '';
  }
}

async function walk(dir, acc = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.relative(ROOT, full);

    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      await walk(full, acc);
      continue;
    }

    if (!e.isFile()) continue;

    const ext = path.extname(e.name).toLowerCase();
    if (!ALLOW_EXT.has(ext)) continue;

    const stat = await fsp.stat(full);
    if (stat.size > MAX_FILE_BYTES) {
      acc.push({ rel, skipped: true, reason: `size>${MAX_FILE_BYTES}B` });
      continue;
    }

    try {
      const content = await fsp.readFile(full, 'utf8');
      acc.push({ rel, ext, content });
    } catch {
      acc.push({ rel, skipped: true, reason: 'read_error' });
    }
  }
  return acc;
}

function toMarkdown(files) {
  const out = [];
  out.push(`# Source dump (src) — ${new Date().toISOString()}\n`);

  for (const f of files) {
    if (f.skipped) {
      out.push(`\n<!-- skipped: src/${f.rel} (${f.reason}) -->\n`);
      continue;
    }
    const lang = langFromExt(f.ext);
    const safe = String(f.content).replace(/```/g, '`\\`\\`');
    out.push(`\n// src/${f.rel}\n\`\`\`${lang}\n${safe}\n\`\`\`\n`);
  }
  return out.join('');
}

function which(bin) {
  if (!bin) return false;
  try {
    const cmd = process.platform === 'win32' ? 'where' : 'which';
    const res = spawnSync(cmd, [bin], { stdio: 'ignore' });
    return res.status === 0;
  } catch {
    return false;
  }
}

function copyToClipboard(text) {
  const plat = process.platform;
  let cmd = null;
  let args = [];

  if (plat === 'darwin') {
    cmd = 'pbcopy';
  } else if (plat === 'win32') {
    cmd = 'clip';
  } else {
    if (which('xclip')) {
      cmd = 'xclip';
      args = ['-selection', 'clipboard'];
    } else if (which('xsel')) {
      cmd = 'xsel';
      args = ['--clipboard', '--input'];
    }
  }

  if (!cmd || !which(cmd)) return false;

  const res = spawnSync(cmd, args, { input: text });
  return res.status === 0;
}

(async () => {
  if (!fs.existsSync(ROOT)) {
    console.error('❌ No se encontró la carpeta "src" en el directorio actual.');
    process.exit(1);
  }

  const files = await walk(ROOT);
  const md = toMarkdown(files);

  if (copyToClipboard(md)) {
    const count = files.filter(f => !f.skipped).length;
    console.log(`✅ Copiado al portapapeles (${count} archivos, ${md.length} chars).`);
    console.log('💡 Si no ves nada, probá pegar en un editor de texto.');
  } else {
    await fsp.writeFile(OUT_FALLBACK, md, 'utf8');
    console.log('⚠️ No encontré utilitario de portapapeles.');
    console.log(`💾 Guardé el dump en: ${OUT_FALLBACK}`);
    if (process.platform === 'linux') {
      console.log('👉 Instalá "xclip" o "xsel" para copiar directo al portapapeles.');
    }
  }
})().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
