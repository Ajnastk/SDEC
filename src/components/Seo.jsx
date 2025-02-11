import React from "react";
import { contents } from "../contents";
import { useState } from "react";

const Seo = () => {
  const { seo } = contents;
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col w-[90%]  lg:flex-row ml-20 lg:items-start gap-5 px-6 py-12 bg-[#000A1F] text-white">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="relative">
          <h1 className="absolute top-0 mt-[-80px] left-[-40px] font-extrabold text-[130px] text-white opacity-10 tracking-wide">
            {seo.backgroundHeading}
          </h1>
        </div>

        <img src={seo.underLine} alt="" className="mx-auto lg:mx-0" />
        <h2 className="text-3xl font-bold mt-4">{seo.titile}</h2>
        <p className="text-gray-400 mt-3">{seo.description} </p>
        <div className="mt-6 space-y-4">
          {/* Accordion */}
          <div className="mt-6 space-y-3">
            {seo.questions.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <button
                  className={`w-full flex justify-between items-center p-4 text-white text-lg font-semibold rounded-lg 
                transition-all duration-300 ${
                  openIndex === index ? "bg-[#3b3b3b]" : "bg-[#1E293B]"
                }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className="transition-transform duration-300">
                    {openIndex === index ? "▼" : "➜"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-[#3b3b3b] text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={seo.seoImage} alt="SEO Optimization" className="max-w-sm" />
      </div>
    </div>
  );
};

export default Seo;
