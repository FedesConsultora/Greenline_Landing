import "../Hero/_hero.scss";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__overlay">
          <h1 className="hero__title">
            El cuidado
            <br />
            también puede
            <br />
            ser natural.
          </h1>
          <p className="hero__subtitle">
            Un perro o un gato son más que
            <br /> compañeros: son nuestra familia.
          </p>
        </div>
      </section>
    </>
  );
}
