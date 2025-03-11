import { useState } from "react";
import { Plus, X } from "lucide-react";
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";
import { CSSTransition } from "react-transition-group";
import "../styles/FAQAccordion.css";

const FAQAccordion = () => {
  const { faq } = contents;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-2xl flex flex-col antialiased items-center justify-center relative overflow-hidden mt-[130px]">
      <div className="font-bold md:mb-[-45px] md:ml-[-10px] text-center mb-[-30px] text-white">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.03}
        >
          {faq.backgroundHeading}
        </ScrollFloat>
      </div>

      {/* Section Title */}
      <div className="flex flex-col justify-center items-center text-center text-3xl md:text-4xl sm:text-xl text-gray-400">
        <img className="mx-auto" src={faq.underLine} alt="underline" />
        <h1>{faq.title}</h1>
      </div>

      {/* FAQ Container */}
      <div className="w-[90%] md:w-[60%] bg-[#dcdddd] p-6 flex flex-col gap-4 rounded-2xl shadow-xl mt-9 ">
        {faq.faqs.map((a, index) => (
          <div key={index} className="border-black">
            <button
              className="w-full flex justify-between items-start py-4 px-6 text-left text-gray-700 font-medium bg-white rounded-xl flex-col shadow-xl"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-green-500 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'} h-5 w-5`}>
                  {openIndex === index ? <X /> : <Plus />}
                </div>
                <span className="text-lg">{a.question}</span>
              </div>
              <CSSTransition
                in={openIndex === index}
                timeout={300}
                classNames="faq"
                unmountOnExit
              >
                <div className="faq-content">
                  <p className="mt-3 text-gray-600">{a.answer}</p>
                </div>
              </CSSTransition>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;