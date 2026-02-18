import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const words = ["WHO", "WE", "ARE"];

  return (
    <SectionWrapper id="about" number="03" numberPosition="right">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Heading side */}
        <div>
          {words.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="font-heading font-black text-5xl md:text-7xl lg:text-8xl block leading-none">
                {word}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 w-24 bg-green-400 mt-6 origin-left"
          />
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
At Ryt Way, we believe marketing goes far beyond simply posting content on social media. True marketing is about strategic positioning, meaningful visibility, and sustainable long-term growth. It’s about understanding your audience, crafting the right message, and delivering it through the right channels at the right time.          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base mt-4">

We focus on building brands with purpose — brands that connect, communicate, and convert. From market research and brand development to performance marketing and content strategy, we ensure every move is intentional and aligned with measurable business outcomes.          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
