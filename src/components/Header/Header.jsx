import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import GreenLineLogo from "../../assets/img/GreenLine-1.webp";
import "../Header/_header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const toggleMenu = () => {
    setOpen((v) => !v);
    document.body.style.overflow = !open ? "hidden" : "";
  };

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (open) return;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setHidden(true);
        clearTimeout(timeout);
      } else if (currentScroll < lastScrollY.current - 10) {
        clearTimeout(timeout);
        timeout = setTimeout(() => setHidden(false), 100);
      }

      lastScrollY.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [open]);

  return (
    <header>
      <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
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

      <div className={`overlay ${open ? "overlay--active" : ""}`}>
        <ul className="overlay__menu" onClick={toggleMenu}>
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
