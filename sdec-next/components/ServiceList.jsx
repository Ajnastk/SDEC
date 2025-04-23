"use client";
import { contents } from "@/Contents";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useState } from "react";
import TiltedCard from "@/public/assets/animations/TiltedCard";

export default function ServiceList() {
  const { services } = contents;
  const [isInView, setIsInView] = useState(false);

  const handleInView = (inView) => {
    setIsInView(inView);
  };
  // Animation variants for the service items
  const itemVariants = {
    hidden: { opacity: 0, x: -100 }, // Start from the left side
    visible: { opacity: 1, x: 0 }, // Move to the original position (right side)
  };

  // Define dynamic margin-left values
  const marginLeftValues = [
    "ml-[200px]",
    "ml-[250px]",
    "ml-[300px]",
    "ml-[140px]",
    "ml-[0px]",
  ];

  return (
    <div>
      {/* Show only Desktop View */}
      <div className="space-y-6 ml-[20%] mt-[70px] hidden lg:block">
        {Object.keys(services.servicesList).map((key, index) => {
          const service = services.servicesList[key];
          return (
            <TiltedCard
              key={index}
              className={`${marginLeftValues[index % marginLeftValues.length]}`}
              altText={service.title}
              containerHeight="250px"
              containerWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  animate={isInView ? "visible" : "hidden"}
                  onViewportBoxUpdate={(_, info) =>
                    handleInView(info.isIntersecting)
                  }
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-102">
                    <div className="w-16 flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-[90%] object-contain"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-gray-400 text-sm w-[80%]">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
                      ➜
                    </div>
                  </div>
                </motion.div>
              }
            />
          );
        })}
      </div>

      {/* Show only Mobile view */}
      <div className="w-full flex flex-col items-center justify-center lg:hidden px-4 sm:px-2 space-y-4">
        {Object.keys(services.servicesList).map((key, index) => {
          const service = services.servicesList[key];
          return (
            <motion.div
              key={index}
              className="sm:w-[500px]"
              initial="hidden"
              whileInView="visible"
              animate={isInView ? "visible" : "hidden"} // Reverts animation to "hidden" when not in view
              onViewportBoxUpdate={(_, info) =>
                handleInView(info.isIntersecting)
              } // Update state based on visibility
              // viewport={{ once: true }}
              variants={itemVariants}
              transition={{
                duration: 0.8, // Increase duration for smoother animation
                ease: "easeOut", // Smoother easing
              }}
            >
              <div className="flex items-center p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-105">
                {/* Service Icon */}
                <div className="w-16 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[90%] object-contain"
                  />
                </div>

                {/* Service Details */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>

                {/* Arrow Icon */}
                <div className="text-gray-500 flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
                  ➜
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
