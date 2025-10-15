export function captureUTMs() {
  const url = new URL(window.location.href);
  return {
    utm_source: url.searchParams.get('utm_source') || '',
    utm_medium: url.searchParams.get('utm_medium') || '',
    utm_campaign: url.searchParams.get('utm_campaign') || '',
    utm_content: url.searchParams.get('utm_content') || ''
  };
}
export function getLandingContext() {
  return { url_entrada: window.location.href, origen_referencia: document.referrer || '' };
}
