import { useEffect } from 'react';
import { useGsapContext } from '../../hooks/useGsapContext';
import { gsap, ScrollTrigger } from '../../lib/gsap/setupGsap';
import ProbioticsImg from '../../assets/img/PROBIOTICS.webp';
import RepelImg from '../../assets/img/REPEL.webp';
import ProbioticProduct from './ProbioticProduct';
import RepelProduct from './RepelProduct';
import './_productos.scss';

const headerH = () => (document.querySelector('.navbar')?.offsetHeight || 0);

export default function Productos() {
  const { ref, ctx } = useGsapContext();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const probiCard  = root.querySelector('.card--probiotics');
    const repelCard  = root.querySelector('.card--repel');
    const probiAsset = root.querySelector('.card--probiotics .product-asset');
    const repelAsset = root.querySelector('.card--repel .product-asset');
    if (!probiCard || !repelCard || !probiAsset || !repelAsset) return;

    // Estado inicial
    gsap.set([probiAsset, repelAsset], { clearProps: 'all' });
    gsap.set(probiAsset, { xPercent: -75, opacity: 0, willChange: 'transform,opacity' });
    gsap.set(repelAsset, { xPercent:  75, opacity: 0, willChange: 'transform,opacity' });

    ctx.current.add(() => {
      const make = (asset, card) => {
        const title      = card.querySelector('.product-title');
        const greenPart  = card.querySelector('.product-title .green');
        const linePart   = card.querySelector('.product-title .line');
        const nameEl     = card.querySelector('.product-title .name');
        const imgEl      = card.querySelector('img.product-image');

        // Texto arranca oculto y le damos “personalidad”
        gsap.set([title, greenPart, linePart, nameEl], { opacity: 0 });
        gsap.set([greenPart, linePart, nameEl], { y: 18 });
        gsap.set(nameEl, { letterSpacing: 1.2 });

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: {
            trigger: card,
            start: () => `top+=${headerH()} bottom`,
            end:   () => `top+=${headerH()} 40%`,
            scrub: true,
            invalidateOnRefresh: true,
            markers: true
          }
        });

        // 1) entra el asset (logo/foto)
        tl.to(asset, { xPercent: 0, opacity: 1, duration: 1.0 }, 0);

        // 2) aparece el contenedor del título apenas después
        tl.to(title, { opacity: 1, duration: 0.2 }, '>-0.05');

        // 3) “Green” y luego “Line” (stagger)
        tl.to(greenPart, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }, '>-0.05');
        tl.to(linePart,  { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }, '>-0.25');

        // 4) el nombre del producto sube y aparece último
        tl.to(nameEl, { y: 0, opacity: 1, letterSpacing: 0.2, duration: 0.55, ease: 'power3.out' }, '>-0.15');
      };

      make(probiAsset, probiCard);
      make(repelAsset, repelCard);
    });

    // Refresh cuando cargan las imágenes
    const imgs = root.querySelectorAll('img.product-image');
    let pending = imgs.length;
    const done = () => { if (--pending <= 0) ScrollTrigger.refresh(); };
    if (pending === 0) requestAnimationFrame(() => ScrollTrigger.refresh());
    else {
      imgs.forEach(img => (img.complete
        ? done()
        : (img.addEventListener('load', done,  { once: true }),
           img.addEventListener('error', done, { once: true }))));
      setTimeout(() => ScrollTrigger.refresh(), 700);
    }
  }, [ctx, ref]);

  return (
    <section id="productos" aria-labelledby="productos" ref={ref}>
      <div className="productos__main">
        <article className="product-card card--probiotics" aria-label="Probiotics">
          <div className="product-asset">
            <div className="product-title">
              <span className="brand">
                <span className="green">Green</span>
                <span className="line">Line</span>
              </span>
              <span className="name">PROBIOTICS</span>
            </div>
            <img className="product-image" src={ProbioticsImg} alt="GreenLine Probiotics" />
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
            <img className="product-image" src={RepelImg} alt="GreenLine Repel" />
          </div>
        </article>
      </div>

      <div className="productos__detalle">
        <ProbioticProduct />
        <RepelProduct />
      </div>
    </section>
  );
}
