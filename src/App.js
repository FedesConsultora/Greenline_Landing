import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { registrarSesion } from "./services/appscript";
import { getOrCreateSessionId } from "./utils/session";
import { captureUTMs, getLandingContext } from "./utils/utm";
import "./styles/index.scss";

export default function App() {
  useEffect(() => {
    const id_sesion = getOrCreateSessionId();
    const utms = captureUTMs();
    const ctx = getLandingContext();
    registrarSesion({
      id_sesion,
      fecha_visita: new Date().toLocaleString("es-AR"),
      ...ctx,
      ...utms,
    }).catch(() => {});
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer id="contacto" />
    </>
  );
}
