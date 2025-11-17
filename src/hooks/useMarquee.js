// src/hooks/useMarquee.js
import { useEffect } from "react";

/**
 * Efecto marquesina infinito, sin corte visible.
 * - speed: px por segundo (positivo).
 * - direction: 'left' o 'right'.
 *
 * Estructura esperada:
 * <div ref={trackRef} class="scroll">
 *   <p class="scroll__item">Texto...</p>
 * </div>
 */
export function useMarquee(trackRef, { speed = 60, direction = "left" } = {}) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const container = track.parentElement;
    if (!container) return;

    const getBaseItem = () => {
      const baseItem = track.querySelector(".scroll__item");
      if (!baseItem) return { item: null, width: 0 };

      const rect = baseItem.getBoundingClientRect();
      const styles = window.getComputedStyle(baseItem);
      const marginRight = parseFloat(styles.marginRight || "0");
      const marginLeft = parseFloat(styles.marginLeft || "0");

      const width = rect.width + marginLeft + marginRight;
      return { item: baseItem, width };
    };

    let animationId;
    let lastTime = performance.now();
    let mode = "single"; // 'single' (texto más corto que el contenedor) o 'loop'
    let unitWidth = 0;
    let containerWidth = 0;
    let x = 0;

    const dir = direction === "right" ? 1 : -1;
    const pxPerSec = Math.max(speed, 1);

    const step = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      x += dir * pxPerSec * dt;

      if (mode === "single") {
        // Texto más corto que el ancho => sale entero y re-entra del otro lado
        if (dir < 0) {
          // izquierda
          if (x <= -unitWidth) x = containerWidth;
        } else {
          // derecha
          if (x >= containerWidth) x = -unitWidth;
        }
      } else {
        // loop continuo con clones, sin corte visible
        if (dir < 0) {
          if (x <= -unitWidth) x += unitWidth;
        } else {
          if (x >= 0) x -= unitWidth;
        }
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      animationId = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(animationId);
      lastTime = performance.now();

      if (mode === "single") {
        // Arranca entrando desde fuera
        x = dir < 0 ? containerWidth : -unitWidth;
      } else {
        // Loop continuo
        x = dir < 0 ? 0 : -unitWidth;
      }
      animationId = requestAnimationFrame(step);
    };

    const setup = () => {
      // limpiar clones anteriores
      track.style.transform = "translate3d(0,0,0)";
      Array.from(track.querySelectorAll(".scroll__item--clone")).forEach((n) =>
        n.remove()
      );

      const { item, width } = getBaseItem();
      if (!item || !width) return;

      unitWidth = width;
      containerWidth = container.offsetWidth || window.innerWidth;

      if (unitWidth > containerWidth) {
        // Texto más largo que la barra -> modo loop continuo con clones
        mode = "loop";
        const needed = Math.ceil(containerWidth / unitWidth) + 1;
        for (let i = 0; i < needed - 1; i++) {
          const clone = item.cloneNode(true);
          clone.classList.add("scroll__item--clone");
          track.appendChild(clone);
        }
      } else {
        // Texto más corto -> aparece, cruza y vuelve a entrar
        mode = "single";
      }

      start();
    };

    const handleResize = () => {
      setup();
    };

    // Configuración inicial (esperamos un frame para que esté todo pintado)
    const initId = requestAnimationFrame(setup);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(initId);
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      Array.from(track.querySelectorAll(".scroll__item--clone")).forEach((n) =>
        n.remove()
      );
      track.style.transform = "";
    };
  }, [trackRef, speed, direction]);
}
