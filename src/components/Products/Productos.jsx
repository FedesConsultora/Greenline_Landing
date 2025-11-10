import { openWhatsappAndLog } from "../../utils/wa";
import "../Products/_productos.scss";
const WA_TUTOR = process.env.REACT_APP_WA_TUTOR || "";

const PRODUCTS = [
  {
    id: "p01",
    nombre: "Repel Plus Perros",
    desc: "Protección contra pulgas y garrapatas.",
    img: "https://via.placeholder.com/800x600?text=Repel+Plus",
  },
  {
    id: "p02",
    nombre: "Probiotics Gatos",
    desc: "Soporte digestivo diario.",
    img: "https://via.placeholder.com/800x600?text=Probiotics",
  },
];

export default function Productos() {
  return (
    <>
      <section aria-labelledby="productos">
        <div className="productos__main">
          <div className="productos__info">
            <h2 id="productos__header">
              GreenLine es <br /> una línea de{" "}
              <strong>suplementos naturales</strong> desarrollados especialmente
              <strong>
                {" "}
                <br /> para potenciar su bienestar y calidad de vida.
              </strong>
            </h2>
            <div className="productos__img">
              <h4>
                Conformada por productos <br /> con componentes de origen <br />{" "}
                natural, que ayudan a <br /> prevenir y potenciar <br />
                tratamientos, de una forma <br />
                natural.
              </h4>
            </div>
          </div>

          <div className="productos__cards">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="producto__card">
                <img src={p.img} alt={p.nombre} loading="lazy" />
                <div>
                  <h3 style={{ margin: "0.25rem 0" }}>{p.nombre}</h3>
                  <p style={{ margin: "0 0 0.5rem" }}>{p.desc}</p>
                  <button
                    className="btn"
                    onClick={() =>
                      openWhatsappAndLog({
                        idProducto: p.id,
                        phone: WA_TUTOR,
                        text: `Hola, quiero info sobre ${p.nombre}`,
                      })
                    }
                  >
                    Consultar por WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
