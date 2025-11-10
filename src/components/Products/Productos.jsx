import { useState } from "react";
import Probiotics from "../../assets/img/Group-2.webp";
import Repel from "../../assets/img/repel1-1.webp";
import ProbioticProduct from "./ProbioticProduct";
import RepelProduct from "./RepelProduct";
import "../Products/_productos.scss";

export default function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderProduct = () => {
    switch (selectedProduct) {
      case "probiotics":
        return <ProbioticProduct />;
      case "repel":
        return <RepelProduct />;
      default:
        return null;
    }
  };

  return (
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
              Conformada por productos <br /> con componentes de origen <br />
              natural, que ayudan a <br /> prevenir y potenciar <br />
              tratamientos, de una forma <br />
              natural.
            </h4>
          </div>
        </div>

        <div className="productos__cards">
          <div
            className="probiotics-background"
            onClick={() => setSelectedProduct("probiotics")}
            style={{ cursor: "pointer" }}
          >
            <img src={Probiotics} alt="Probiotics" />
          </div>

          <div
            className="repel-background"
            onClick={() => setSelectedProduct("repel")}
            style={{ cursor: "pointer" }}
          >
            <img src={Repel} alt="Repel" />
          </div>

          <div className="divider">
            <h2>Porque lo primero es prevenir</h2>
          </div>
        </div>

        <div className="productos__detalle">{renderProduct()}</div>
      </div>
    </section>
  );
}
