import { contents } from "../contents";

const ServiceList = () => {
  const { services } = contents;
  return (
    <div className=" space-y-6">
      {/* graphicsDesign */}
      <div className="ml-[160px]">
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          {/* Service Icon */}
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.graphicsDesign.image}
              alt={services.servicesList.graphicsDesign.title}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.graphicsDesign.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.graphicsDesign.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </div>
      {/* ideationAndEvaluation */}
      <div className="ml-[210px]">
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          {/* Service Icon */}
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.ideationAndEvaluation.image}
              alt={services.servicesList.ideationAndEvaluation.title}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.ideationAndEvaluation.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.ideationAndEvaluation.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </div>
      {/* brandIdentity */}
      <div className="ml-[260px]">
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          {/* Service Icon */}
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.brandIdentity.image}
              alt={services.servicesList.brandIdentity.title}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.brandIdentity.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.brandIdentity.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </div>
      {/* customerService */}
      <div className="ml-[140px]">
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          {/* Service Icon */}
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.customerService.image}
              alt={services.servicesList.customerService.title}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.customerService.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.customerService.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </div>
      {/* webStrategy */}
      <div className="mr-[90%]">
        <div className="flex items-center w-[90%] md:w-[400px] p-5 bg-[rgba(41,39,56,1)] rounded-lg shadow-lg transition-transform transform hover:scale-101">
          {/* Service Icon */}
          <div className="w-16 flex items-center justify-center">
            <img
              src={services.servicesList.webStrategy.image}
              alt={services.servicesList.webStrategy.title}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">
              {services.servicesList.webStrategy.title}
            </h3>
            <p className="text-gray-400 text-sm w-[80%]">
              {services.servicesList.webStrategy.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div className="text-gray-500 flex justify-center items-center rounded-4xl w-[50px] h-[50px] bg-[rgba(35,35,49,1)] hover:text-white transition">
            ➜
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
