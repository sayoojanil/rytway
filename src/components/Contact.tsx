import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper id="contact" number="07" numberPosition="right">
      <div ref={ref} className="max-w-3xl">
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
            <p className="font-heading font-bold text-xl text-primary">Thank you!</p>
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
            <button
              type="submit"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm tracking-wider  px-8 py-4 bg-green-400 text-white hover:bg-blue-400 transition-all duration-300 rounded-sm"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
