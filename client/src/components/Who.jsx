import whoImage from "../assets/images/who.svg";
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";
import { motion } from "framer-motion";

const Who = () => {
  const { who } = contents;
  return (
    <div className="relative max-w-5xl md:mx-6 sm:mx-6 mx-6 lg:mx-auto flex flex-col lg:pl-[-10px] lg:flex-row items-center gap-10 mt-[130px]">
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left text-white">
        <div className="font-bold mb-[-30px] md:mb-[-45px] ml-[-10px]  md:ml-[-15px] ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.03}
          >
            {who.heading}
          </ScrollFloat>
        </div>
        <img
          className="w-20 mb-[-1px] h-2.5 mx-auto lg:mx-0"
          alt="Pseudo"
          src={who.underLineImage}
        />
        <p className="text-gray-400 leading-snug text-2xl md:text-4xl">
          We’re an Award-Winning <br /> Modern Business Solutions <br /> Agency
        </p>
        <p className="text-lg sm:mx-14 lg:mx-0 md:mx-14 mx-14">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
          illo inventore veritatis architecto beatae.
        </p>
        <div className="grid grid-cols-1 mx-14 lg:mx-0 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mt-6">
          {[
            "Tech Solutions",
            "IT Consulting",
            "Web Solutions",
            "Business Growth",
            "Product Design",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#292738] p-2 rounded-lg shadow-lg min-w-[160px] min-h-[60px] text-white"
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-purple-500 shrink-0">
                <span className="text-white text-[14px] font-bold">✔</span>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        {/* <img className="w-full max-w-md" alt="About png" src={whoImage} /> */}
        <motion.img
              src={whoImage}
              animate={{ scale: [], y: [0, 8, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              alt="Business Illustration"
              className="hidden md:block w-full max-w-md" // Hide on mobile, show on md+
            />
      </div>
    </div>
  );
};

export default Who;
