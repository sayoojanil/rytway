import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import {
  BarChart3,
  PenTool,
  TrendingUp,
} from "lucide-react";

const services = [
  { 
    title: "BRANDING", 
    icon: BarChart3,
    description: "We are a passionate 'Digital Marketing Agency in Calicut'. We are primarily focused on the power of branding to increase businesses."
  },
  { 
    title: "DIGITAL MARKETING", 
    icon: PenTool,
    description: "As a leading provider of Digital Marketing Agency in Calicut, our mission is to deliver valuable insights, strategies, and resources tailored to your needs."
  },
  { 
    title: "ANALYTICS & SEO", 
    icon: TrendingUp,
    description: "We strive to stay ahead of the curve by incorporating the industry's latest trends and best practices."
  },
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
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-16 text-white"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition-all duration-500"
              >
                <div className="flex flex-col space-y-4">
                  <Icon className="w-10 h-10 text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* <div className="pt-4">
                    <button className="text-green-400 font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all duration-300">
                      Read More
                      <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                    </button>
                  </div> */}
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;