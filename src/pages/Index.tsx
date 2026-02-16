import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Steps from "../components/Steps";
import WhySection from "../components/WhySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Steps />
      <WhySection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
