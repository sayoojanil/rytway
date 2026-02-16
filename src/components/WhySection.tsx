import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { CheckCircle } from "lucide-react";

const bullets = [
  "Greatest Moral Standards",
  "Trustworthy Relationships",
  "Builds Efficient Business Strategies",
];

const WhySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionWrapper id="why-us" number="06" numberPosition="left">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Heading */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl block leading-none"
          >
            WHY
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl block leading-none text-green-400"
          >
            RYTWAY
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl block leading-none text-primary"
          >
            
          </motion.span>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
            Our main objective is complete client satisfaction. Our team of experts is committed to setting up the ideal strategy for your business and upholds the best standards for project planning and implementation.
          </p>

          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 font-heading font-semibold text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhySection;
