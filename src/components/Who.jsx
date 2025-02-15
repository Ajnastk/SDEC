import { CheckCircle } from "lucide-react";
import who from "../assets/images/who.svg";
import pseudo from "../assets/images/headingLineImage.png";

export default function Who(){
  const services = [
    "Tech Solutions",
    "IT Consulting",
    "Web Solutions",
    "Business Growth",
    "Product Design",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Subtitle & Description */}
          <div className="relative pt-10 sm:pt-16 text-center md:text-left">
            <img
              className=" md:w-16 h-2 mb-4 mx-auto md:mx-0 w-10 sm:w-20"
              alt="Decorative line"
              src={pseudo}
            />
             {/* "WHO" Heading */}
          <h1 className=" text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-extrabold text-transparent stroke-white leading-none uppercase tracking-tight -mt-12">
            WHO
          </h1>
            <h2 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-widetext-white  -mt-12 ">
              We're an Award-Winning <br className="hidden sm:block" />
              Modern Business Solutions <br className="hidden sm:block" />
              Agency
            </h2>
          </div>

          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque quae ab
            illo inventore veritatis architecto beatae.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
            {services.map((service) => (
              <div
                key={service}
                className="p-3 bg-[#292738] shadow-lg rounded-md flex items-center space-x-3 transition-transform transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-600 to-purple-600 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium text-sm md:text-base">

                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-cover"
            alt="Who We Are"
            src={who}
          />
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======

export default Who;

>>>>>>> main
