import { useState } from "react";
import GreenlineProbiotics from "../../assets/img/Green Line PROBIOTICS 1.png";
import Probiotics from "../../assets/img/Group-2.webp";
import "./_probioticProduct.scss";

export default function ProbioticProduct() {
  const [activeSection, setActiveSection] = useState("ventajas");

  const sections = {
    ventajas: {
      title: "Por qué GreenLine PROBIOTICS",
      content: (
        <ul>
          <li>Alta concentración de cepas</li>
          <li>Rico sabor!</li>
          <li>Fácil de administrar con su jeringa dosificadora</li>
          <li>Para todas las edades</li>
        </ul>
      ),
    },
    beneficios: {
      title: "Beneficios de GreenLine PROBIOTICS todos los días",
      content: (
        <ul>
          <li>Aumenta absorción de nutrientes</li>
          <li>Refuerza el sistema inmune</li>
          <li>Mejora el bienestar general</li>
          <li>Previene diarreas</li>
          <li>Mejora calidad de heces</li>
        </ul>
      ),
    },
    accion: {
      title: "Cómo actúa GreenLine PROBIOTICS",
      content: (
        <ul>
          <li>Coloniza el intestino</li>
          <li>Restaura el equilibrio microbiano</li>
          <li>Refuerza inmunidad y digestión</li>
        </ul>
      ),
    },
  };

  return (
    <section>
      <div className="probiotics__main">
        <div className="probiotics-presentation">
          <img src={GreenlineProbiotics} alt="GreenLine Probiotics" />
          <img src={Probiotics} alt="Packaging Probiotics" />
          <h1>Lo que no ves, también importa</h1>
          <h2>
            La microbiota intestinal es un ecosistema vivo: millones de
            bacterias buenas trabajan en armonía para proteger el organismo,
            mejorar la absorción de nutrientes y fortalecer las defensas.
            Cuidarla es acompañar su bienestar
          </h2>
        </div>

        <div className="probiotics-divider">
          Su bienestar empieza por dentro
        </div>

        <div className="probiotics-info">
          <div>Logos</div>
          <img src={GreenlineProbiotics} alt="GreenLine Probiotics" />

          {Object.keys(sections).map((key) => (
            <button key={key} onClick={() => setActiveSection(key)}>
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="probiotics-dynamic-section">
          <h1>{sections[activeSection].title}</h1>
          {sections[activeSection].content}
        </div>
      </div>
    </section>
  );
}
