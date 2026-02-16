import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12"
    >
      {/* Large background number */}
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="section-number right-4 md:right-16 top-1/2 -translate-y-1/2 text-green-400/10"
        >
          01
        </motion.span>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-green-400 font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          #TogetherWeCan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
        >
          Grow your bussiness THE {" "}
          <span className="text-green-400">RYTWAY</span>
          <br />
          
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#services"
            className="inline-block font-heading font-semibold text-sm tracking-wider uppercase px-8 py-4 border border-white text-green-400 hover:text-blue-500 transition-colors duration-300"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-green-400"
        />
      </motion.div>
    </section>
  );
};

export default Hero;