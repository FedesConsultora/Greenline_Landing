// src/app/Main.jsx
import Hero from "./Hero/Hero";
import ProbioticProduct from "./Products/ProbioticProduct";
import Productos from "./Products/Productos";
import RepelProduct from "./Products/RepelProduct";

export default function Main() {
  return (
    <main>
      <Hero />
      <Productos id="productos" />
      <ProbioticProduct id="probiotics" />
      <RepelProduct id="repel" />
    </main>
  );
}
