import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  number?: string;
  numberPosition?: "left" | "right";
}

const SectionWrapper = ({
  children,
  id,
  className = "",
  number,
  numberPosition = "right",
}: SectionWrapperProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen flex items-center overflow-hidden py-20 md:py-32 px-6 md:px-12 lg:px-20 ${className}`}
    >
      {number && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`section-number ${
            numberPosition === "right"
              ? "right-0 md:-right-10"
              : "left-0 md:-left-10"
          } top-1/2 -translate-y-1/2`}
        >
          {number}
        </motion.span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
