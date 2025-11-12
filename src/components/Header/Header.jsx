import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import GreenLineLogo from "../../assets/img/GreenLine-1.webp";
import "../Header/_header.scss";

export default function Header({ id }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const lastScrollY = useRef(0);
  const toggleMenu = () => {
    setOpen((v) => !v);
    document.body.style.overflow = !open ? "hidden" : "";
  };
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);
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
    <header
      id={id}
      className={`site-header ${open ? "is-open" : ""} ${
        hidden ? "is-hidden" : ""
      }`}
    >
      <div ref={wrapRef} className="site-header__wrap glass">
        <canvas ref={canvasRef} className="glass__refract" aria-hidden="true" />

        <div className="site-header__row">
          <a
            href="#top"
            className="brand"
            onClick={close}
            aria-label="GreenLine"
          >
            <img src={GreenLineLogo} alt="" />
          </a>

          <nav className="nav-inline" aria-label="Navegación principal">
            <a href="#quienes-somos" style={{ color: "#7BB800" }}>
              Quienes Somos
            </a>
            <a href="#propbiotics">Probiotics</a>
            <a href="#repel">Repel</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls="nav-collapsible"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            title="Menú"
          >
            {open ? (
              <RxCross2
                style={{
                  color: "#7ebc00",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            ) : (
              <RxHamburgerMenu
                style={{
                  color: "#7ebc00",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            )}
          </button>
        </div>

        <nav
          id="nav-collapsible"
          className="nav-collapsible"
          aria-hidden={!open}
          aria-label="Navegación principal"
        >
          <a href="#quienes-somos" style={{ color: "#7BB800" }} onClick={close}>
            Quienes Somos
          </a>
          <a href="#probiotics" onClick={close}>
            Probiotics
          </a>
          <a href="#repel" onClick={close}>
            Repel
          </a>
          <a href="#contacto" onClick={close}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
// <header>
//   <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
//     <img src={GreenLineLogo} alt="Greenline Logo" />
//     {open ? (
//       <RxCross2
//         onClick={toggleMenu}
//         style={{ color: "#7ebc00", fontSize: "2rem", cursor: "pointer" }}
//       />
//     ) : (
//       <RxHamburgerMenu
//         onClick={toggleMenu}
//         style={{ color: "#7ebc00", fontSize: "2rem", cursor: "pointer" }}
//       />
//     )}
//   </nav>

//   <div className={`overlay ${open ? "overlay--active" : ""}`}>
//     <ul className="overlay__menu" onClick={toggleMenu}>
//       <li>
//         <a href="#inicio">INICIO</a>
//       </li>
//       <li>
//         <a href="#greenline">GREENLINE</a>
//       </li>
//       <li>
//         <a href="#productos">PRODUCTOS</a>
//       </li>
//       <li>
//         <a href="#contacto">CONTACTO</a>
//       </li>
//     </ul>
//   </div>
// </header>
