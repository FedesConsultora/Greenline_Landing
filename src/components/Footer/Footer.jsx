import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import Facebook from "../../assets//img/fb-footer.png";
import Instagram from "../../assets//img//ig-footer.webp";
import Linkedin from "../../assets//img/li-footer.webp";
import "../Footer/_footer.scss";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
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
                  bottom: "3px",
                  marginRight: "0.2rem",
                }}
              />
              Gral. Lavalle 2247/49 (1602), Florida, Buenos Aires
            </h3>
          </div>
        </div>

        <div class="footer-links">
          <div>
            {" "}
            <MdOutlinePhone
              color="#fff"
              size={20}
              style={{
                verticalAlign: "middle",
                bottom: "3px",
                marginRight: "0.2rem",
              }}
            />
            <a href="#">(+54 11) 4797-5544</a>
            <FaWhatsapp
              color="#fff"
              size={20}
              style={{
                marginLeft: "1.5rem",
                verticalAlign: "middle",
                bottom: "3px",
                whiteSpace: "nowrap",
              }}
            />
            <a href="#">+54 9 11 2275-9850</a>
          </div>
          <div>
            {" "}
            <IoMailOutline
              color="#fff"
              size={20}
              style={{
                marginLeft: "1rem",
                verticalAlign: "middle",
                bottom: "2px",
                marginRight: "0.3rem",
              }}
            />
            <a href="#">consultas@fatrovonfranken.com.ar</a>
          </div>
        </div>

        <div className="footer-media">
          <p>SIGUENOS</p>
          <a
            href="https://www.instagram.com/fatrovonfranken/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram Logo" />
          </a>

          <a
            href="https://www.facebook.com/fatrovonfranken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook Logo" />
          </a>

          <a
            href="https://www.linkedin.com/company/fatro-von-franken/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn Logo" />
          </a>
        </div>

        <div className="footer-end">
          <p>
            {" "}
            <strong>GreenLine by </strong>Fatro Von Franken.
          </p>
          <p> Copyright © 2025 Fedes Consultora</p>
        </div>
      </div>
    </footer>
  );
}
