import { contents } from "../Contents";
import ServiceList from "./ServiceList";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useState } from "react";
import Magnet from "../assets/animations/Magnet";

const Services = () => {
  const { services } = contents;

  const [isInView, setIsInView] = useState(false); // State to track visibility

  const itemVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from the left side
    visible: { opacity: 1, x: 0 }, // Move to the original position (right side)
  };

  // When component comes into view, trigger the animation
  const handleInView = (inView) => {
    setIsInView(inView);
  };

  return (
    <div
      className="flex flex-col bg-[#000A1F] py-20 text-white min-h-screen pt-20 scroll-mt-20"
      id="services"
    >
      {/* Background Title */}
      <h1 className="absolute text-center left-1/2 transform -translate-x-1/2 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-none tracking-tight uppercase text-transparent stroke-white">
        {services.backgroundHeading}
      </h1>

      {/* Section Title */}
      <div className="text-center mb-10 flex justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-10">
          <img className="ml-[250px]" src={services.underLineImage} alt="" />
          Great Features To Do Your Business <br /> Growth & Development
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-wrap items-center justify-center">
        {/* Services Logo (Hidden on Small Screens) */}
        <div className="absolute mb-10 mr-[35%] w-full md:w-1/3 lg:w-2/7 hidden lg:block hover:scale-99">
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Reverts animation to "hidden" when not in view
              whileInView="visible"
              onViewportBoxUpdate={(_, info) =>
                handleInView(info.isIntersecting)
              } // Update state based on visibility
              variants={itemVariants}
              transition={{
                duration: 1, // Increase duration for smoother animation
                ease: "easeOut", // Smoother easing
              }}
            >
              <motion.img
                animate={{ scale: [], y: [0, 10, 0],x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                src={services.logo}
                alt="Left Icon"
                className="w-full"
              />
              {/* <img className="w-full" src={services.logo} alt="" /> */}
            </motion.div>
          </Magnet>
        </div>

        {/* Services List */}
        <div className="w-full p-5 md:w-1/2">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default Services;
