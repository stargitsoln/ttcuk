import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceStrip from "./components/ServiceStrip";
import About from "./components/About";
import Services from "./components/Services";
import OnlineMeetings from "./components/OnlineMeetings";
import Quote from "./components/Quote";
import Pillars from "./components/Pillars";
import Connect from "./components/Connect";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ProgressBar from "./components/ProgressBar";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <ServiceStrip />
      <About />
      <Services />
      <OnlineMeetings />
      <Quote />
      <Pillars />
      <Connect />
      <CTABanner />
      <Footer />
    </>
  );
}
