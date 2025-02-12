import { CheckCircle } from "lucide-react";
import who from "../assets/images/who.svg";
import pseudo from "../assets/images/headingLineImage.png";

const Who = () => {
  const services = [
    "Tech Solutions",
    "IT Consulting",
    "Web Solutions",
    "Business Growth",
    "Product Design",
  ];

  return (
    <div className="container mx-auto px-6 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left relative">
          <h1 className="absolute top-10 left-1/2 lg:left-[-27px] transform -translate-x-1/2 lg:translate-x-0 font-extrabold text-[80px] sm:text-[100px] lg:text-[140px] text-transparent stroke-white leading-none tracking-tight uppercase">
            WHO
          </h1>

          <div className="relative pt-20">
            <img
              className="mx-auto lg:mx-0 w-[70px] sm:w-[84px] h-2.5 mb-6"
              alt="Decorative line"
              src={pseudo}
            />
            <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl leading-tight tracking-wide">
              We're an Award-Winning <br />
              Modern Business Solutions <br />
              Agency
            </h2>
          </div>

          <p className="text-white text-base sm:text-lg leading-7 max-w-lg mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque epsa quae ab illo inventore veritatis architecto beatae.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-70 sm:w-150 md:w-183 max-w-auto mx-4 lg:mx-0">
  {services.map((service) => (
    <div
      key={service}
      className="p-3 bg-[#292738] shadow-lg rounded-md flex items-center space-x-3 transition-transform transform hover:scale-105"
    >
      <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#186EF2] to-[#6D18EF] flex items-center justify-center">
        <CheckCircle className="w-4 h-4 text-white" />
      </div>
      <span className="text-white font-semibold text-sm md:text-base">
        {service}
      </span>
    </div>
  ))}
</div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl h-auto object-cover"
            alt="Who We Are"
            src={who}
          />
        </div>
      </div>
    </div>
  );
};

export default Who;