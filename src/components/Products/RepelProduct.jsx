import { useState } from "react";
import RepelLogo from "../../assets/img/Green Line RAPEL-02 1.png";
import Repel from "../../assets/img//repel1-1.webp";

export default function RepelProduct() {
  const [activeSection, setActiveSection] = useState("ventajas");

  const sections = {
    ventajas: {
      title: "Por qué GreenLine Repel",
      content: (
        <ul>
          <li>Mantiene alejado a los insectos molestos.</li>
          <li>Tratamiento natural contra pulgas, garrapatas y ácaros. </li>
          <li>Protección para tu perro, gato y a tu hogar.</li>
          <li>Sus componentes naturales le dejan el pelo brillante ysedoso.</li>
        </ul>
      ),
    },
    presentaciones: {
      title: "Presentaciones GreenLine Repel",
      content: (
        <ul>
          <li>
            Emulsión en spray indicado para ayudar a repeler insectos que
            afecten a perros y gatos.
          </li>
          <li>
            Ampolla/Pipeta indicada para ayudar a mantener alejados insectos
            molestos como: pulgas, moscas, mosquitos, flebótomos, etc. que
            afectan a perros.{" "}
          </li>
          <li>
            Spray ambiental indicado para el control de piojos, pulgas,
            garrapatas, ácaros y otros insectos en cercanía de cuchas, caniles,
            alfombras, pisos, zócalos u otros lugares donde habitan mascotas.
          </li>
        </ul>
      ),
    },
    ingredientes: {
      title: "Que contiene GreenLine Repel",
      content: (
        <ul>
          <li>
            el Aceite de eucalipto muestra resultados promisorios en el control
            de diversos insectos.
          </li>
          <li>
            El Aceite de pino ha demostrado actividad larvicida y repelente
            frente a mosquitos y otros insectos.
          </li>
          <li>
            el Aceite de neem es un repelente natural que ayuda a mantener
            alejados los insectos molestos como: pulgas, moscas, mosquitos,
            flebótomos, etc.
          </li>
          <li>
            el Aceite de almendras es fuente natural de Vitamina E, con
            propiedades emolientes e hidratantes para la piel, da brillo y
            suavidad al pelo.
          </li>
        </ul>
      ),
    },
  };

  return (
    <section>
      <div className="repel_main">
        <img src={RepelLogo} alt="" />
        <img src={Repel} alt="" />
        <h1>Protección natural contra insectos molestos.</h1>
        <h2>
          Línea de repelentes con componentes naturales que mantienen alejados a
          los insectos molestos. Además, aportan brillo y suavidad al pelaje.
        </h2>

        <div className="repel-divider">
          Protección natural para tu familia y tu hogar
        </div>

        <div className="repel-info">
          <h3>El complemento ideal y natural</h3>
          <h1>para el tratamiento mensual antipulgas</h1>
          <h2>
            Su fórmula posee extractos y aceites vegetales, saludables para tu
            mascota.
          </h2>
          <div>Logos</div>
          <img src="" alt="Repel" />

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
