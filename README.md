# Greenline Landing — README

Micrositio **mobile‑first** con **Header de vidrio (glass)** sobre **Hero con video** y dos productos fijos (hardcodeados).  
Guarda **UTMs** de la visita en Google Sheets y loguea **clics a WhatsApp** (sin PII) usando **Google Apps Script** (Web App).  
Estilos en **SCSS** usando `@use` (sin `@import` ni `darken()/lighten()` deprecados).

---

## Stack

- **React** (Create React App)
- **SCSS** (`sass`) con módulos via `@use`
- **Google Sheets** (base de datos mínima)
- **Google Apps Script** desplegado como **Web App** (sin CORS)
- **Fetch** `application/x-www-form-urlencoded` para evitar preflight

---

## Estructura de carpetas

```js
public/
  img/logo-greenline.svg
  img/hero-poster.jpg
  video/videoHero.webm        # (opcional: videoHero.mp4 fallback)
src/
  components/
    Header.jsx                # Header “liquid‑glass”
    Hero.jsx                  # Sección hero (dentro de Main)
    Main.jsx                  # Hero + secciones de la página única
    Footer.jsx
  context/
    ModalContext.jsx          # (opcional, ya preparado)
    ToastContext.jsx          # (opcional, ya preparado)
  providers/
    UIProviders.jsx           # Agrupa Modal/Toast providers
  services/
    appscript.js              # registrarSesion / agregarLeadWA
  utils/
    session.js                # getOrCreateSessionId()
    utm.js                    # captureUTMs() / getLandingContext()
    wa.js                     # openWhatsappAndLog()
  styles/
    _variables.scss
    components/_header.scss
    components/_hero.scss
    components/_modal.scss    # (opcional)
    components/_toast.scss    # (opcional)
    main.scss                 # importa todo con @use
  App.jsx
  index.js
```

---

## Variables de diseño (SCSS)

```scss
// src/styles/_variables.scss
$font-family: 'Baloo Tammudu 2', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;

$color-primary: #7EBC00;   // principal
$color-secondary: #FF8040; // secundario
$color-black: #3C3C3B;     // negro
$color-white: #FFFFFF;     // blanco

$radius: 12px;
$shadow: 0 8px 30px rgba(0,0,0,.12);
```

```scss
// src/styles/main.scss
@use './_variables' as v;
@use './components/_header';
@use './components/_hero';
/* estilos base mobile-first */
```

> **Importante:** No usar `@import` ni funciones `darken()`/`lighten()` deprecadas.

---

## Fuente

Agregar **en `public/index.html`** dentro de `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400..800&display=swap" rel="stylesheet">
```

---

## Google Sheets

Crear un archivo con **dos hojas** y **estos encabezados**:

### `Sesiones`

```js
id_sesion, fecha_visita, url_entrada, origen_referencia, utm_source, utm_medium, utm_campaign, utm_content
```

### `Leads_WhatsApp`

```js
id_lead, id_sesion, fecha, id_producto, telefono_whatsapp, mensaje_prellenado, url_entrada, utm_source, utm_medium, utm_campaign
```

> Sugerencia: en **telefono_whatsapp** usar *Formato → Texto simple* (evita `#ERROR!` con números largos).  
> `id_producto` usar valores cortos (`p01`, `p02`).

---

## Google Apps Script (Web App)

1. Abrir el Sheet → **Extensiones → Apps Script**.  
2. Crear archivos `Código.gs` y `Tracking.gs` y pegar el código del repo (router + tracking).  
3. **Deploy** → **Implementar como aplicación web**:  
   - Ejecutar como: **Tú**  
   - Acceso: **Cualquiera con el enlace**  
4. Guardar la **URL del Web App** para el `.env`.

**Acciones soportadas (POST):**

- `registrarSesion` → upsert en `Sesiones` (por `id_sesion`).
- `agregarLeadWA` → append en `Leads_WhatsApp`.

> No se exponen endpoints GET. Todo usa `application/x-www-form-urlencoded` para evitar CORS preflight.

---

## Variables de entorno

Crear `.env` en la raíz:

```js
REACT_APP_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
REACT_APP_WA_TUTOR=54911XXXXXXX
REACT_APP_WA_VETE=54911YYYYYYY
```

> Números **sin `+`**, con código de país. Se usan para armar `https://wa.me/<numero>?text=...`

Además, existe `src/config.js`:

```js
const CONFIG = {
  appsScriptUrl: process.env.REACT_APP_APPS_SCRIPT_URL || '',
  whatsapp: {
    tutor: process.env.REACT_APP_WA_TUTOR || '',
    vete: process.env.REACT_APP_WA_VETE || ''
  }
};
export default CONFIG;
```

---

## Arranque del proyecto

```bash
# crear proyecto
npx create-react-app greenline-landing --use-npm
cd greenline-landing
npm i sass react-icons

# colocar el código y assets como en este README
npm start             # dev
npm run build         # producción
```

---

## Componentes clave

- **Header** (`components/Header.jsx`): barra fija con efecto **glass** que refracta el video del hero.  
  - Requiere un elemento `.hero__video` detrás (lo aporta `Hero.jsx`).  
- **Hero** (`components/Hero.jsx`): sección a pantalla completa con video de fondo, tinte y gradiente.  
- **Main** (`components/Main.jsx`): contiene el `Hero` y las secciones de la landing (página única).  
- **Footer** simple.

**Estilos**: en `styles/components/_header.scss` y `styles/components/_hero.scss` (mobile‑first, `@use`).

---

## Productos fijos

No se leen de Sheets. Dos cards **hardcodeadas** (ejemplo en `Main.jsx`).  
Para loguear clics a WhatsApp se llama:

```js
openWhatsappAndLog({
  idProducto: 'p01',
  phone: process.env.REACT_APP_WA_TUTOR,
  text: 'Hola, quiero info sobre Repel Plus Perros'
});
```

---

## Flujo de medición

1. **Al cargar** la app (`App.jsx`):  
   - Genera/persiste `id_sesion` (localStorage).
   - Captura UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) y `url_entrada`/`referrer`.
   - POST `registrarSesion` → Sheet `Sesiones` (upsert por `id_sesion`).

2. **Al clickear WhatsApp** (`utils/wa.js`):  
   - Abre `wa.me/<numero>?text=...` en nueva pestaña.  
   - POST `agregarLeadWA` → Sheet `Leads_WhatsApp` con: `id_lead` (uuid), `id_sesion`, `fecha`, `id_producto`, `telefono_whatsapp`, `mensaje_prellenado`, `url_entrada`, `utm_*`.

> No se guarda PII (no hay formulario). Si más adelante se agrega, se pedirá consentimiento.
