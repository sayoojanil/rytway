import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    num: "01",
    title: "Research",
    desc: "Creating new and original ways of thinking is crucial for generating fresh ideas in various fields, supported by expert agency guidance.",
  },
  {
    num: "02",
    title: "Analyse",
    desc: "Statistics should be thoroughly examined or evaluated methodically, and trends in the market ought to be determined.",
  },
  {
    num: "03",
    title: "Strategy",
    desc: "Implementing a properly planned timetable to achieve these goals can significantly enhance the company's journey toward realizing its desired future.",
  },
  {
    num: "04",
    title: "Execution",
    desc: "Specializing in enhancing the overall effectiveness and impact of the strategic planning through precise implementation.",
  },
  {
    num: "05",
    title: "Review",
    desc: "Possessing exceptional knowledge essential for handling the crucial part of the procedure with care and delivering results.",
  },
];

const Steps = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="steps" number="05" numberPosition="right">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-16"
        >
          STEPS
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex items-start gap-6 md:gap-10 py-8 border-b border-border hover:border-blue-400 transition-colors duration-300 cursor-default"
            >
              <span className="font-heading font-black text-3xl md:text-5xl text-green-400 group-hover:text-blue-400 transition-colors duration-300 shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base max-w-xl hover:text-blue-400 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Steps;
