import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    num: "01",
    title: "E-Commerce Brand Growth",
    category: "Performance Marketing",
    desc: "Scaled a fashion e-commerce brand from ₹2L to ₹18L monthly revenue using paid ads, funnel optimization, and conversion-focused creatives.",
    metrics: "900% Revenue Growth",
    image:"https://www.dakshadigitas.com/wp-content/uploads/2023/07/digital-marketing-agency-in-chennai.webp",
    tags: ["Meta Ads", "Google Ads", "CRO"]
  },
  {
    num: "02",
    title: "Real Estate Lead Generation",
    category: "Lead Generation",
    desc: "Generated 3,000+ qualified leads in 90 days through targeted Meta and Google ad campaigns with optimized landing pages.",
    image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_hybrid&w=740&q=80",
    metrics: "3,000+ Leads",
    tags: ["Lead Magnets", "Landing Pages", "Retargeting"]
  },
  // {
  //   num: "03",
  //   title: "Personal Brand Positioning",
  //   category: "Brand Strategy",
  //   desc: "Built a strong digital presence for a startup founder through content strategy, LinkedIn positioning, and authority-building campaigns.",
  //   image: "/images/works/personal-brand.jpg",
  //   metrics: "500K+ Reach",
  //   tags: ["Content Strategy", "LinkedIn", "PR"]
  // },
  // {
  //   num: "04",
  //   title: "Local Business Expansion",
  //   category: "Digital Transformation",
  //   desc: "Helped a local service-based business expand to 3 new cities using SEO, paid ads, and automated lead nurturing systems.",
  //   image: "/images/works/local-business.jpg",
  //   metrics: "3 New Markets",
  //   tags: ["Local SEO", "Marketing Automation", "PPC"]
  // },
  // {
  //   num: "05",
  //   title: "Product Launch Campaign",
  //   category: "Launch Strategy",
  //   desc: "Executed a multi-channel launch campaign that generated 5x ROAS within the first 30 days of release.",
  //   image: "/images/works/product-launch.jpg",
  //   metrics: "5x ROAS",
  //   tags: ["Pre-launch", "Influencer Marketing", "Email"]
  // },
];

const OurWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionWrapper id="works" number="05" numberPosition="right">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-4">
            Our Works
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl">
            Real results for real businesses. Explore our portfolio of successful campaigns and transformations.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {works.map((work, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image Section */}
              <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${
                i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Replace with actual image - you can use placeholder images for now */}
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback for demo purposes - you can use gradient backgrounds
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
                  }}
                />
                
                {/* Metrics Badge */}
                <div className="absolute top-4 right-4 bg-green-400 text-black px-4 py-2 rounded-full font-heading font-bold text-sm z-20">
                  {work.metrics}
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                  {work.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className={`${
                i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <div className="space-y-4">
                  {/* Number and Category */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-heading text-5xl md:text-6xl font-black text-green-400/20 group-hover:text-green-400/40 transition-colors duration-300">
                      {work.num}
                    </span>
                    <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                      {work.category}
                    </span>
                  </div>

                  {/* Title with Arrow */}
               
                  <div className="flex items-start justify-between group/title cursor-pointer">
                    <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground group-hover:text-blue-400 transition-colors duration-300 max-w-xl">
                      {work.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover/title:text-blue-400 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                    {work.desc}
                  </p>

                  {/* View Case Study Link */}
                  <Link 
                    to={`/work/${work.num}`}
                    className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-green-400 transition-colors duration-300 mt-4 group/link"
                  >
                    View Case Study 
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-400 hover:bg-green-400 text-black font-heading font-bold px-8 py-4 rounded-full transition-colors duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div> */}
      </div>
    </SectionWrapper>
  );
};

export default OurWorks;