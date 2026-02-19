import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  // Floating particles animation
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  // Split text into characters for animation
  const headingText = "Grow your business THE";
  const rytwayText = "RYTWAY";

  return (
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-[#0a0f1f] overflow-hidden px-6 md:px-12"
>



      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-green-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Parallax gradient orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-20 left-20 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
      />

      {/* Large background number with floating animation */}
      <motion.span
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut", 
          delay: 0.3,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className="section-number right-4 md:right-16 top-1/2 -translate-y-1/2 text-green-400/10"
      >
        01
      </motion.span>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Animated hashtag with pulse effect */}
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            textShadow: [
              "0 0 0px rgba(74, 222, 128, 0)",
              "0 0 10px rgba(74, 222, 128, 0.5)",
              "0 0 0px rgba(74, 222, 128, 0)",
            ],
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            textShadow: {
              delay: 2,
              duration: 2,
              repeat: Infinity,
            }
          }}
          className="font-heading text-green-400 font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          #TogetherWeCan
        </motion.p>

        <motion.h1
          variants={wordAnimation}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
        >
          {/* Animate each word separately */}
          <motion.span className="inline-block mr-4">
            {headingText.split(" ").map((word, wordIndex) => (
              <motion.span 
                key={wordIndex} 
                className="inline-block mr-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterAnimation}
                    custom={charIndex + wordIndex * 10}
                    className="inline-block hover:text-green-400 transition-colors duration-300"
                    whileHover={{ 
                      y: -5,
                      color: "#4ade80",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.span>

          <motion.span className="inline-block text-green-400">
            {rytwayText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                custom={index + 20}
                className="inline-block relative"
                animate={{
                  color: ["#15d35b", "#0361d3",],
                  scale: [1, 1.2, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  filter: [
                    "drop-shadow(0 0 0px rgba(74,222,128,0))",
                    "drop-shadow(0 0 8px rgba(74,222,128,0.6))",
                    "drop-shadow(0 0 0px rgba(74,222,128,0))",
                  ],
                }}
                transition={{
                  color: {
                    delay: 1.2 + index * 0.1,
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                  scale: {
                    delay: 1.2 + index * 0.1,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                  rotate: {
                    delay: 1.2 + index * 0.1,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                  filter: {
                    delay: 1.2 + index * 0.1,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {char}
                {/* Add sparkle effect on hover */}
                <motion.span
                  className="absolute -top-2 -right-2 text-xs"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                >
                  ✨
                </motion.span>
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Animated underline with glow effect */}
        {/* <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="relative h-1 w-48 mx-auto mt-4"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(74,222,128,0)",
                "0 0 20px rgba(74,222,128,0.5)",
                "0 0 0px rgba(74,222,128,0)",
              ],
            }}
            transition={{
              duration: 2,
              delay: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent"
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-10"
        >
          {/* Primary button with multiple animations */}
          <motion.a
            href="#services"
            className="inline-block font-heading font-semibold text-sm tracking-wider uppercase px-8 py-4 border border-white text-green-400 hover:text-blue-500 transition-colors duration-300 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(74,222,128,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              y: {
                delay: 2.5,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  delay: 2.5,
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </span>
            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"
            />
            {/* Button border animation */}
            <motion.div
              className="absolute inset-0 border border-green-400 rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1,
                rotate: 360,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          {/* Secondary button */}
          {/* <motion.a
            href="#contact"
            className="inline-block ml-4 font-heading font-semibold text-sm tracking-wider uppercase px-8 py-4 text-white/70 hover:text-white transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Us</span>
            <motion.span
              initial={{ height: 0 }}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 w-full bg-green-400/10"
            />
          </motion.a> */}
        </motion.div>

        {/* Animated stats or micro-interactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground"
        >
          {[""].map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + index * 0.2 }}
              whileHover={{ 
                scale: 1.1,
                color: "#4ade80",
                transition: { duration: 0.2 }
              }}
              className="relative cursor-default"
            >
              {stat}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px bg-green-400/50"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ 
            y: [0, -3, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
          className="text-muted-foreground text-xs tracking-widest uppercase font-body"
        >
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            height: [8, 24, 8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.8, 
            ease: "easeInOut" 
          }}
          className="w-px bg-gradient-to-b from-green-400 to-blue-400"
        />
        {/* Pulsing dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-1 h-1 rounded-full bg-green-400 mt-1"
        />
      </motion.div>
    </section>
  );
};

export default Hero;