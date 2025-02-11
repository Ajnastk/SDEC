



import { CheckCircle } from "lucide-react";
import who from "../assets/images/who.svg"
import pseudo from '../assets/images/headingLineImage.png';


const Who = () =>{

   const services = [
      "Tech Solutions",
      "IT Consulting",
      "Web Solutions",
      "Business Growth",
      "Product Design",
    ];
    
   return (
    <div className="container mx-auto max-w-[1250px] py-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute top-[100px] font-extrabold text-[150px]  leading-[0] tracking-tight uppercase text-transparent stroke-white">
            WHO
          </div>
            <div className="pt-16">
              <img className="mx-[32px]  w-[84px] h-2.5 mb-6" alt="Decorative line" src={pseudo} />
              <h1 className="mx-[32px]  font-semibold text-white text-[42px] leading-[53px] tracking-[0.42px]">
                We're Awards Winning <br />
                Modern Business Solutions <br />
                Agency
              </h1>
            </div>
          </div>

          <p className="text-white mx-[32px]  text-lg leading-8 max-w-[534px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque epsa quae ab illo inventore veritatis architecto beatae.
          </p>

          {/* Services Grid */}
          <div className=" grid grid-cols-3 gap-4 w-[558.84px] h-[110px] mx-[60px] ">
  {services.map((service) => (
    <div
      key={service}
      className=" pl-2 bg-[#292738] shadow-[0px_10px_60px_#0000001a] border-none rounded-md  flex items-center space-x-3"
    >
      <div className=" w-[25px] h-[25px] rounded-full bg-gradient-to-b from-[#186EF2] to-[#6D18EF] flex items-center justify-center">
        <CheckCircle className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="text-white font-semibold text-base">{service}</span>
    </div>
  ))}
</div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-end">
          <img className="w-[540px] h-[515px] object-cover" alt="About" src={who} />
        </div>
      </div>
    </div>
  );

}

export default Who;
