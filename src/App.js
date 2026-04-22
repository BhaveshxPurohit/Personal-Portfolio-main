import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <Header />
      <About />
      <main>
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
