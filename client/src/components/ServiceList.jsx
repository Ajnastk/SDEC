import { contents } from "../Contents";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useState } from "react";
import TiltedCard from "../assets/animations/TiltedCard";

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

  return (
    <div>
      {/* Show only Desktop View */}
      <div className="space-y-6 ml-[20%] mt-[70px] hidden lg:block">
  {/* Graphics Design */}
  <TiltedCard
    className="ml-[200px]"
    altText="Kendrick Lamar - GNX Album Cover"
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
        onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)}
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-102">
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.graphicsDesign.image}
              alt={services.servicesList.graphicsDesign.title}
              className="w-[90%] object-contain"
            />

          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.graphicsDesign.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.graphicsDesign.description}
            </p>
          </div>
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </motion.div>
    }
  />

  {/* Ideation and Evaluation */}
  <TiltedCard
    className="ml-[250px]"
    altText="Kendrick Lamar - GNX Album Cover"
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
        onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)}
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.ideationAndEvaluation.image}
              alt={services.servicesList.ideationAndEvaluation.title}
              className="w-[90%] object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.ideationAndEvaluation.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.ideationAndEvaluation.description}
            </p>
          </div>
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </motion.div>
    }
  />

  {/* Brand Identity */}
  <TiltedCard
    className="ml-[300px]"
    altText="Kendrick Lamar - GNX Album Cover"
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
        onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)}
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.brandIdentity.image}
              alt={services.servicesList.brandIdentity.title}
              className="w-[90%] object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.brandIdentity.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.brandIdentity.description}
            </p>
          </div>
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </motion.div>
    }
  />

  {/* Customer Service */}
  <TiltedCard
    className="ml-[140px]"
    altText="Kendrick Lamar - GNX Album Cover"
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
        onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)}
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.customerService.image}
              alt={services.servicesList.customerService.title}
              className="w-[90%] object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.customerService.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.customerService.description}
            </p>
          </div>
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </motion.div>
    }
  />

  {/* Web Strategy */}
  <TiltedCard
    className="mr-[90%]"
    altText="Kendrick Lamar - GNX Album Cover"
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
        onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)}
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.webStrategy.image}
              alt={services.servicesList.webStrategy.title}
              className="w-[90%] object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.webStrategy.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.webStrategy.description}
            </p>
          </div>
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </motion.div>
    }
  />
</div>

      {/* Show only Mobile view */}
      <div className="w-full flex flex-col items-center justify-center lg:hidden px-4 sm:px-6 space-y-4">
        {Object.keys(services.servicesList).map((key, index) => {
          const service = services.servicesList[key];
          return (
            <motion.div
              key={index}
              className="w-full max-w-[400px]"
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
