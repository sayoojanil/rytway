import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const works = [
  {
    num: "01",
    title: "E-Commerce Brand Growth",
    category: "Performance Marketing",
    desc: "Scaled a fashion e-commerce brand from ₹2L to ₹18L monthly revenue using paid ads, funnel optimization, and conversion-focused creatives.",
    metrics: "900% Revenue Growth",
    image: "https://www.dakshadigitas.com/wp-content/uploads/2023/07/digital-marketing-agency-in-chennai.webp",
    tags: ["Meta Ads", "Google Ads", "CRO"],
    fullDesc: "This comprehensive e-commerce growth project involved a complete overhaul of the client's digital marketing strategy. We started with an in-depth audit of their existing campaigns and identified key opportunities in audience targeting and creative optimization. Our team implemented advanced funnel optimization techniques, including A/B testing of landing pages, email sequences, and checkout flows. The result was a staggering 900% increase in monthly revenue within 6 months, proving the effectiveness of data-driven marketing approaches.",
    challenge: "The client was struggling with low conversion rates and inefficient ad spend across multiple platforms.",
    solution: "We consolidated their marketing efforts, implemented advanced tracking, and created conversion-focused creatives that resonated with their target audience.",
    results: ["900% revenue growth", "Improved ROAS by 300%", "Reduced cost per acquisition by 40%"]
  },
  {
    num: "02",
    title: "Real Estate Lead Generation",
    category: "Lead Generation",
    desc: "Generated 3,000+ qualified leads in 90 days through targeted Meta and Google ad campaigns with optimized landing pages.",
    image: "/images/works/real-estate.jpg",
    metrics: "3,000+ Leads",
    tags: ["Lead Magnets", "Landing Pages", "Retargeting"],
    fullDesc: "In this real estate lead generation campaign, we targeted high-intent buyers in specific geographic locations. Our strategy combined paid advertising with compelling lead magnets and optimized landing pages designed to capture and nurture potential clients. We implemented sophisticated retargeting campaigns to re-engage visitors who didn't convert initially.",
    challenge: "The real estate market was highly competitive with many agencies vying for the same leads.",
    solution: "We developed unique value propositions, created high-converting lead magnets, and implemented automated follow-up sequences.",
    results: ["3,000+ qualified leads", "45% conversion rate", "Average lead value of ₹25,000"]
  },
  {
    num: "03",
    title: "Personal Brand Positioning",
    category: "Brand Strategy",
    desc: "Built a strong digital presence for a startup founder through content strategy, LinkedIn positioning, and authority-building campaigns.",
    image: "/images/works/personal-brand.jpg",
    metrics: "500K+ Reach",
    tags: ["Content Strategy", "LinkedIn", "PR"],
    fullDesc: "This personal branding project transformed a startup founder from an unknown entrepreneur to a recognized industry expert. We developed a comprehensive content strategy that positioned them as a thought leader in their niche. Our approach included LinkedIn optimization, content creation, speaking opportunities, and strategic partnerships.",
    challenge: "The founder lacked visibility and credibility in their industry despite having valuable expertise.",
    solution: "We created a content calendar, optimized their LinkedIn profile, and secured speaking engagements and media features.",
    results: ["500K+ social media reach", "Featured in 15+ publications", "Increased consulting opportunities by 200%"]
  },
  {
    num: "04",
    title: "Local Business Expansion",
    category: "Digital Transformation",
    desc: "Helped a local service-based business expand to 3 new cities using SEO, paid ads, and automated lead nurturing systems.",
    image: "/images/works/local-business.jpg",
    metrics: "3 New Markets",
    tags: ["Local SEO", "Marketing Automation", "PPC"],
    fullDesc: "This local business expansion project involved scaling a successful service-based business from one city to four cities. We implemented a multi-channel approach combining local SEO, paid advertising, and marketing automation to establish presence in new markets while maintaining service quality.",
    challenge: "The business had strong local reputation but lacked the digital infrastructure to expand geographically.",
    solution: "We developed location-specific SEO strategies, set up automated lead nurturing systems, and created market entry campaigns for each new city.",
    results: ["Successful expansion to 3 new cities", "300% increase in qualified leads", "Maintained 95% customer satisfaction"]
  },
  {
    num: "05",
    title: "Product Launch Campaign",
    category: "Launch Strategy",
    desc: "Executed a multi-channel launch campaign that generated 5x ROAS within the first 30 days of release.",
    image: "/images/works/product-launch.jpg",
    metrics: "5x ROAS",
    tags: ["Pre-launch", "Influencer Marketing", "Email"],
    fullDesc: "This product launch campaign was designed to create maximum buzz and drive immediate sales for a new software product. Our strategy included pre-launch teaser campaigns, influencer partnerships, email marketing sequences, and comprehensive analytics to track performance and optimize in real-time.",
    challenge: "The product was entering a crowded market with established competitors and needed to capture market share quickly.",
    solution: "We built anticipation through strategic pre-launch campaigns, leveraged influencers for social proof, and created urgency with limited-time offers.",
    results: ["5x return on ad spend", "10,000+ beta signups", "Achieved product-market fit within 30 days"]
  },
];

const WorkDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const work = works.find(w => w.num === id);

  if (!work) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Work Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-green-400 transition-colors">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl font-black text-green-400/20">{work.num}</span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                {work.category}
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-6xl mb-6">
              {work.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-400/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-green-400 text-black px-6 py-3 rounded-full font-heading font-bold text-lg inline-block">
              {work.metrics}
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl mb-8">Project Overview</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {work.fullDesc}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl mb-8">The Challenge</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {work.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl mb-8">Our Solution</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {work.solution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl mb-8">Results & Impact</h2>
              <ul className="space-y-4">
                {work.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-lg leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <h2 className="font-heading font-bold text-3xl mb-6">
                Ready to Achieve Similar Results?
              </h2>
              <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with data-driven digital marketing strategies.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-blue-400 hover:bg-green-400 text-black font-heading font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkDetail;