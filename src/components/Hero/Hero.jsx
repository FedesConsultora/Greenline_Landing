import "../Hero/_hero.scss";

export default function Hero({ id }) {
  return (
    <>
      <section className="hero" id={id}>
        <div className="hero__info">
          <h1 className="hero__title">
            El cuidado
            <br />
            también puede
            <br />
            ser natural.
          </h1>
          <p className="hero__subtitle">
            Un perro o un gato son más que <br /> compañeros:{" "}
            <strong> son nuestra familia.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
