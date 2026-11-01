import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}


