import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import {
  Lightbulb,
  BarChart3,
  PenTool,
  Code2,
  Share2,
  TrendingUp,
} from "lucide-react";

const services = [
  
  { title: "Digital Marketing", icon: BarChart3 },
  { title: "Content Creation", icon: PenTool },
 

  { title: "Analytics & SEO", icon: TrendingUp },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionWrapper id="services" number="02" numberPosition="right">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-16"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 border border-border rounded-lg bg-card card-hover cursor-pointer"
              >
                <Icon className="w-8 h-8 text-green-400 mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading font-bold text-lg text-foreground">
                  {service.title}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primaryto-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
