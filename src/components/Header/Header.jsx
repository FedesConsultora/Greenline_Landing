import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import GreenLineLogo from "../../assets/img/GreenLine-1.webp";
import "../Header/_header.scss";

export default function Header({ id }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setOpen((v) => !v);
    document.body.style.overflow = !open ? "hidden" : "";
  };
  const close = () => setOpen(false);

  // --- Ocultar header al scrollear ---
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

  useEffect(() => {
    const sections = document.querySelectorAll("[id]");

    const handleActiveSection = () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    close();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
            {[
              { id: "productos", label: "Quienes Somos" },
              { id: "probiotics", label: "Probiotics" },
              { id: "repel", label: "Repel" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <a
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={activeSection === item.id ? "active" : ""}
                href='#'
              >
                {item.label}
              </a>
            ))}
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
          {[
            { id: "productos", label: "Quienes Somos" },
            { id: "probiotics", label: "Probiotics" },
            { id: "repel", label: "Repel" },
            { id: "contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={activeSection === item.id ? "active" : ""}
              href='#'
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
