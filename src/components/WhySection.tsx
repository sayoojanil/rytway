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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <SectionWrapper id="why-us" number="05" numberPosition="left">
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* LEFT SIDE - Heading + Logo */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading ml-10 font-black text-5xl md:text-2xl lg:text-8xl leading-none"
          >
            
          </motion.h2>

        <div className="flex justify-center">
  <motion.img
    src="/assets/logo.png"
    alt="Logo"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="w-48 md:w-64 lg:w-80 mt-4 object-contain"
  />
</div>

        </div>

        {/* RIGHT SIDE - Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="font-bold mb-2">Why Us?</h1>
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
            Our main objective is complete client satisfaction. Our team of
            experts is committed to setting up the ideal strategy for your
            business and upholds the best standards for project planning and
            implementation.
          </p>
          

          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.1,
                }}
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
