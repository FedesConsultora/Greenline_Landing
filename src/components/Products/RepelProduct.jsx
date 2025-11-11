import { useState } from "react";
import RepelLogo from "../../assets/img/Green Line RAPEL-02 1.png"; // si el nombre real es REPEL, ajustalo aquí
import Repel from "../../assets/img/repel1-1.webp";

export default function RepelProduct() {
  const [activeSection, setActiveSection] = useState("ventajas");

  const sections = {
    ventajas: {
      title: "Por qué GreenLine Repel",
      content: (
        <ul>
          <li>Mantiene alejado a los insectos molestos.</li>
          <li>Tratamiento natural contra pulgas, garrapatas y ácaros.</li>
          <li>Protección para tu perro, gato y tu hogar.</li>
          <li>Sus componentes naturales dejan el pelo brillante y sedoso.</li>
        </ul>
      ),
    },
    presentaciones: {
      title: "Presentaciones GreenLine Repel",
      content: (
        <ul>
          <li>Emulsión en spray para ayudar a repeler insectos en perros y gatos.</li>
          <li>Ampolla/Pipeta para mantener alejados insectos molestos en perros.</li>
          <li>Spray ambiental para control en zonas del hogar donde habitan mascotas.</li>
        </ul>
      ),
    },
    ingredientes: {
      title: "Qué contiene GreenLine Repel",
      content: (
        <ul>
          <li>Aceite de eucalipto: control de diversos insectos.</li>
          <li>Aceite de pino: actividad larvicida/repelente.</li>
          <li>Aceite de neem: repelente natural contra pulgas y mosquitos.</li>
          <li>Aceite de almendras: Vitamina E, brillo y suavidad del pelo.</li>
        </ul>
      ),
    },
  };

  return (
    <section>
      <div className="repel__main">
        <img src={RepelLogo} alt="GreenLine Repel" />
        <img src={Repel} alt="Packaging Repel" />
        <h1>Protección natural contra insectos molestos.</h1>
        <h2>
          Línea de repelentes con componentes naturales que mantienen alejados a
          los insectos. Además, aportan brillo y suavidad al pelaje.
        </h2>

        <div className="repel-divider">
          Protección natural para tu familia y tu hogar
        </div>

        <div className="repel-info">
          <h3>El complemento ideal y natural</h3>
          <h1>para el tratamiento mensual antipulgas</h1>
          <h2>Su fórmula posee extractos y aceites vegetales saludables.</h2>

          {Object.keys(sections).map((key) => (
            <button key={key} onClick={() => setActiveSection(key)}>
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="repel-dynamic-section">
          <h1>{sections[activeSection].title}</h1>
          {sections[activeSection].content}
        </div>
      </div>
    </section>
  );
}
