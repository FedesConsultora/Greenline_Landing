// src/services/appscript.js
const BASE_URL = process.env.REACT_APP_APPS_SCRIPT_URL;

function formBody(payload) {
  const p = new URLSearchParams();
  Object.entries(payload).forEach(([k, v]) => {
    if (v !== undefined && v !== null) p.append(k, String(v));
  });
  return p.toString();
}

export async function registrarSesion(data) {
  const body = formBody({ action: 'registrarSesion', ...data });
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body
  });
  if (!res.ok) throw new Error('Error registrando sesión');
  return res.json();
}

export async function agregarLeadWA(data) {
  const body = formBody({ action: 'agregarLeadWA', ...data });
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body
  });
  if (!res.ok) throw new Error('Error registrando lead WA');
  return res.json();
}
