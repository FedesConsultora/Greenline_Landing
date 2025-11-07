import Hero from "./Hero/Hero";
import Productos from "./Products/Productos";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <Hero />
      </section>

      <section>
        <Productos />
      </section>
    </main>
  );
}
