import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { Send } from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to button center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Magnet effect - only active within 150px radius
    const magnetStrength = 0.3;
    if (distance < 150) {
      // Stronger pull when closer
      const pull = Math.max(0, 1 - distance / 150) * magnetStrength;
      setMousePosition({
        x: distanceX * pull,
        y: distanceY * pull
      });
    } else {
      setMousePosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <SectionWrapper id="contact" number="07" numberPosition="right">
      <div 
        ref={ref} 
        className="max-w-3xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-6"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-muted-foreground text-sm md:text-base mb-12 max-w-xl"
        >
          Operate with passion, adaptability, and a client-centered approach, serving as their go-to partner for business services and solutions.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 border border-primary/30 rounded-lg text-center"
          >
            <p className="font-heading font-bold text-xl text-green-400">Thank you!</p>
            <p className="font-body text-muted-foreground mt-2">We'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows={5}
              required
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <motion.button
              ref={buttonRef}
              type="submit"
              animate={{
                x: mousePosition.x,
                y: mousePosition.y
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5
              }}
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm tracking-wider px-8 py-4 bg-green-400 text-white hover:bg-blue-400 transition-colors duration-300 rounded-sm relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Contact;