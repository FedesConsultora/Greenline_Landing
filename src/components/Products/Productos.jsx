import { useEffect, useState } from "react";
import { useGsapContext } from "../../hooks/useGsapContext";
import { gsap, ScrollTrigger } from "../../lib/gsap/setupGsap";
import ProbioticsImg from "../../assets/img/PROBIOTICS.webp";
import RepelImg from "../../assets/img/REPEL.webp";
import Perrito from "../../assets/img/perrito.webp";
import PawsWebm from "../../assets/video/huellitas.webm";
import PawsMp4 from "../../assets/video/huellitas.mp4";
import PawsFallback from "../../assets/img/huellitas.webp";
import "./_productos.scss";

const headerH = () => document.querySelector(".navbar")?.offsetHeight || 0;

// hook mini para detectar desktop
function useMediaQuery(q) {
  const [m, setM] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(q).matches : false
  );
  useEffect(() => {
    const mm = window.matchMedia(q);
    const on = (e) => setM(e.matches);
    mm.addEventListener
      ? mm.addEventListener("change", on)
      : mm.addListener(on);
    return () =>
      mm.removeEventListener
        ? mm.removeEventListener("change", on)
        : mm.removeListener(on);
  }, [q]);
  return m;
}

export default function Productos({ id }) {
  const { ref, ctx } = useGsapContext();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const probiCard = root.querySelector(".card--probiotics");
    const repelCard = root.querySelector(".card--repel");
    const probiAsset = root.querySelector(".card--probiotics .product-asset");
    const repelAsset = root.querySelector(".card--repel .product-asset");
    if (!probiCard || !repelCard || !probiAsset || !repelAsset) return;

    gsap.set([probiAsset, repelAsset], { clearProps: "all" });
    gsap.set(probiAsset, {
      xPercent: -55,
      opacity: 0,
      willChange: "transform,opacity",
    });
    gsap.set(repelAsset, {
      xPercent: 55,
      opacity: 0,
      willChange: "transform,opacity",
    });

    ctx.current.add(() => {
      const make = (asset, card) => {
        const title = card.querySelector(".product-title");
        const greenPart = card.querySelector(".product-title .green");
        const linePart = card.querySelector(".product-title .line");
        const nameEl = card.querySelector(".product-title .name");

        gsap.set([title, greenPart, linePart, nameEl], { opacity: 0 });
        gsap.set([greenPart, linePart, nameEl], { y: 18 });
        gsap.set(nameEl, { letterSpacing: 1.2 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: card,
            start: () => `top+=${headerH()} 64%`,
            end: () => `top+=${headerH()} 38%`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(asset, { xPercent: 0, opacity: 1, duration: 1.0 }, 0);
        tl.to(title, { opacity: 1, duration: 0.2 }, ">-0.05");
        tl.to(
          greenPart,
          { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          ">-0.05"
        );
        tl.to(
          linePart,
          { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          ">-0.25"
        );
        tl.to(
          nameEl,
          {
            y: 0,
            opacity: 1,
            letterSpacing: 0.2,
            duration: 0.55,
            ease: "power3.out",
          },
          ">-0.15"
        );
      };

      make(probiAsset, probiCard);
      make(repelAsset, repelCard);
    });

    // refresh cuando cargan imágenes
    const imgs = root.querySelectorAll("img.product-image");
    let pending = imgs.length;
    const done = () => {
      if (--pending <= 0) ScrollTrigger.refresh();
    };
    if (pending === 0) requestAnimationFrame(() => ScrollTrigger.refresh());
    else {
      imgs.forEach((img) =>
        img.complete
          ? done()
          : (img.addEventListener("load", done, { once: true }),
            img.addEventListener("error", done, { once: true }))
      );
      setTimeout(() => ScrollTrigger.refresh(), 700);
    }
  }, [ctx, ref]);

  // ======= Intros =======
  const IntroMobile = () => (
    <div className="productos__intro" id={id}>
      <div className="intro__copy">
        <h2 id="productos__header">
          GreenLine es <br /> una línea de{" "}
          <strong>suplementos naturales</strong> desarrollados especialmente
          <strong>
            <br /> para potenciar su bienestar y calidad de vida.
          </strong>
        </h2>
        <p className="intro__lead">
          Conformada por productos con componentes de origen natural, que ayudan
          a prevenir y potenciar tratamientos, de una forma natural.
        </p>
      </div>

      <div className="intro__art" aria-hidden="true">
        <video className="paw-video" autoPlay muted loop playsInline>
          <source src={PawsWebm} type="video/webm" />
          <source src={PawsMp4} type="video/mp4" />
          <img src={PawsFallback} alt="" />
        </video>
      </div>

      <img className="intro__dog" src={Perrito} alt="Perro GreenLine" />
    </div>
  );

  const IntroDesktop = () => (
    <div className="productos__intro--desktop" id={id}>
      {/* IZQ: HUELLAS | TEXTO (dos columnas internas) */}
      <div className="introDesk__left">
        <div className="intro__art" aria-hidden="true">
          <video className="paw-video" autoPlay muted loop playsInline>
            <source src={PawsWebm} type="video/webm" />
            <source src={PawsMp4} type="video/mp4" />
            <img src={PawsFallback} alt="" />
          </video>
        </div>

        <div className="intro__copy">
          <h2 id="productos__header">
            GreenLine es <br /> una línea de{" "}
            <strong>suplementos naturales</strong> desarrollados especialmente
            <strong>
              <br /> para potenciar su bienestar y calidad de vida.
            </strong>
          </h2>
          <p className="intro__lead">
            Conformada por productos con componentes de origen natural, que
            ayudan a prevenir y potenciar tratamientos, de una forma natural.
          </p>
        </div>
      </div>

      {/* DER: FONDO VERDE + PERRITO */}
      <div className="introDesk__right">
        <img className="intro__dog" src={Perrito} alt="Perro GreenLine" />
      </div>
    </div>
  );

  return (
    <section id={id} aria-labelledby="productos" ref={ref}>
      {isDesktop ? <IntroDesktop /> : <IntroMobile />}

      {/* Cards (mismo JSX; invierto solo en desktop con CSS grid-areas) */}
      <div
        className={`productos__main ${
          isDesktop ? "productos__main--desktop" : ""
        }`}
      >
        <article
          className="product-card card--probiotics"
          aria-label="Probiotics"
        >
          <div className="product-asset">
            <div className="product-title">
              <span className="brand">
                <span className="green">Green</span>
                <span className="line">Line</span>
              </span>
              <span className="name">PROBIOTICS</span>
            </div>
            <img
              className="product-image"
              src={ProbioticsImg}
              alt="GreenLine Probiotics"
            />
          </div>
        </article>

        <article className="product-card card--repel" aria-label="Repel">
          <div className="product-asset">
            <div className="product-title">
              <span className="brand">
                <span className="green">Green</span>
                <span className="line">Line</span>
              </span>
              <span className="name">REPEL</span>
            </div>
            <img
              className="product-image"
              src={RepelImg}
              alt="GreenLine Repel"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
