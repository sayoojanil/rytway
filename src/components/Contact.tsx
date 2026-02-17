import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rytway@gmail.com",
      href: "mailto:hello@company.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 75590 50658",
      href: "tel:+917559050658"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <SectionWrapper id="contact" number="06" numberPosition="right">
      <div ref={ref} className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-muted-foreground text-sm md:text-base mb-12 max-w-2xl"
        >
          Operate with passion, adaptability, and a client-centered approach, 
          serving as their go-to partner for business services and solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}  
              whileHover={{ y: -4 }}
              className="group block p-6 border border-border border-green-50 hover:border-green-400 rounded-sm transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full text-green-400 group-hover: group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </h3>
                <p className="font-body text-foreground">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-muted-foreground text-sm">
            Available for new projects and collaborations
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;