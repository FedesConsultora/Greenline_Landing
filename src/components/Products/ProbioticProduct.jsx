import { useState } from "react";
import GreenlineProbioticsDouble from "../../assets/img//Green-Line-PROBIOTICS-DOUBLE.webp";
import GreenlineProbiotics from "../../assets//img//Green Line PROBIOTICS 1.png";
import Probiotics from "../../assets/img/Group-2.webp";
import GreenLine from "../../assets/img/GreenLine 1 (2).png";
import ScrollStrip from "../common/ScrollStrip";
import Logo1 from "../../assets/img/Logopro1.webp";
import Logo2 from "../../assets/img//LogoPro2.webp";
import Logo3 from "../../assets/img//logoPro3.webp";
import Logo4 from "../../assets/img//logoPro4.webp";
import "./_probioticProduct.scss";

export default function ProbioticProduct({ id }) {
  const [activeSection, setActiveSection] = useState("ventajas");

  const sections = {
    ventajas: {
      label: "VENTAJAS",
      title: "Por qué GreenLine PROBIOTICS",
      content: (
        <ul>
          <li>• Alta concentración de cepas</li>
          <li>• ¡Rico sabor!</li>
          <li>• Fácil de administrar con su jeringa dosificadora</li>
          <li>• Para todas las edades</li>
        </ul>
      ),
    },
    beneficios: {
      label: "BENEFICIOS",
      title: "Beneficios de GreenLine PROBIOTICS todos los días",
      content: (
        <ul>
          <li>• Aumenta absorción de nutrientes</li>
          <li>• Refuerza el sistema inmune</li>
          <li>• Mejora el bienestar general</li>
          <li>• Previene diarreas</li>
          <li>• Mejora calidad de heces</li>
        </ul>
      ),
    },
    accion: {
      label: "COMO FUNCIONA",
      title: "Cómo actúa GreenLine PROBIOTICS",
      content: (
        <ul className="como-funciona">
          <li>
            <div>
              <strong>1. Coloniza</strong> el intestino
            </div>
          </li>
          <li>
            <div>
              <strong>2. Restaura</strong> el equilibrio microbiano
            </div>
          </li>
          <li>
            <div>
              <strong>3. Refuerza</strong> inmunidad y digestión
            </div>
          </li>
        </ul>
      ),
    },
  };

  return (
    <section id={id}>
      <div className="probiotics__main">
        <div className="probiotics-presentation">
          <img
            className="desktop-img"
            src={GreenlineProbiotics}
            alt="GreenLine Probiotics"
          />
          {/* Imagen para mobile */}
          <img
            className="mobile-img"
            src={GreenlineProbioticsDouble}
            alt="GreenLine Probiotics Double"
          />
          <img src={Probiotics} alt="Packaging Probiotics" />
          <h1>Lo que no ves, también importa</h1>
          <h2>
            La microbiota intestinal es un ecosistema vivo: millones de
            bacterias buenas trabajan en armonía para proteger el organismo,
            mejorar la absorción de nutrientes y fortalecer las defensas.
            Cuidarla es acompañar su bienestar, todos los días.
          </h2>
        </div>

        <div className="probiotics-divider">
          <ScrollStrip
            text="Su bienestar empieza por dentro"
            speed={60}
            direction="left"
            as="h2"
          />
        </div>


        <div className="probiotics-info">
          <h3>Protegé lo que no se ve</h3>
          <h1>cuidá su microbiota</h1>
          <h2>
            Su fórmula está compuesta por bacterias, levaduras y enzimas de alta
            efectividad, específicas para la microbiota de perros y gatos.
          </h2>

          <div>
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
          </div>

          <div className="prod-buttons">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={activeSection === key ? "active" : "inactive"}
              >
                {sections[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="probiotics-dynamic-section">
          <h1>{sections[activeSection].title}</h1>
          {sections[activeSection].content}
        </div>
        <div className="divider-prod">
          <div>
            {" "}
            <img src={GreenLine} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
