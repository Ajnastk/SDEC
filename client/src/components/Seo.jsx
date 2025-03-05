import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";

const Seo = () => {
  const { seo } = contents;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col mt-[130px] pt-20 scroll-mt-20 w-[70%] mx-auto lg:flex-row lg:ml-60 lg:items-start gap-10 px-2 py-12 bg-[#000A1F] text-white">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="relative">
          {/* Desktop view */}
          <div className="font-bold md:mb-[-45px] mb-[-35px] md:ml-[-10px] ml-1 ">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              {seo.backgroundHeading}
            </ScrollFloat>
          </div>
         
        </div>

        <img src={seo.underLine} alt="" className="mx-auto mb-[-1px] lg:mx-0" />
        <h2 className="text-2xl lg:text-3xl text-gray-400 mt-4">{seo.titile}</h2>
        <p className="text-gray-400 mt-3 text-sm lg:text-base">
          {seo.description}{" "}
        </p>

        {/* Accordion */}
        <div className="mt-6 space-y-2">
          {" "}
          {/* Reduced spacing */}
          {seo.questions.map((item, index) => (
            <div
              key={index}
              className="w-[100%] lg:w-[80%] lg:ml-10 overflow-hidden"
            >
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
                  {openIndex === index ? "➜" : "➜"}
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
        <motion.img
          animate={{ scale: [], y: [0, 10, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          src={seo.seoImage}
          alt="Left Icon"
          className="w-full"
        />
        {/* <img
          src={seo.seoImage}
          alt="SEO Optimization"
          className="max-w-xs lg:max-w-xl"
        /> */}
      </div>
    </div>
  );
};

export default Seo;
