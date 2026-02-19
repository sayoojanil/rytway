import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, TrendingUp, Users, Target, Zap, ShoppingCart, Building2, GraduationCap, Heart, Globe, Phone, X } from "lucide-react";

const works = [
  {
    num: "01",
    title: "E-Commerce Brand Growth",
    category: "Performance Marketing",
    desc: "Scaled a fashion e-commerce brand from ₹2L to ₹18L monthly revenue using paid ads, funnel optimization, and conversion-focused creatives.",
    metrics: "900% Revenue Growth",
    metricIcon: TrendingUp,
    image: "/assets/DB.jpg.jpeg",
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
    image: "/assets/fivestar.jpeg",
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
    image: "/assets/3.jpg.jpeg",
    metrics: "500% Oversubscribed",
    tags: ["Product Launch", "Email Marketing", "LinkedIn"],
    gradient: "",
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
    image: "/assets/2A.jpg.jpeg",
    metrics: "3 New Markets",
    tags: ["Local SEO", "Marketing Automation", "PPC"],
    gradient: "from-orange-600 to-red-600",
    results: [
      { label: "Revenue Growth", value: "+245%" },
      { label: "Market Share", value: "18%" },
      { label: "ROI", value: "4.8x" }
    ]
  },
  {
    num: "05",
    title: "Healthcare App Marketing",
    category: "App Growth",
    desc: "Drove 100K+ downloads for a healthcare appointment booking app through ASO and targeted social media campaigns.",
    metricIcon: Heart,
    image: "/assets/IMG_20260206_155237.jpg.jpeg",
    metrics: "100K+ Downloads",
    tags: ["ASO", "App Install Ads", "Influencer Marketing"],
    gradient: "from-red-600 to-pink-600",
    results: [
      { label: "CPI Reduction", value: "-45%" },
      { label: "Retention", value: "68%" },
      { label: "Rating", value: "4.8★" }
    ]
  },
  {
    num: "06",
    title: "EdTech Platform Growth",
    category: "User Acquisition",
    desc: "Scaled an online learning platform to 50,000+ active users through content marketing and paid acquisition strategies.",
    metricIcon: GraduationCap,
    image: "/assets/IMG_20260206_155105.jpg.jpeg",
    metrics: "50K+ Users",
    tags: ["Content Marketing", "YouTube Ads", "Email Automation"],
    gradient: "from-blue-600 to-indigo-600",
    results: [
      { label: "Course Completion", value: "82%" },
      { label: "NPS Score", value: "+72" },
      { label: "Revenue", value: "+340%" }
    ]
  }
];

const OurWorks = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-100px"
  });

  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'works');
    } else {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    }

    // Cleanup function to ensure scroll is re-enabled and attribute removed when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    };
  }, [selectedImage]);

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
          {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" /> */}
          {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" /> */}
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
            // className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full mb-4"
          >
            {/* <Zap className="w-4 h-4" /> */}
            {/* <span className="text-sm font-medium">Our Work</span> */}
          </motion.div>
          
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
            Portfolios
          </h2>
          
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for real businesses. Browse our latest success stories.
          </p>
        </motion.div>

        {/* Image Grid - Fixed height grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          style={{
            gridAutoRows: '280px' // Fixed height for all rows
          }}
        >
          {works.map((work, i) => {
            const MetricIcon = work.metricIcon;
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => setSelectedImage(work.image)}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300 cursor-pointer h-full"
              >
                {/* Image Container - Full height */}
                <div className="relative w-full h-full overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                  
                  {/* Image - Cover the entire container */}
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Number Badge - Keeping minimal */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {work.num}
                    </span>
                  </div>
                  
                  {/* Metric Badge - Minimal */}
                  <div className="absolute top-4 right-4 z-20">
                    {/* <div className="bg-black/80 backdrop-blur-sm text-green-400 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/10">
                      <MetricIcon className="w-3 h-3" />
                      <span>{work.metrics}</span>
                    </div> */}
                  </div>
                </div>
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
            {/* <span className="font-medium">View All Projects</span> */}
            {/* <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
          </Link>
        </motion.div>

        {/* Image Zoom Modal - Updated with higher z-index */}
        {selectedImage && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl cursor-pointer"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Zoomed Image */}
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Zoomed project"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info - Optional minimal info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-6 left-6 text-white/80 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                {works.find(w => w.image === selectedImage)?.title}
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
      </div>
    </SectionWrapper>
  );
};

export default OurWorks;