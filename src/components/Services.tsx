import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  BarChart3,
  PenTool,
  TrendingUp,
  Search,
  Megaphone,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// CountUp Component
const CountUp = ({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, margin: '0px' }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={observerRef}><span ref={ref} /></span>;
};

const services = [
  { 
    title: "Digital Marketing", 
    icon: Megaphone,
    description: "Strategic campaigns that drive engagement and conversions across all digital channels.",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Content Creation", 
    icon: PenTool,
    description: "Compelling visual and written content that tells your brand's unique story.",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    title: "Analytics & SEO", 
    icon: TrendingUp,
    description: "Data-driven insights and optimization to boost your search visibility.",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    title: "Social Media Strategy", 
    icon: TrendingUp,
    description: "Engaging social presence that builds community and drives growth.",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    title: "Brand Strategy", 
    icon: Target,
    description: "Comprehensive brand development that resonates with your audience.",
    gradient: "from-indigo-500 to-purple-500"
  },
  { 
    title: "Market Research", 
    icon: Search,
    description: "Deep market analysis to inform strategic business decisions.",
    gradient: "from-yellow-500 to-orange-500"
  },
];

const Services = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px"
  });

  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <SectionWrapper id="services" number="02" numberPosition="right">
      <div ref={ref} className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            <span className="text-sm font-mono text-green-400 bg-primary/10 px-4 py-2 rounded-full">
              WHAT WE OFFER
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-black text-4xl md:text-6xl lg:text-7xl mt-6 relative"
          >
            <span className="relative">
              Services
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                // className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-950 to-transparent origin-left"
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mt-8"
          >
            We provide businesses with an expert team that guides them through establishing online marketing strategy. Our areas of expertise include Digital marketing services in Calicut, branding, production, website development, package design, and printing design.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 [perspective:800px]"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative [transform-style:preserve-3d]"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative p-8 bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0 }}
                    className="flex items-center gap-2 text-primary font-medium text-sm group/link"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </motion.div>

                  {/* Animated border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats section with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-4 gap-2 md:gap-8 mt-20 p-4 md:p-8"
        >
          {[
            { value: 100, label: "Projects Completed", icon: Sparkles, suffix: "+" },
            { value: 100, label: "Client Satisfaction", icon: Target, suffix: "%" },
            { value: 2, label: "Industry Awards", icon: TrendingUp, suffix: "+" },
            { value: 5, label: "Years Experience", icon: BarChart3, suffix: "+" },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="text-center"
              >
                <StatIcon className="w-5 h-5 md:w-6 md:h-6 text-green-400 mx-auto mb-2 md:mb-3" />
                <div className="font-heading font-black text-sm sm:text-base md:text-2xl lg:text-3xl text-foreground">
                  <CountUp
                    to={stat.value}
                    from={0}
                    duration={5}
                    delay={0.2 + i * 0.1}
                    separator=","
                  />
                  {stat.suffix}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 md:mt-1 truncate px-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Services;