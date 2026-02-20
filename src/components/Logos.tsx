        import { motion } from "framer-motion";
        import SectionWrapper from "./SectionWrapper";

        const logos = [
        { 
            id: 1, 
            name: "Google", 
            logo: "/assets/Screenshot 2026-02-20 212852.png",
            bgColor: "#000000" // Google blue
        },
        { 
            id: 2, 
            name: "Microsoft", 
            logo: "/assets/Screenshot 2026-02-20 215640.png",
            bgColor: "#00A4EF" // Microsoft blue
        },
        { 
            id: 3, 
            name: "Amazon", 
            logo: "/assets/Screenshot 2026-02-20 215739.png",
            bgColor: "#FF9900" // Amazon orange
        },
        { 
            id: 4, 
            name: "Apple", 
            logo: "/assets/Screenshot 2026-02-20 215726.png",
            bgColor: "#000000" // Apple black
        },
        { 
            id: 5, 
            name: "Meta", 
            logo: "/assets/Screenshot 2026-02-20 215705.png",
            bgColor: "#0668E1" // Meta blue
        },
        { 
            id: 6, 
            name: "Netflix", 
            logo: "/assets/Screenshot 2026-02-20 215656.png",
            bgColor: "#E50914" // Netflix red
        },
        ];

// const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
const duplicatedLogos = [...logos, ...logos];

const LogoLoop = () => {
  return (
    <SectionWrapper id="trusted-brands" number="06">
      {/* <div className="py-20 overflow-hidden"> */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-5xl mb-6">
            some brands are more than a name
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join over 500+ companies who rely on our platform to drive growth, 
            streamline operations, and deliver exceptional results.
          </p>
        </div>

        <div className="relative">
         <motion.div
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    duration: 15, // slightly faster for mobile
    ease: "linear",
  }}
  className="flex gap-10 w-max"
>
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-80 h-48 group"
              >
                <div className="w-full h-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 p-6"> 
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.logo} 
                      alt={`${logo.name} logo`}
                      className="w-full h-full object-contain scale-110" // Added scale-110 and full width/height
                      onError={(e) => {
                        console.log(`Failed to load: ${logo.logo}`);
                        e.currentTarget.style.display = 'none';
                        // Add fallback text
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.className = 'text-white font-bold text-2xl'; // Increased text size
                          span.textContent = logo.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </div>
                
              </div>
            ))}
          </motion.div>
          
        </div>
        <br/>
        <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-4xl mb-6">
            Discover all your brand can be.
          </h2>
          <h3 className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you’ ve taken over an established business and are looking to make your mark on its future, or! you’re its founder and need to re-align the team to your original mission, were here The best digital marketing  | advertising |  brandng agency in calicut , kerala. make sure that when the story has been told, it’ll be yours.
          </h3>
        </div>

        {/* <div className="text-center mt-16"> 
          <button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-lg"> 
            Join Them
          </button>
        </div> */}
      {/* </div> */}
    </SectionWrapper>
  );
};

export default LogoLoop;    