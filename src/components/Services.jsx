// import { FaPalette, FaLightbulb, FaIdBadge, FaHeadset, FaGlobe } from "react-icons/fa";
import { contents } from "../contents";
const Services = () => {
  // const servic = [
  //   { title: "Graphics Design", icon: <FaPalette />, color: "bg-gradient-to-r from-pink-500 to-purple-500" },
  //   { title: "Ideation & Evaluation", icon: <FaLightbulb />, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  //   { title: "Brand Identity", icon: <FaIdBadge />, color: "bg-gradient-to-r from-green-500 to-teal-500" },
  //   { title: "Customer Service", icon: <FaHeadset />, color: "bg-gradient-to-r from-red-500 to-orange-500" },
  //   { title: "Web Strategy", icon: <FaGlobe />, color: "bg-gradient-to-r from-yellow-500 to-amber-500" },
  // ];

  const { services } = contents;
  return (
    <section className="relative py-20 bg-[#0b1120] text-white">
      <div>
        {/* Faded Background Title */}
        <h1 className="absolute text-center left-[31%] font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-[0] tracking-tight uppercase text-transparent stroke-white">
          {services.backgroundHeading}
        </h1>

        <div className="text-center mb-10 flex justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <img className="ml-[250px]" src={services.underLineImage} alt="" />
            Great Features To Do Your Business <br /> Growth & Development
          </h2> p-5
        </div>
      </div>

      <div className="flex-row p-5">
        {/* Services Logo */}

        <div>
          <img src={services.logo} alt="" />
        </div>
        {/* Services List */}
        <div className="flex flex-col space-y-6">
        {services.servicesList.map((service, index) => (
          <div
            key={index}
            className="flex items-center w-[90%] md:w-[600px] p-5 bg-[#141c2c] rounded-xl shadow-lg backdrop-blur-md bg-opacity-50 transition-transform transform hover:scale-105"
          >
            {/* Service Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white bg-opacity-10 p-3">
              <img src={service.image} alt={service.title} className="w-10 h-10 object-contain" />
            </div>

            {/* Service Details */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>

            {/* Arrow Icon */}
            <div className="text-gray-500 hover:text-white transition">
              ➜
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
