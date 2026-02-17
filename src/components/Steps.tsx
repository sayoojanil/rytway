import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";

const content = [
  {
    title: "Our Mission",
    desc: "To help businesses establish a strong digital presence and scale sustainably through smart marketing strategies.",
  },
  {
    title: "Our Vision",
    desc: "To become a trusted growth partner for brands looking to stand out in a competitive digital world",
  },
];

const MissionVision = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="mission-vision" number="04" numberPosition="right">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-16"
        >
Designing the Future        </motion.h2>

        <div className="space-y-12">
          {content.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group border-b border-border pb-10 hover:border-blue-400 transition-colors duration-300"
            >
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-green-400 group-hover:text-blue-400 transition-colors duration-300 mb-4">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl group-hover:text-blue-400 transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MissionVision;
