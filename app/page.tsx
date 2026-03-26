import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceStrip from "./components/ServiceStrip";
import About from "./components/About";
import Services from "./components/Services";
import OnlineMeetings from "./components/OnlineMeetings";
import Sermons from "./components/Sermons";
import Pillars from "./components/Pillars";
import Connect from "./components/Connect";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <ServiceStrip />
      <About />
      <Services />
      <OnlineMeetings />
      <Sermons />
      <Pillars />
      <Connect />
      <CTABanner />
      <Footer />
    </>
  );
}
