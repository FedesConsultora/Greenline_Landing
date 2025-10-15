import { agregarLeadWA } from '../services/appscript';
import { getOrCreateSessionId } from './session';
import { captureUTMs, getLandingContext } from './utm';

function waHref(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text || '')}`;
}

export function openWhatsappAndLog({ idProducto, phone, text }) {
  const sessionId = getOrCreateSessionId();
  const utms = captureUTMs();
  const ctx  = getLandingContext();

  // Log (no bloqueante)
  agregarLeadWA({
    id_lead: (crypto?.randomUUID && crypto.randomUUID()) || '',
    id_sesion: sessionId,
    fecha: new Date().toLocaleString('es-AR'),
    id_producto: idProducto,                 // p01/p02
    telefono_whatsapp: phone,                // sin '+', ej 54911...
    mensaje_prellenado: text,
    url_entrada: ctx.url_entrada,
    utm_source: utms.utm_source,
    utm_medium: utms.utm_medium,
    utm_campaign: utms.utm_campaign
  }).catch(() => {});

  window.open(waHref(phone, text), '_blank', 'noreferrer');
}
