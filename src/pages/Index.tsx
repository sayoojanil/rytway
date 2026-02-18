import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Steps from "../components/Steps";
import WhySection from "../components/WhySection";
import OurWorks from "../components/ourworks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Steps />
      <WhySection />
      <OurWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
