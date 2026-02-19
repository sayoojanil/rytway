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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full mb-4"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>
          
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for real businesses. Browse our latest success stories.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {works.map((work, i) => {
            const MetricIcon = work.metricIcon;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                {/* Image Container */}
                <Link to={`/work/${work.num}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                    
                    {/* Image */}
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                        {work.num}
                      </span>
                    </div>
                    
                    {/* Metric Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/80 backdrop-blur-sm text-green-400 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10">
                        <MetricIcon className="w-3 h-3" />
                        <span>{work.metrics}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                      {work.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-medium border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {work.tags.length > 2 && (
                        <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-medium border border-white/20">
                          +{work.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-green-400 transition-colors line-clamp-1">
                        {work.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    
                    <p className="font-body text-muted-foreground text-sm line-clamp-2 mb-3">
                      {work.desc}
                    </p>
                    
                    {/* Quick Results */}
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-green-400 font-medium">{work.results[0].value}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-green-400 font-medium">{work.results[1].value}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-green-400 font-medium">{work.results[2].value}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link 
            to="/work"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default OurWorks;