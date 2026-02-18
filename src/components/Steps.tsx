import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    num: "01",
    title: "Market Research",
    desc: "Creating new and original ways of thinking is crucial for generating fresh ideas in various fields, supported by the Best Advertising Agency in Kerala.",
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
    desc: "The Best Advertising Agency in Kerala specializes in enhancing the overall effectiveness and impact of the strategic planning.",
  },
  {
    num: "05",
    title: "Review",
    desc: "The top Best Advertising Agency in Kerala possesses exceptional knowledge essential for handling the crucial part of the procedure with care.",
  },
];

const MarketingProcess = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="process" number="04" numberPosition="right">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-16"
        >
          Steps
        </motion.h2>

        <div className="space-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group border-b border-border pb-10 hover:border-blue-400 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-heading text-4xl md:text-5xl font-black text-green-400 group-hover:text-blue-400 transition-colors duration-300">
                  {step.num}
                </span>

                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground group-hover:text-blue-400 transition-colors duration-300 mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl group-hover:text-blue-400 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MarketingProcess;
