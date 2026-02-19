import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, TrendingUp, Users, Target, Zap } from "lucide-react";

const works = [
  {
    num: "01",
    title: "E-Commerce Brand Growth",
    category: "Performance Marketing",
    desc: "Scaled a fashion e-commerce brand from ₹2L to ₹18L monthly revenue using paid ads, funnel optimization, and conversion-focused creatives.",
    metrics: "900% Revenue Growth",
    metricIcon: TrendingUp,
    image: "public/assets/DB.jpg.jpeg",
    tags: ["Meta Ads", "Google Ads", "CRO"],
    gradient: "from-purple-600 to-pink-600",
    results: [
      { label: "ROAS", value: "5.2x" },
      { label: "Conversion Rate", value: "+12%" },
      { label: "New Customers", value: "3.2K" }
    ]
  },
  {
    num: "02",
    title: "Real Estate Lead Generation",
    category: "Lead Generation",
    desc: "Generated 3,000+ qualified leads in 90 days through targeted Meta and Google ad campaigns with optimized landing pages.",
    metricIcon: Users,
    image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_hybrid&w=740&q=80",
    metrics: "3,000+ Leads",
    tags: ["Lead Magnets", "Landing Pages", "Retargeting"],
    gradient: "from-blue-600 to-cyan-600",
    results: [
      { label: "Lead Quality", value: "85%" },
      { label: "CPA Reduction", value: "-32%" },
      { label: "Conversion", value: "8.5%" }
    ]
  },
  {
    num: "03",
    title: "SaaS Product Launch",
    category: "Launch Strategy",
    desc: "Executed a multi-channel launch campaign for a B2B SaaS platform, achieving 500% oversubscription of pilot program.",
    metricIcon: Target,
    image: "https://img.freepik.com/free-photo/business-people-working-together_53876-16388.jpg",
    metrics: "500% Oversubscribed",
    tags: ["Product Launch", "Email Marketing", "LinkedIn"],
    gradient: "from-green-600 to-emerald-600",
    results: [
      { label: "Waitlist", value: "2.5K" },
      { label: "Open Rate", value: "68%" },
      { label: "CTR", value: "12.5%" }
    ]
  },
  {
    num: "04",
    title: "Local Business Expansion",
    category: "Digital Transformation",
    desc: "Helped a local service-based business expand to 3 new cities using SEO, paid ads, and automated lead nurturing systems.",
    metricIcon: Zap,
    image: "https://img.freepik.com/free-photo/successful-business-team_53876-16796.jpg",
    metrics: "3 New Markets",
    tags: ["Local SEO", "Marketing Automation", "PPC"],
    gradient: "from-orange-600 to-red-600",
    results: [
      { label: "Revenue Growth", value: "+245%" },
      { label: "Market Share", value: "18%" },
      { label: "ROI", value: "4.8x" }
    ]
  }
];

const OurWorks = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-100px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionWrapper id="works" number="05" numberPosition="right">
      <div ref={ref} className="relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mb-20"
        >
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </motion.div>
            
            <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
              Our Portfolios
              <br />
              {/* <span className="text-green-400">Portfolio</span> */}
            </h2>
            
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Every project tells a story of growth, innovation, and measurable success. 
              Explore how we've helped businesses achieve remarkable results.
            </p>
          </div>

          {/* Stats Bar */}
        
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative space-y-32"
        >
          {works.map((work, i) => {
            const MetricIcon = work.metricIcon;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
              >
                {/* Floating Background Number */}
                <div className="absolute -top-10 -left-4 text-[120px] md:text-[180px] font-heading font-black text-white/5 select-none pointer-events-none">
                  {work.num}
                </div>

                <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}>
                  
                  {/* Image Section with 3D Effect */}
                  <motion.div 
                    className={`relative overflow-hidden rounded-3xl aspect-[4/3] ${
                      i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-60 mix-blend-overlay z-10`} />
                    
                    {/* Image */}
                    <div className="absolute inset-0 bg-black/40 z-[5]" />
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Results Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="grid grid-cols-3 gap-4">
                        {work.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-green-400 font-heading font-bold text-xl">
                              {result.value}
                            </div>
                            <div className="text-white/80 text-xs">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Badge with Animation */}
                    {/* <motion.div 
                      className="absolute top-4 right-4 z-30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-gradient-to-r from-green-400 to-green-500 text-black px-4 py-2 rounded-full font-heading font-bold text-sm flex items-center gap-2 shadow-lg">
                        <MetricIcon className="w-4 h-4" />
                        {work.metrics}
                      </div>
                    </motion.div> */}

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                      {work.tags.map((tag, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div 
                    variants={textVariants}
                    className={`${
                      i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    } relative`}
                  >
                    <div className="space-y-6">
                      {/* Category Badge */}
                      <div className="inline-block">
                        <span className="text-xs uppercase tracking-[0.2em] text-green-400 font-medium bg-green-400/10 px-4 py-2 rounded-full">
                          {work.category}
                        </span>
                      </div>

                      {/* Title with Interactive Arrow */}
                      <Link 
                        to={`/work/${work.num}`}
                        className="block group/title"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground group-hover/title:text-green-400 transition-colors duration-300">
                            {work.title}
                          </h3>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex-shrink-0"
                          >
                            <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center group-hover/title:bg-green-400 transition-colors duration-300">
                              <ArrowUpRight className="w-5 h-5 text-green-400 group-hover/title:text-black transition-colors duration-300" />
                            </div>
                          </motion.div>
                        </div>
                      </Link>

                      {/* Description */}
                      <p className="font-body text-muted-foreground text-lg leading-relaxed">
                        {work.desc}
                      </p>

                      {/* Key Results Preview */}
                      <div className="grid grid-cols-3 gap-4 pt-4">
                        {work.results.map((result, idx) => (
                          <div key={idx} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-green-400 font-heading font-bold text-lg">
                              {result.value}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study Link */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="pt-4"
                      >
                        <Link 
                          to={`/work/${work.num}`}
                          className="inline-flex items-center gap-3 text-green-400 font-medium hover:text-green-300 transition-colors duration-300 group/link"
                        >
                          <span className="text-lg">View Case Study</span>
                          <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover/link:w-full transition-all duration-300" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative text-center mt-32"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-blue-400/20 blur-3xl -z-10" />
          
          {/* <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to Write Your Success Story?
          </h3> */}
          
          {/* <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-heading font-bold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
          >
            <span className="text-lg">Start Your Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link> */}
        </motion.div>
      </div>

      <style jsx>{`
        .lg\\:direction-rtl {
          direction: rtl;
        }
        .lg\\:direction-rtl > div {
          direction: ltr;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default OurWorks;