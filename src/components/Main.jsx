import Hero from "./Hero/Hero";
import ProbioticProduct from "./Products/ProbioticProduct";
import Productos from "./Products/Productos";
import RepelProduct from "./Products/RepelProduct";

export default function Main() {
  return (
    <main>
      <Hero />

      <section>
        <Productos />
        <ProbioticProduct />
        <RepelProduct />
      </section>
    </main>
  );
}
