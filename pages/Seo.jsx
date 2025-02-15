<<<<<<< HEAD:pages/Seo.jsx
import React from "react";
import { contents } from "../Contents";
=======
>>>>>>> main:src/components/Seo.jsx
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { contents } from "../contents";

export default function Seo(){
  const { seo } = contents;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-[70%] mx-auto lg:flex-row lg:ml-60 lg:items-start gap-10 px-2 py-12 bg-[#000A1F] text-white">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="relative">
          {/* Desktop view */}
          <h1 className="absolute top-0 mt-[-80px] left-[-40px] font-extrabold text-[130px] text-white opacity-10 tracking-wide hidden lg:block">
            {seo.backgroundHeading}
          </h1>
          {/* Mobile view */}
          <h1 className="absolute top-0 mt-[-80px] font-extrabold text-[130px] text-white opacity-10 tracking-wide lg:hidden">
            {seo.backgroundHeading}
          </h1>
        </div>

        <img src={seo.underLine} alt="" className="mx-auto lg:mx-0" />
        <h2 className="text-2xl lg:text-3xl font-bold mt-4">{seo.titile}</h2>
        <p className="text-gray-400 mt-3 text-sm lg:text-base">{seo.description} </p>

        {/* Accordion */} 
        <div className="mt-6 space-y-2"> {/* Reduced spacing */}
          {seo.questions.map((item, index) => (
            <div key={index} className="w-[100%] lg:w-[80%] lg:ml-10 overflow-hidden">
              {/* Animated Button */}
              <motion.button
                className={`w-full flex justify-between items-center p-3 text-white text-sm lg:text-md font-semibold 
                transition-all duration-500 ${
                  openIndex === index ? "bg-[#232331]" : "bg-[#292738]"
                }`}
                onClick={() => toggleAccordion(index)}
                whileTap={{ scale: 0.97 }} // Slightly reduced press effect
              >
                {item.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 90 : 0 }} // Rotate arrow
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {openIndex === index ? "⬇︎" : "➜"}
                </motion.span>
              </motion.button>

              {/* Animated Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother animation
                className="border-2 border-[#232331] border-t-[#6D18EF] p-3 bg-[#232331] text-gray-300 text-sm lg:text-base overflow-hidden"
              >
                {openIndex === index && item.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={seo.seoImage} alt="SEO Optimization" className="max-w-xs lg:max-w-xl" />
      </div>
    </div>
  );
};

<<<<<<< HEAD:pages/Seo.jsx
=======
export default Seo;
>>>>>>> main:src/components/Seo.jsx
