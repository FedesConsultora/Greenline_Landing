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
      <section aria-labelledby="productos-title">
        <div className="container">
          <h2 id="productos-title">
            GreenLine es una línea de suplementos naturales desarrollados
            especialmente para potenciar su bienestar y calidad de vida.
          </h2>
          <h4>
            Conformada por productos con componentes de origen natural, que
            ayudan a prevenir y potenciar tratamientos, de una forma natural.
          </h4>
          <div className="products">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="product-card">
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
