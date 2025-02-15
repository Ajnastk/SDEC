import X3001Png2 from "../assets/images/2-300x300-1.svg";
import X3001Png1 from "../assets/images/5-300x300-1.svg";
import X3001Png from "../assets/images/6-300x300-1.png";
import clientsKsa20300X3001Png from "../assets/images/clients-ksa-20-300x300-1.svg";
import clientsKsa25300X3001Png from "../assets/images/clients-ksa-25-300x300-1.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import line63 from "../assets/images/Line-63.svg";
import pseudo from "../assets/images/headingLineImage.png";

 const Brand = () => {
  return (
    <div className="relative w-[1170px] h-[295px] mt-[670px]">
      <p className="absolute w-[463px] h-[84px] top-[26px] left-[677px] font-normal text-[#a8adb3] text-base leading-8 tracking-[0] [font-family:'Kumbh_Sans-Regular',Helvetica]">
        Sed ut perspiciatis unde omnis natus error voluptatem santium <br />
        doloremque laudantium, totam rem aperiam, eaque ipsa quae <br />
        ab nllo inventore veritatis quasi architecto beatae vitae
      </p>

      <div className="absolute w-[1147px] h-24 top-[196px] left-3">
        {/* Left Button */}
      <button
       
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>
        <div className="absolute w-[1003px] h-20 top-4 left-[72px]">
          <img
            className="absolute w-[155px] h-20 top-0 left-[210px]"
            alt="Element png"
            src={X3001Png}
          />
          <img
            className="absolute w-[154px] h-20 top-0 left-[429px]"
            alt="Clients ksa"
            src={clientsKsa25300X3001Png}
          />
          <img
            className="absolute w-[146px] h-20 top-0 left-[646px]"
            alt="Element png"
            src={X3001Png2}
          />
          <img
            className="absolute w-[146px] h-20 top-0 left-[857px]"
            alt="Element png"
            src={X3001Png1}
          />
          <img
            className="absolute w-[146px] h-20 top-0 left-0"
            alt="Clients ksa"
            src={clientsKsa20300X3001Png}
          />
        </div>

        <img
          className="absolute w-[1110px] h-px top-0 left-[18px] object-cover"
          alt="Line"
          src={line63}
        />

         {/* Right Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>
      </div>

      <div className="absolute w-[559px] h-[197px] top-[-61px] left-[30px]">
        <div className="relative w-[555px] h-[198px] -top-px -left-px">
          <img
            className="absolute w-[84px] h-2.5 top-[60px] left-[41px]"
            alt="Pseudo"
            src={pseudo}
          />
          <div className="absolute w-[555px] h-[186px] top-0 left-0 font-black text-transparent text-[150px] leading-7 tracking-[0] [-webkit-text-stroke:1px_#ffffff26] [font-family:'Kumbh_Sans-Black',Helvetica] mt-18">
            BRAND
          </div>
          <p className="absolute w-[466px] h-[114px] top-[84px] left-[41px] font-semibold text-white text-[42px] leading-[53px] tracking-[0.42px] [font-family:'Jost-SemiBold',Helvetica]">
            We’ve More Than 254+ <br />
            Global Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;