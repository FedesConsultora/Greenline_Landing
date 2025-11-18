import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import Facebook from "../../assets//img/fb-footer.png";
import Instagram from "../../assets//img//ig-footer.webp";
import Linkedin from "../../assets//img/li-footer.webp";
import VFLogo from "../../assets/img/logoFvf.webp";
import "../Footer/_footer.scss";

export default function Footer({ id }) {
  return (
    <footer className="footer" id={id}>
      <div className="footer-content">
        {/* === FILA PRINCIPAL: DOS COLUMNAS (Desktop) === */}
        <div className="footer-main-row">
          {/* === COLUMNA IZQUIERDA: Título === */}
          {/* Usamos una nueva clase para evitar conflictos con estilos viejos */}
          <div className="footer-left-column" style={{ color: "white" }}>
            <h1>
              Amarlos es <br /> <strong>cuidarlos</strong>
            </h1>
          </div>

          {/* === COLUMNA DERECHA: Contactos y Redes Sociales === */}
          <div className="footer-right-column" style={{ color: "white" }}>
            {/* Redes Sociales */}
            <div className="media">
              <div className="footer-media">
                <p>SEGUINOS</p>
                <a
                  href="https://www.instagram.com/fatrovonfranken_pets/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Instagram Logo" />
                </a>
                <a
                  href="https://www.facebook.com/FatroVonFranken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="Facebook Logo" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fatro-von-franken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn Logo" />
                </a>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="footer-links">
              {/* Dirección */}
              <div>
                <h3>
                  {" "}
                  <CiLocationOn
                    color="#fff"
                    size={20}
                    style={{
                      verticalAlign: "middle",
                      marginBottom: "6px",
                      marginRight: "0.2rem",
                    }}
                  />
                  Gral. Lavalle 2247/49 (1602), Florida, Buenos Aires
                </h3>
              </div>

              {/* Teléfono y WhatsApp */}
              <div>
                <MdOutlinePhone
                  color="#fff"
                  size={20}
                  style={{
                    verticalAlign: "middle",
                    marginBottom: "4px",
                    marginRight: "0.2rem",
                  }}
                />
                <a
                  href="tel:+541147975544"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+54 11) 4797-5544
                </a>
                <FaWhatsapp
                  color="#fff"
                  size={20}
                  style={{
                    marginLeft: "1.5rem",
                    verticalAlign: "middle",
                    marginBottom: "5px",
                    whiteSpace: "nowrap",
                  }}
                />
                <a
                  href="https://wa.me/5491122759850"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 2275-9850
                </a>
              </div>

              {/* Email */}
              <div>
                <IoMailOutline
                  color="#fff"
                  size={20}
                  style={{
                    verticalAlign: "middle",
                    marginBottom: "5px",
                    marginRight: "0.3rem",
                  }}
                />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=consultas@fatrovonfranken.com.ar&su=Consulta%20desde%20el%20sitio%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  consultas@fatrovonfranken.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === FILA INFERIOR: Logo y Copyright (Centrados) === */}
        <div className="footer-end">
          <p>
            <strong>GreenLine by </strong>{" "}
            <a href="https://www.fatrovonfranken.com/productos/animales-de-compania/">
              <img
                style={{
                  position: "relative",
                  paddingLeft: "0.3rem",
                  top: "0.3rem",
                  width: "70px",
                  cursor: "pointer",
                }}
                src={VFLogo}
                alt="Von Franken"
              />
            </a>
          </p>

          <a
            href="https://www.fedesagency.com/"
            rel="noreferrer"
            target="_blank"
          >
            Copyright © Fatro Von Franken - Desarrollado por{" "}
            <a
              style={{ color: "#5a8308ff" }}
              href="https://www.fedesagency.com/"
              rel="noreferrer"
              target="_blank"
            >
              <strong>Fedes Consultora</strong>
            </a>
          </a>
        </div>
      </div>
      <div className="solid-footer"></div>
    </footer>
  );
}
