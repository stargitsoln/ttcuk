import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceStrip from "./components/ServiceStrip";
import About from "./components/About";
import Services from "./components/Services";
import OnlineMeetings from "./components/OnlineMeetings";
import Pillars from "./components/Pillars";
import Testimonies from "./components/Testimonies";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import ProgressBar from "./components/ProgressBar";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <OnlineMeetings />
      <About />
      <Pillars />
      <ServiceStrip />
      <Testimonies />

      <CTABanner />
      <Footer />
      <Chatbot />
    </>
  );
}
