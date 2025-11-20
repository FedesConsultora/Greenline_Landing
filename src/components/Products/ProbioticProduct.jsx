// src/components/ProbioticProduct/ProbioticProduct.jsx
import { useState } from "react";
import GreenlineProbioticsDouble from "../../assets/img/ProbioticsLogo.webp";
import GreenlineProbiotics from "../../assets/img/Green Line PROBIOTICS 1.png";
import ProbioticsShield from "../../assets/img/PROBIOTICS (1).webp";
import GreenLine from "../../assets/img/GreenLine 1 (2).png";
import Logo1 from "../../assets/img/pasta palatable.svg";
import Logo2 from "../../assets/img/todas las edades.svg";
import Logo3 from "../../assets/img/balance digestivo.svg";
import Logo4 from "../../assets/img/sistema inmune.svg";
import ScrollStrip from "../common/ScrollStrip";
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
      title: "Beneficios de GreenLine PROBIOTICS",
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
        {/* ======================= HERO ======================= */}
        <div className="probiotics-presentation">
          {/* IZQUIERDA DESKTOP — ESCUDO */}
          <div className="probiotics-presentation__media">
            <img
              className="shield-img-desktop"
              src={ProbioticsShield}
              alt="GreenLine Probiotics con escudo"
            />
          </div>

          {/* DERECHA DESKTOP — TEXTO + LOGO */}
          <div className="probiotics-presentation__copy">
            <img
              className="desktop-img"
              src={GreenlineProbioticsDouble}
              alt="GreenLine Probiotics"
            />

            {/* MOBILE IMAGE */}
            <img
              className="mobile-img"
              src={GreenlineProbioticsDouble}
              alt="GreenLine Probiotics versión mobile"
            />
            
            <img
              className="shield-img"
              src={ProbioticsShield}
              alt="GreenLine Probiotics con escudo"
            />

            <h1>Lo que no ves, también importa</h1>
            <h2>
              La microbiota intestinal es un ecosistema vivo: millones de
              bacterias buenas trabajan en armonía para proteger el organismo,
              mejorar la absorción de nutrientes y fortalecer las defensas.
              Cuidarla es acompañar su bienestar, todos los días.
            </h2>
          </div>
        </div>

        {/* ======================= FRASE ======================= */}
        <div className="probiotics-divider">
          <ScrollStrip
            text="Su bienestar empieza por dentro"
            speed={60}
            direction="left"
            as="h2"
          />
        </div>
        <article className="articleInfo">
            {/* ======================= INFO ======================= */}
            <div className="probiotics-info">
              <h3>Protegé lo que no se ve</h3>
              <h1>cuidá su microbiota</h1>
              <h2>
                Su fórmula está compuesta por bacterias, levaduras y enzimas de alta
                efectividad, específicas para la microbiota de perros y gatos.
              </h2>

              <div className="probiotics-logos">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
              </div>

              
            </div>

            {/* ======================= DINAMIC ======================= */}
            <section className="sectionButtons">
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
                <div className="probiotics-dynamic-section">
              
                  <h1>
                    {sections[activeSection].title.includes("GreenLine PROBIOTICS") ? (
                      <>
                        <p>
                          {
                            sections[activeSection].title.split(
                              "GreenLine PROBIOTICS"
                            )[0]
                          }
                          <strong>GreenLine PROBIOTICS</strong>
                          {
                            sections[activeSection].title.split(
                              "GreenLine PROBIOTICS"
                            )[1]
                          }
                        </p>
                      </>
                    ) : (
                      sections[activeSection].title
                    )}
                  </h1>
                  {sections[activeSection].content}
                </div>
            </section>
        </article>
        
        

        {/* ======================= DIVIDER ======================= */}
        <div className="divider-prod">
          <div>
            <img src={GreenLine} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}