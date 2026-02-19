import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const posters = [
  {
    id: 1,
    title: "Project One",
    image: "/assets/poster.png",
    description: "A stunning poster design for project one."
  },
  {
    id: 2,
    title: "Project Two",
    image: "/assets/fivestar.jpeg",
    description: "Creative poster for project two."
  },
  {
    id: 3,
    title: "Project Three",
    image: "/assets/DB.jpg.jpeg",
    description: "Innovative design for project three."
  }
];

const Posters = () => {
  return (
    <section className="py-20 bg-[#0a0f1f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Optional title can be uncommented if needed */}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative overflow-hidden h-full">
                    <motion.img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.h3
                        className="text-white text-sm md:text-xl font-heading font-semibold text-center px-2 md:px-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {poster.title}
                      </motion.h3>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posters;