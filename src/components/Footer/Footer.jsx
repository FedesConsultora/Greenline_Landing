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
        <div className="footer-top">
          <h1>
            Amarlos es <br /> <strong>cuidarlos</strong>
          </h1>
          <p>INFORMACIÓN DE CONTACTO</p>
          <div>
            <h3>
              {" "}
              <CiLocationOn
                color="#fff"
                size={20}
                style={{
                  marginLeft: "1rem",
                  verticalAlign: "middle",
                  marginBottom: "6px",
                  marginRight: "0.2rem",
                }}
              />
              Gral. Lavalle 2247/49 (1602), Florida, Buenos Aires
            </h3>
          </div>
        </div>

        <div className="footer-links">
          <div>
            {" "}
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
          <div>
            {" "}
            <IoMailOutline
              color="#fff"
              size={20}
              style={{
                marginLeft: "1rem",
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

        <div className="footer-media">
          <p>SIGUENOS</p>
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

        <div className="footer-end">
          <p>
            {" "}
            <strong>GreenLine by </strong>{" "}
            <a 
              href="https://www.fatrovonfranken.com/productos/animales-de-compania/"
            >
              <img
                style={{ paddingLeft: "0.5rem", top: "2rem", width: '70px', cursor:'pointer' }}
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
            {" "}
            Copyright © 2025 Fedes Consultora
          </a>
        </div>
      </div>
    </footer>
  );
}
