import { contents } from "../Contents";
import ServiceList from "./ServiceList";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useState } from "react";
import Magnet from "../assets/animations/Magnet";
import ScrollFloat from "../assets/animations/ScrollFloat";

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
      className="flex flex-col bg-[#000A1F] py-20 text-white min-h-screen pt-20 mt-[130px]"
      id="services"
    >
      {/* Background Title */}
      <div className=" text-center font-bold mb-[-30px] md:mb-[-40px] md:ml-[-10px]">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.03}
        >
          {services.backgroundHeading}
        </ScrollFloat>
      </div>

      {/* Section Title */}
      <div className="text-center md:mb-[-70px] flex justify-center">
        <h2 className="text-3xl md:text-4xl mb-6 mt- text-gray-400">
          <div className="flex justify-center">
            <img className="" src={services.underLineImage} alt="" />
          </div>
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
                animate={{ scale: [], y: [0, 10, 0], x: [0, 10, 0] }}
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
