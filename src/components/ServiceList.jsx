import { contents } from "../contents";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useState } from "react";

const ServiceList = () => {
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
      <div className="space-y-6 ml-[20%] hidden lg:block">
        {/* graphicsDesign */}
        <motion.div
          className="ml-[160px]"
          initial="hidden"
          whileInView="visible"
          animate={isInView ? "visible" : "hidden"}  // Reverts animation to "hidden" when not in view
          onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)} // Update state based on visibility
          // viewport={{ once: true }}
          variants={itemVariants}
          transition={{
            duration: 0.8, // Increase duration for smoother animation
            ease: "easeOut", // Smoother easing
          }}
        >
          <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-102">
            {/* Service Icon */}
            <div className="w-16 flex items-center justify-center">
              <img
                src={services.servicesList.graphicsDesign.image}
                alt={services.servicesList.graphicsDesign.title}
                className="w-[90%] object-contain"
              />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">
                {services.servicesList.graphicsDesign.title}
              </h3>
              <p className="text-gray-400 text-sm w-[80%]">
                {services.servicesList.graphicsDesign.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
              ➜
            </div>
          </div>
        </motion.div>

        {/* ideationAndEvaluation */}
        <motion.div
          className="ml-[210px]"
          initial="hidden"
          whileInView="visible"
          animate={isInView ? "visible" : "hidden"}  // Reverts animation to "hidden" when not in view
          onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)} // Update state based on visibility
          // viewport={{ once: true }}
          variants={itemVariants}
          transition={{
            duration: 0.8, // Increase duration for smoother animation
            ease: "easeOut", // Smoother easing
          }}
        >
          <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
            {/* Service Icon */}
            <div className="w-16 flex items-center justify-center">
              <img
                src={services.servicesList.ideationAndEvaluation.image}
                alt={services.servicesList.ideationAndEvaluation.title}
                className="w-[90%] object-contain"
              />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">
                {services.servicesList.ideationAndEvaluation.title}
              </h3>
              <p className="text-gray-400 text-sm w-[80%]">
                {services.servicesList.ideationAndEvaluation.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
              ➜
            </div>
          </div>
        </motion.div>

        {/* brandIdentity */}
        <motion.div
          className="ml-[260px]"
          initial="hidden"
          whileInView="visible"
          animate={isInView ? "visible" : "hidden"}  // Reverts animation to "hidden" when not in view
          onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)} // Update state based on visibility
          // viewport={{ once: true }}
          variants={itemVariants}
          transition={{
            duration: 0.8, // Increase duration for smoother animation
            ease: "easeOut", // Smoother easing
          }}
        >
          <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
            {/* Service Icon */}
            <div className="w-16 flex items-center justify-center">
              <img
                src={services.servicesList.brandIdentity.image}
                alt={services.servicesList.brandIdentity.title}
                className="w-[90%] object-contain"
              />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">
                {services.servicesList.brandIdentity.title}
              </h3>
              <p className="text-gray-400 text-sm w-[80%]">
                {services.servicesList.brandIdentity.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
              ➜
            </div>
          </div>
        </motion.div>

        {/* customerService */}
        <motion.div
          className="ml-[140px]"
          initial="hidden"
          whileInView="visible"
          animate={isInView ? "visible" : "hidden"}  // Reverts animation to "hidden" when not in view
          onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)} // Update state based on visibility
          // viewport={{ once: true }}
          variants={itemVariants}
          transition={{
            duration: 0.8, // Increase duration for smoother animation
            ease: "easeOut", // Smoother easing
          }}
        >
          <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
            {/* Service Icon */}
            <div className="w-16 flex items-center justify-center">
              <img
                src={services.servicesList.customerService.image}
                alt={services.servicesList.customerService.title}
                className="w-[90%] object-contain"
              />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">
                {services.servicesList.customerService.title}
              </h3>
              <p className="text-gray-400 text-sm w-[80%]">
                {services.servicesList.customerService.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
              ➜
            </div>
          </div>
        </motion.div>

        {/* webStrategy */}
        <motion.div
          className="mr-[90%]"
          initial="hidden"
          whileInView="visible"
          animate={isInView ? "visible" : "hidden"}  // Reverts animation to "hidden" when not in view
          onViewportBoxUpdate={(_, info) => handleInView(info.isIntersecting)} // Update state based on visibility
          // viewport={{ once: true }}
          variants={itemVariants}
          transition={{
            duration: 0.8, // Increase duration for smoother animation
            ease: "easeOut", // Smoother easing
          }}
        >
          <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
            {/* Service Icon */}
            <div className="w-16 flex items-center justify-center">
              <img
                src={services.servicesList.webStrategy.image}
                alt={services.servicesList.webStrategy.title}
                className="w-[90%] object-contain"
              />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">
                {services.servicesList.webStrategy.title}
              </h3>
              <p className="text-gray-400 text-sm w-[80%]">
                {services.servicesList.webStrategy.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
              ➜
            </div>
          </div>
        </motion.div>
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
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{
                duration: 0.8, // Increase duration for smoother animation
                ease: "easeOut", // Smoother easing
                delay: index * 0.3, // Delay for a staggered effect
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
};

export default ServiceList;
