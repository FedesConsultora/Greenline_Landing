import { useState } from "react";
import RepelLogo from "../../assets/img//repel-prod-logo.webp";
import Repel from "../../assets/img//REPEL (1).webp";
import Logo1 from "../../assets/img//extractos naturales.svg";
import Logo2 from "../../assets/img//hogar seguro.svg";
import Pino from "../../assets/img//aceite de pino.svg";
import Eucalipto from "../../assets/img//aceite de eucalipto.svg";
import Almendra from "../../assets/img//aceite de almendras.svg";
import Neem from "../../assets/img//aceite de neem.svg";
import Presentaciones from "../../assets/img/presentaciones.webp";
import "./_repelProduct.scss";
import ScrollStrip from "../common/ScrollStrip";

export default function RepelProduct({ id }) {
  const [activeSection, setActiveSection] = useState("presentaciones");

  const sections = {
    presentaciones: {
      title: "Presentaciones GreenLine Repel",
      content: (
        <>
          <div className="presentaciones-img">
            <img src={Presentaciones} alt="Presentaciones de Repel" />
          </div>
          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
              <p className="text">
                <strong>Emulsión en spray</strong> indicada para ayudar a
                repeler insectos que afecten a perros y gatos.
                <br />
                <span className="pr">Presentación de 125ml.</span>
              </p>
            </li>
            <li>
              <p className="text">
                <strong>Ampolla/Pipeta</strong> indicada para ayudar a mantener
                alejados insectos molestos como pulgas, moscas, mosquitos,
                flebótomos, etc., que afectan a perros.
                <br />
                <span className="pr">
                  Presentación para perros pequeños, medianos y grandes.
                </span>
              </p>
            </li>
            <li>
              <p className="text">
                <strong>Spray ambiental</strong> indicado para el control de
                piojos, pulgas, garrapatas, ácaros y otros insectos en cercanía
                de cuchas, caniles, alfombras, pisos, zócalos u otros lugares
                donde habitan mascotas.
                <br />
                <span className="pr">Presentación de 250 ml.</span>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    ventajas: {
      title: "Por qué GreenLine Repel",
      content: (
        <div className="ventajas-repel">
          <ul>
            <li>• Mantiene alejado a los insectos molestos.</li>
            <li>• Tratamiento natural contra pulgas, garrapatas y ácaros. </li>
            <li>• Protección para tu perro, gato y a tu hogar.</li>
            <li>
              • Sus componentes naturales le dejan el pelo brillante y sedoso.
            </li>
          </ul>
        </div>
      ),
    },

    ingredientes: {
      title: "Qué contiene GreenLine Repel",
      content: (
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li>
            <div>
              <img src={Eucalipto} alt="" />
            </div>
            <p className="text">
              <strong>El Aceite de eucalipto</strong> muestra resultados
              promisorios en el control de diversos insectos.
            </p>
          </li>
          <li>
            <div>
              {" "}
              <img src={Pino} alt="" />
            </div>
            <p className="text">
              <strong>El Aceite de pino</strong> ha demostrado actividad
              larvicida y repelente frente a mosquitos y otros insectos.
            </p>
          </li>
          <li>
            <div>
              {" "}
              <img src={Neem} alt="" />
            </div>
            <p className="text">
              <strong>El Aceite de neem</strong> es un repelente natural que
              ayuda a mantener alejados los insectos molestos como: pulgas,
              moscas, mosquitos, flebótomos, etc.
            </p>
          </li>
          <li>
            <div>
              <img src={Almendra} alt="" />
            </div>
            <p className="text">
              <strong>El Aceite de almendras</strong> es fuente natural de
              Vitamina E, con propiedades emolientes e hidratantes para la piel,
              da brillo y suavidad al pelo.
            </p>
          </li>
        </ul>
      ),
    },
  };

  return (
    <section id={id}>
      <div className="repel__main">
        <img src={RepelLogo} alt="GreenLine Repel" className="logo-repel" />
        <img src={Repel} alt="Packaging Repel" />
        <h1>Protección natural contra insectos molestos.</h1>
        <h2>
          Línea de repelentes con componentes naturales que mantienen alejados a
          los insectos. Además, aportan brillo y suavidad al pelaje.
        </h2>

        <div className="repel-divider">
          <ScrollStrip
            text="Protección natural para tu familia y tu hogar."
            speed={60}
            direction="left"
            as="h2"
          />
        </div>


        <div className="repel-info">
          <h3>El complemento ideal y natural</h3>
          <h1>para el tratamiento mensual antipulgas</h1>
          <h2>
            Su fórmula posee extractos y aceites vegetales, saludables para tu
            mascota.
          </h2>
          <div className="repel-logos">
            <img src={Logo1} alt="" />
            <img className="logo2" src={Logo2} alt="" />
          </div>

          <div className="prod-buttons">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={activeSection === key ? "active" : "inactive"}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="repel-dynamic-section">
          <h1>
            {sections[activeSection].title.includes("GreenLine Repel") ? (
              <p>
                {sections[activeSection].title.split("GreenLine Repel")[0]}
                <strong>GreenLine Repel</strong>
                {sections[activeSection].title.split("GreenLine Repel")[1]}
              </p>
            ) : (
              sections[activeSection].title
            )}
          </h1>
          {sections[activeSection].content}
        </div>
      </div>
    </section>
  );
}
