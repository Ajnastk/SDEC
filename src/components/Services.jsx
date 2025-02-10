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
          </h2>
        </div>
      </div>

      <div>
        {/* Services Logo */}

        <div>
          <img src={services.logo} alt="" />
        </div>
        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
