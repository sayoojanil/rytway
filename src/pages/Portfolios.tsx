import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Filter, Eye, ExternalLink } from "lucide-react";

const portfolioItems = [
  // Posters
  {
    id: 1,
    title: "Brand Identity Poster",
    category: "Posters",
    type: "poster",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop",
    description: "Modern brand identity poster design for a tech startup.",
    year: "2024",
    tags: ["Branding", "Digital Design", "Typography"]
  },
  {
    id: 2,
    title: "Event Promotion Poster",
    category: "Posters",
    type: "poster",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800&fit=crop",
    description: "Eye-catching event promotion poster with vibrant colors.",
    year: "2024",
    tags: ["Events", "Marketing", "Print Design"]
  },
  {
    id: 3,
    title: "Product Launch Poster",
    category: "Posters",
    type: "poster",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=800&fit=crop",
    description: "Minimalist product launch poster design.",
    year: "2023",
    tags: ["Product", "Launch", "Minimalism"]
  },
  // Marketing Campaigns
  {
    id: 4,
    title: "E-Commerce Brand Growth",
    category: "Marketing",
    type: "campaign",
    image: "https://www.dakshadigitas.com/wp-content/uploads/2023/07/digital-marketing-agency-in-chennai.webp",
    description: "Scaled a fashion e-commerce brand from ₹2L to ₹18L monthly revenue using paid ads, funnel optimization, and conversion-focused creatives.",
    metrics: "900% Revenue Growth",
    year: "2024",
    tags: ["Meta Ads", "Google Ads", "CRO", "E-commerce"]
  },
  {
    id: 5,
    title: "Real Estate Lead Generation",
    category: "Marketing",
    type: "campaign",
    image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?semt=ais_hybrid&w=740&q=80",
    description: "Generated 3,000+ qualified leads in 90 days through targeted Meta and Google ad campaigns with optimized landing pages.",
    metrics: "3,000+ Leads",
    year: "2024",
    tags: ["Lead Magnets", "Landing Pages", "Retargeting", "Real Estate"]
  },
  {
    id: 6,
    title: "Local Business Expansion",
    category: "Marketing",
    type: "campaign",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Helped a local service-based business expand to 3 new cities using SEO, paid ads, and automated lead nurturing systems.",
    metrics: "3 New Markets",
    year: "2023",
    tags: ["Local SEO", "Marketing Automation", "PPC", "Expansion"]
  },
  // Web Design
  {
    id: 7,
    title: "E-commerce Website",
    category: "Web Design",
    type: "website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Modern e-commerce website with seamless user experience and conversion optimization.",
    year: "2024",
    tags: ["React", "E-commerce", "UI/UX", "Conversion"]
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web Design",
    type: "website",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
    description: "Creative portfolio website showcasing artistic work with smooth animations.",
    year: "2023",
    tags: ["Portfolio", "Creative", "Animations", "Responsive"]
  },
  {
    id: 9,
    title: "Business Landing Page",
    category: "Web Design",
    type: "website",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    description: "High-converting landing page for B2B SaaS company.",
    year: "2024",
    tags: ["Landing Page", "B2B", "SaaS", "Conversion"]
  }
];

const categories = ["All", "Posters", "Marketing", "Web Design"];

const Portfolios = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

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
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-[#0a0f1f] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-heading font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              Our Portfolio
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Creative
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-3">
                Work
              </span>
            </motion.h1>

            <motion.p
              className="text-xl font-body text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Explore our diverse portfolio of creative projects, from stunning poster designs to successful marketing campaigns and innovative web solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      {/* Overlay Gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Image */}
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.4 }
                        }}
                      />

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 z-20"
                        initial={{ x: -20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-heading font-semibold rounded-full border border-white/30">
                          {item.category}
                        </span>
                      </motion.div>

                      {/* Year Badge */}
                      <motion.div
                        className="absolute top-4 right-4 z-20"
                        initial={{ x: 20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="px-3 py-1 bg-purple-600 text-white text-sm font-heading font-semibold rounded-full">
                          {item.year}
                        </span>
                      </motion.div>

                      {/* Hover Content */}
                      <motion.div
                        className="absolute inset-0 z-20 flex flex-col justify-end p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.h3
                          className="text-white text-2xl font-heading font-bold mb-2"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          className="text-white/90 text-sm font-body mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          {item.description}
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                        >
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-body rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        <motion.button
                          className="self-start px-4 py-2 bg-white text-gray-900 rounded-lg font-heading font-semibold text-sm hover:bg-purple-600 hover:text-white transition-colors duration-300"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Bottom Info */}
                    <div className="p-6 bg-gray-800 border-t border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-heading font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm font-heading text-purple-400 font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <p className="font-body text-gray-300 text-sm line-clamp-2 mb-3">
                        {item.description}
                      </p>

                      {/* Metrics for marketing campaigns */}
                      {item.metrics && (
                        <div className="text-sm font-heading font-bold text-green-400 mb-3">
                          {item.metrics}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-body rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Animated Underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mt-4"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-heading font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolios;