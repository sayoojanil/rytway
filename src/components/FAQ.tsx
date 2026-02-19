import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Mail, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital marketing services including performance marketing, lead generation, brand strategy, SEO, PPC advertising, content creation, and digital transformation consulting.",
    category: "services"
  },
  {
    question: "How do you measure success?",
    answer: "We focus on key performance indicators like ROI, conversion rates, lead quality, brand awareness metrics, and revenue growth. Each campaign is tailored with specific, measurable goals.",
    category: "performance"
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A standard campaign setup takes 2-4 weeks, while comprehensive brand transformations may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    category: "process"
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with startups, small businesses, and enterprise clients. Our strategies are scalable and can be customized to fit different budgets and business stages.",
    category: "clients"
  },
  {
    question: "What makes your approach different?",
    answer: "We combine data-driven strategies with creative execution, focusing on sustainable growth rather than quick wins. Our team has extensive experience across industries and stays updated with the latest digital marketing trends.",
    category: "approach"
  },
  {
    question: "How do you handle pricing?",
    answer: "We offer flexible pricing models including project-based, retainer, and performance-based arrangements. Pricing depends on the scope, duration, and specific requirements of your project.",
    category: "pricing"
  },
  {
    question: "Can you work with our existing marketing team?",
    answer: "Absolutely. We can collaborate with your in-house team, provide training, or take a lead role depending on your needs. Our goal is to empower your business with sustainable marketing capabilities.",
    category: "collaboration"
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across various industries including e-commerce, real estate, healthcare, technology, professional services, and consumer brands. Our adaptable approach works across sectors.",
    category: "industries"
  }
];

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
  hidden: { opacity: 0, y: 20 },
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

const FAQ = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px"
  });
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const filteredFaqs = activeCategory 
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  return (
    <SectionWrapper id="faq" number="06" numberPosition="left">
      <div ref={ref} className="flex flex-col gap-6 md:gap-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 50
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-4"
          >
            {/* <div className="relative">
              <HelpCircle className="w-16 h-16 text-gre-400" />
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-green-400" />
              </motion.div>
            </div> */}
          </motion.div>

          <motion.h2 
            className="font-heading font-black text-4xl md:text-6xl lg:text-5xl mb-6 bg-gray-200 bg-clip-text text-transparent"
            animate={inView ? { 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            className="font-body text-muted-foreground text-lg md:text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Got questions? We've got answers. Here are some of the most common 
            questions we receive from our clients.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-heading font-semibold transition-all duration-300 ${
              !activeCategory 
                ? 'bg-green-400 text-black shadow-lg shadow-blue-400/25' 
                : 'bg-card text-muted-foreground hover:bg-green-400/10 hover:text-green'
            }`}
          >
            All
          </motion.button>
          
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-heading font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-green-400 text-black shadow-lg shadow-blue-400/25' 
                  : 'bg-card text-muted-foreground hover:bg-green-400/10 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto w-full"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="backdrop-blur-lg border border-border rounded-none px-4 md:px-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-blue-400/30 group"
                >
                  <AccordionTrigger className="text-left font-heading font-normal text-base md:text-lg py-4 md:py-5 hover:text-green-400 transition-colors no-underline hover:no-underline">
                    <motion.span
                      initial={false}
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      {faq.question}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-4 md:pb-5">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
       
      </div>
    </SectionWrapper>
  );
};

export default FAQ;