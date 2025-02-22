
import X3001Png2 from "../assets/images/2-300x300-1.svg";
import X3001Png1 from "../assets/images/5-300x300-1.svg";
import X3001Png from "../assets/images/6-300x300-1.png"
import button from "../assets/images/Button.svg";
import clientsKsa20300X3001Png from "../assets/images/clients-ksa-20-300x300-1.svg";
import clientsKsa25300X3001Png from "../assets/images/clients-ksa-25-300x300-1.svg";
import image from "../assets/images/Button1.svg";
import line63 from "../assets/images/line-63.svg";
import pseudo from "../assets/images/headingLineImage.png";

const Brand = () => {
  return (
    <div className="relative max-w-full w-full px-4 md:px-8 lg:w-[1225px] h-auto lg:mb-[126px] md:h-[295px] mt-20 md:mt-90">
      
      {/* Brand Heading */}
      <div className="relative text-center md:text-left w-full md:w-[559px] mx-auto md:ml-8 mt-12 md:mt-[-61px]">
        <div className="relative">
          <img className="w-20 md:w-[84px] h-2.5 mx-auto md:ml-[41px] " alt="Pseudo" src={pseudo} />
          <div className="text-transparent text-[60px] md:text-[150px] font-black leading-tight [-webkit-text-stroke:1px_#ffffff26] -mt-20">
            BRAND
          </div>
          <p className="text-white text-2xl md:text-[42px] font-semibold leading-[1.3] mt-2">
            We’ve More Then 254+ <br className="hidden md:block" /> Global Partners
          </p>
        </div>
      </div>
      {/* Description Paragraph */}
      <p className="text-center md:text-left mx-auto max-w-lg md:w-[463px] md:absolute md:top-[26px] md:left-[677px] font-normal text-[#a8adb3] text-sm md:text-base leading-6 md:leading-8 font-kumbh-sans">
        Sed ut perspiciatis unde omnis natus error voluptatem santium <br className="hidden md:block" />
        doloremque laudantium, totam rem aperiam, eaque ipsa quae <br className="hidden md:block" />
        ab nllo inventore veritatis quasi architecto beatae vitae
      </p>
    {/* Divider Line */}
    <div className="relative mt-6 md:mt-8">
        <img className="w-full max-w-[1110px] mx-auto h-px object-cover" alt="Line" src={line63} />
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0 md:w-[1147px] h-auto md:h-24 mx-auto mt-8 md:mt-0">
      <img className="w-12 h-12" alt="Button" src={image} />
        <img className="w-24 md:w-[155px] h-20" alt="Clients ksa" src={clientsKsa20300X3001Png} />
        <img className="w-24 md:w-[155px] h-20" alt="Element png" src={X3001Png} />
        <img className="w-24 md:w-[154px] h-20" alt="Clients ksa" src={clientsKsa25300X3001Png} />
        <img className="w-24 md:w-[146px] h-20" alt="Element png" src={X3001Png2} />
        <img className="w-24 md:w-[146px] h-20" alt="Element png" src={X3001Png1} />
        <img className="w-12 h-12" alt="Button" src={button} />
      </div>

      
      {/* Buttons */}
      <div className="flex justify-between items-center w-full max-w-[1110px]  mt-2 mx-auto">
       
        
      </div>
    </div>

  );
};

export default Brand;
