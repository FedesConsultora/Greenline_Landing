import { useState } from "react";
import RepelLogo from "../../assets/img/Green Line RAPEL-02 1.webp";
import Repel from "../../assets/img//repel1-1.webp";
import "./_repelProduct.scss";

export default function RepelProduct({ id }) {
  const [activeSection, setActiveSection] = useState("ventajas");

  const sections = {
    ventajas: {
      title: "Por qué GreenLine Repel",
      content: (
        <ul>
          <li>• Mantiene alejado a los insectos molestos.</li>
          <li>• Tratamiento natural contra pulgas, garrapatas y ácaros. </li>
          <li>• Protección para tu perro, gato y a tu hogar.</li>
          <li>
            • Sus componentes naturales le dejan el pelo brillante y sedoso.
          </li>
        </ul>
      ),
    },

    ingredientes: {
      title: "Qué contiene GreenLine Repel",
      content: (
        <ul>
          <li>
            • El Aceite de eucalipto muestra resultados promisorios en el
            control de diversos insectos.
          </li>
          <li>
            • El Aceite de pino ha demostrado actividad larvicida y repelente
            frente a mosquitos y otros insectos.
          </li>
          <li>
            • El Aceite de neem es un repelente natural que ayuda a mantener
            alejados los insectos molestos como: pulgas, moscas, mosquitos,
            flebótomos, etc.
          </li>
          <li>
            • El Aceite de almendras es fuente natural de Vitamina E, con
            propiedades emolientes e hidratantes para la piel, da brillo y
            suavidad al pelo.
          </li>
        </ul>
      ),
    },
  };

  return (
    <section id={id}>
      <div className="repel__main">
        <img src={RepelLogo} alt="GreenLine Repel" />
        <img src={Repel} alt="Packaging Repel" />
        <h1>Protección natural contra insectos molestos.</h1>
        <h2>
          Línea de repelentes con componentes naturales que mantienen alejados a
          los insectos. Además, aportan brillo y suavidad al pelaje.
        </h2>

        <div className="repel-divider">
          <div>
            <h2>Protección natural para tu familia y tu hogar.</h2>
          </div>
        </div>

        <div className="repel-info">
          <h3>El complemento ideal y natural</h3>
          <h1>para el tratamiento mensual antipulgas</h1>
          <h2>
            Su fórmula posee extractos y aceites vegetales, saludables para tu
            mascota.
          </h2>
          <div>Logos</div>
          <img src={RepelLogo} alt="Repel" />
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
          <h1>{sections[activeSection].title}</h1>
          {sections[activeSection].content}
        </div>
      </div>
    </section>
  );
}
