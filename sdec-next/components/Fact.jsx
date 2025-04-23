// import featureIcon1Png from "/assets/images/icon1.svg";
// import featureIcon2Png from "/assets/images/icon2.svg";
// import featureIcon3Png from "/assets/images/icon4.svg";
import { contents } from "@/Contents";
import ScrollFloat from "@/public/assets/animations/ScrollFloat";
//import PlayButton from "./Playbutton";

const Fact = () => {
  const { fact } = contents;
  const facts = [
    { icon: "/assets/images/icon1.svg", number: "150+", text: "Project Completed" },
    { icon: "/assets/images/icon2.svg", number: "250+", text: "Satisfied Clients" },
    { icon: "/assets/images/icon4.svg", number: "50+", text: "Expert Teams" },
  ];

  return (
    <div
      className="pt-20 mt-[130px] scroll-smooth relative w-full max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 "
      id="fact"
    >
      {/* Left Section: Heading & Description */}
      <div className=" lg:w-1/2 text-center lg:text-left">
        <div className="mb-13">
          <div className=" text-white font-bold mb-[-30px] md:mb-[-45px] md:ml-[-10px] ">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              {fact.heading}
            </ScrollFloat>
          </div>
          <div>

          <img
            className="w-20 mb-[-1px] h-2.5 mx-auto lg:mx-0"
            alt="Pseudo"
            src={fact.underLine}
            />
            </div>
        </div>
        <h3 className="text-gray-400 text-2xl -mt-12 md:text-4xl">
          Let’s See Our Company <br /> Achievement
        </h3>
        <p className="text-[#a8adb3] text-base leading-7 mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit ways voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque epsa quae ab
          illo inventore
        </p>
      </div>

      {/* Right Section: Play Button */}
      {/* <div className="absolute top-0 right-10 lg:right-20 flex justify-center lg:justify-end">
        <div className="w-[90px] h-[90px] bg-[#ffffff08] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
          <PlayButton />
        </div>
      </div> */}

      {/* Fact Cards (3 in a Row) */}
      <div className="flex flex-wrap lg:justify-between justify-center gap-6">
        {facts.map((item, index) => (
          <div
            key={index}
            className="w-[280px] h-[180px] bg-[#292738] rounded-lg flex flex-col items-center justify-center shadow-md hover:rotate-[-5deg] transition-transform"
          >
            <img
              className="w-14 h-14 mb-3"
              src={item.icon}
              alt="Feature Icon"
            />
            <div className="text-3xl font-bold text-[#e4e4e4]">
              {item.number}
            </div>
            <p className="text-lg font-medium text-[#e4e4e4]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fact;
