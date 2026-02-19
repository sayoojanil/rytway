import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Posters from "../components/Posters";
import Services from "../components/Services";
import About from "../components/About";
import Steps from "../components/Steps";
import WhySection from "../components/WhySection";
import ProfileCard from "../components/ProfileCard";
import OurWorks from "../components/ourworks";
import FAQ from "../components/FAQ";
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
      {/* <Posters /> */}
      <Services />
      <About />
      <Steps />
      
      <section className="relative min-h-[auto] md:min-h-screen flex flex-col items-center md:justify-center bg-[#0a0f1f] overflow-hidden px-6 md:px-12 py-16 md:py-0">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-4xl md:text-6xl lg:text-6xl mb-16 text-center"
        >
          Co-Founders
        </motion.h2>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8">
          <ProfileCard />
          <ProfileCard 
            name="Shyni Hassan"
            title="r"
            handle="Shyni Hassan"
            status="Business development manage"
            avatarUrl="/assets/image.jpeg"
          />
          {/* <ProfileCard 
            name="Safvan"
            title=""
            handle="Swafvan"
            status="Video Editor"
            avatarUrl="public/assets/IMG_2872.JPG.jpeg"
          />
          <ProfileCard 
            name="Nazrin"
            title=""
            handle="Nazrin"
            status="Social media manager"
            avatarUrl="public/assets/IMG-20251230-WA0050.jpg.jpeg"
          /> */}
        </div>
      </section>
      <WhySection />
      {/* <OurWorks /> */}
      
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
