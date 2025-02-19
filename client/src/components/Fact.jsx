import pseudo from "../assets/images/headingLineImage.png";
import featureIcon1Png from "../assets/images/icon1.svg";
import featureIcon2Png from "../assets/images/icon2.svg";
import featureIcon3Png from "../assets/images/icon4.svg";
import PlayButton from "./Playbutton";

const Fact = () => {
  const facts = [
    { icon: featureIcon1Png, number: "150+", text: "Project Completed" },
    { icon: featureIcon2Png, number: "250+", text: "Satisfied Clients" },
    { icon: featureIcon3Png, number: "50+", text: "Expert Teams" },
  ];

  return (
    <div className=" relative w-full max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12" id="fact">
      {/* Left Section: Heading & Description */}
      <div className=" lg:w-1/2 text-center lg:text-left">
        <div className="relative">
          <img className="absolute top-8 left-6 w-20 h-2" alt="Pseudo" src={pseudo} />
          <h1 className="text-[#ffffff26] font-bold text-[80px] lg:text-[120px] leading-none -mt-12">
            FACT
          </h1>
        </div>
        <h3 className="text-white text-2xl -mt-12 md:text-4xl font-semibold ">
          Let’s See Our Company <br /> Achievement
        </h3>
        <p className="text-[#a8adb3] text-base leading-7 mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit ways
          voluptatem accusantium doloremque laudantium totam rem
          aperiam eaque epsa quae ab illo inventore
        </p>
      </div>

      {/* Right Section: Play Button */}
      <div className="absolute top-0 right-10 lg:right-20 flex justify-center lg:justify-end">
        <div className="w-[90px] h-[90px] bg-[#ffffff08] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
          <PlayButton />
        </div>
      </div>

      {/* Fact Cards (3 in a Row) */}
      <div className="lg:w-1/2 flex flex-wrap justify-center lg:justify-between gap-6">
        {facts.map((item, index) => (
          <div
            key={index}
            className="w-[280px] h-[180px] bg-[#292738] rounded-lg flex flex-col items-center justify-center shadow-md hover:rotate-[-5deg] transition-transform"
          >
            <img className="w-14 h-14 mb-3" src={item.icon} alt="Feature Icon" />
            <div className="text-3xl font-bold text-[#e4e4e4]">{item.number}</div>
            <p className="text-lg font-medium text-[#e4e4e4]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fact;
