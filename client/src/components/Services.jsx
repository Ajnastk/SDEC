import { contents } from "../Contents";
import ServiceList from "./ServiceList";

const Services = () => {
  const { services } = contents;
  return (
    <div className="flex flex-col bg-[#000A1F] py-20 text-white min-h-screen">
      {/* Background Title */}
      <h1 className="absolute text-center left-1/2 transform -translate-x-1/2 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-none tracking-tight uppercase text-transparent stroke-white">
        {services.backgroundHeading}
      </h1>

      {/* Section Title */}
      <div className="text-center mb-10 flex justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-10">
            <img className="ml-[250px]" src={services.underLineImage} alt="" />
            Great Features To Do Your Business <br /> Growth & Development
          </h2>
        </div>

      {/* Content Wrapper */}
      <div className="flex flex-wrap items-center justify-center">
        {/* Services Logo (Hidden on Small Screens) */}
        <div className="absolute mb-10 mr-[35%] w-full md:w-1/3 lg:w-2/7 hidden lg:block">
          <img className="w-full" src={services.logo} alt="" />
        </div>

        {/* Services List */}
        <div className="w-full p-5 md:w-1/2">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default Services;