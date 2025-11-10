import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import GreenLineLogo from "../../assets/img/GreenLine-1.webp";
import "../Header/_header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header>
      <nav aria-label="principal" className="navbar">
        <img src={GreenLineLogo} alt="Greenline Logo" />
        {open ? (
          <RxCross2
            onClick={toggleMenu}
            style={{ color: "#7ebc00", fontSize: "2rem", cursor: "pointer" }}
          />
        ) : (
          <RxHamburgerMenu
            onClick={toggleMenu}
            style={{ color: "#7ebc00", fontSize: "2rem", cursor: "pointer" }}
          />
        )}
      </nav>

      {/* Overlay negro */}
      <div className={`overlay ${open ? "overlay--active" : ""}`}>
        <ul className="overlay__menu">
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#greenline">GREENLINE</a>
          </li>
          <li>
            <a href="#productos">PRODUCTOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
