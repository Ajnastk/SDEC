import { contents } from "../contents";
import ServiceList from "./ServiceList";
const Services = () => {
  const { services } = contents;
  return (
    <div className="flex flex-col bg-[#000A1F] py-20 text-white h-[900px]">
      <div>
        {/* Faded Background Title */}
        <h1 className="absolute text-center left-[31%] font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-[0] tracking-tight uppercase text-transparent stroke-white">
          {services.backgroundHeading}
        </h1>

        <div className="text-center mb-10 flex justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <img className="ml-[250px]" src={services.underLineImage} alt="" />
            Great Features To Do Your Business <br /> Growth & Development
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-30 justify-center">
        {/* Services Logo */}

        <div className="w-[26%] mt-20 mr-[38%]">
          <img src={services.logo} alt="" />
        </div>
        {/* Services List */}
        <div className="absolute w-[50%] ml-[22%] flex flex-col">
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default Services;
