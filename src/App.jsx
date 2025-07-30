import "./app.scss";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test/> */}
    </div>
  );
};

export default App;