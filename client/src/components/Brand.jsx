import X3001Png2 from "../assets/images/2-300x300-1.svg";
import X3001Png1 from "../assets/images/5-300x300-1.svg";
import X3001Png from "../assets/images/6-300x300-1.png";
import clientsKsa20300X3001Png from "../assets/images/clients-ksa-20-300x300-1.svg";
import clientsKsa25300X3001Png from "../assets/images/clients-ksa-25-300x300-1.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pseudo from "../assets/images/headingLineImage.png";


 const Brand = () => {
  return (
    <div className="relative w-full max-w-[1170px] mx-auto p-6">
      {/* Description Text */}
      <p className="text-gray-400 text-base leading-8 max-w-lg md:text-lg md:max-w-xl lg:max-w-2xl">
        Sed ut perspiciatis unde omnis natus error voluptatem santium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab nllo inventore veritatis quasi architecto beatae vitae.
      </p>

      {/* Partner Logos */}
      <div className="relative w-full mt-10 border-t border-gray-600 pt-6">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img className="w-32 h-20 object-contain" src={clientsKsa20300X3001Png} alt="Clients KSA" />
          <img className="w-32 h-20 object-contain" src={X3001Png} alt="Element" />
          <img className="w-32 h-20 object-contain" src={clientsKsa25300X3001Png} alt="Clients KSA" />
          <img className="w-32 h-20 object-contain" src={X3001Png2} alt="Element" />
          <img className="w-32 h-20 object-contain" src={X3001Png1} alt="Element" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
         <ChevronLeft/>
         <ChevronRight/>
        </div>
      </div>

      {/* Brand Section */}
      <div className="relative mt-16 text-white">
        <div className="absolute inset-0 text-[150px] font-black text-transparent opacity-10">
          BRAND
        </div>
        <div className="relative z-10">
          <img className="w-20 mb-2" src={pseudo} alt="Pseudo" />
          <p className="text-4xl md:text-5xl font-semibold">
            We’ve More Than <span className="text-blue-500">254+</span> <br />
            Global Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;