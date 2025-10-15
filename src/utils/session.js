const KEY = 'gl_session_id';
function fallbackUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export function getOrCreateSessionId() {
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : fallbackUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}
