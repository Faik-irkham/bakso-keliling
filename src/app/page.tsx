import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Schedule from "./components/Schedule";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Menu />
      <Schedule />
      <Footer />
      <CTA />
    </main>
  );
}
