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
    <section className="py-20 bg-[#0a0f1f] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-[#FFD700]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring creativity through innovative poster designs
          </p>
        </motion.div>

        {/* Overlapping Grid Layout */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] max-w-5xl mx-auto">
          {posters.map((poster, index) => {
            // Calculate position for each poster
            const positions = [
              { top: '0%', left: '0%', width: '60%', zIndex: 3 },        // Left poster
              { top: '15%', left: '30%', width: '60%', zIndex: 2 },      // Middle poster
              { top: '30%', left: '60%', width: '60%', zIndex: 1 }       // Right poster
            ];

            return (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: positions[index].top,
                  left: positions[index].left,
                  width: positions[index].width,
                  zIndex: positions[index].zIndex,
                }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <motion.img
                        src={poster.image}
                        alt={poster.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <motion.h3
                            className="text-xl md:text-2xl font-heading font-bold mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            {poster.title}
                          </motion.h3>
                          <motion.p
                            className="text-sm text-gray-300"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {poster.description}
                          </motion.p>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold">+</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-16"
        /> */}
      </div>
    </section>
  );
};

export default Posters;