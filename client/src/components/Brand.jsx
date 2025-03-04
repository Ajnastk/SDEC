import X3001Png2 from "../assets/images/2-300x300-1.svg";
import X3001Png1 from "../assets/images/5-300x300-1.svg";
import X3001Png from "../assets/images/6-300x300-1.png";
//import button from "../assets/images/Button.svg";
import clientsKsa20300X3001Png from "../assets/images/clients-ksa-20-300x300-1.svg";
import clientsKsa25300X3001Png from "../assets/images/clients-ksa-25-300x300-1.svg";
//import image from "../assets/images/Button1.svg";
import line63 from "../assets/images/line-63.svg";
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";

const Brand = () => {
  const { brand } = contents;
  return (
    <div className="relative max-w-full lg:left-[100px] px-4 md:px-8 lg:w-[1225px] h-auto lg:mb-[126px] md:h-[295px] mt-50 md:mt-80">
      {/* Brand Heading */}
      <div className="relative text-center md:text-left w-full md:w-[559px] mx-auto md:ml-8">
        <div className="relative">
          
          <div className="font-bold mb-[-35px] md:ml-[-10px] text-white ">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              {brand.heading}
            </ScrollFloat>
          </div>
          <img
            className="w-20 md:w-[84px] h-2.5 mx-auto mb-15 md:ml-[1px] "
            alt="Pseudo"
            src={brand.headingLineImage}
          />
          <p className="relative text-2xl sm:text-2xl -top-[60px] md:text-[42px] text-gray-400 leading-[1.3] mt-2">
            We’ve More Then 254+ <br className="hidden md:block" /> Global
            Partners
          </p>
        </div>
      </div>
      {/* Description Paragraph */}
      <p className="relative lg:left-[300px] lg:top-[-200px] text-center mx-auto  md:w-[463px]  md:top-[5px] font-normal text-[#a8adb3] text-sm md:text-base leading-6 md:leading-8 font-kumbh-sans">
        Sed ut perspiciatis unde omnis natus error voluptatem santium{" "}
        <br className="hidden md:block" />
        doloremque laudantium, totam rem aperiam, eaque ipsa quae{" "}
        <br className="hidden md:block" />
        ab nllo inventore veritatis quasi architecto beatae vitae
      </p>
      {/* Divider Line */}
      <div className="relative mt-6 md:mt-8">
        <img
          className="w-full max-w-[1110px] mx-auto h-px object-cover"
          alt="Line"
          src={line63}
        />
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-1 md:w-[1147px] h-auto md:h-20 mx-auto mt-8 md:mt-3">
        {/* <img className="w-12 h-12" alt="Button" src={image} /> */}
        <img
          className="w-24  h-20 lg:w-[155px]"
          alt="Clients ksa"
          src={clientsKsa20300X3001Png}
        />
        <img
          className="w-24  lg:w-[155px] h-20"
          alt="Element png"
          src={X3001Png}
        />
        <img
          className="w-24 lg:w-[155px] h-20"
          alt="Clients ksa"
          src={clientsKsa25300X3001Png}
        />
        <img
          className="w-24 lg:w-[155px] h-20"
          alt="Element png"
          src={X3001Png2}
        />
        <img
          className="w-24  lg:w-[155px] h-20"
          alt="Element png"
          src={X3001Png1}
        />
        {/* <img className="w-12 h-12" alt="Button" src={button} /> */}
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-between items-center w-full max-w-[1110px]  mt-2 mx-auto">
       */}

      {/* </div> */}
    </div>
  );
};

export default Brand;
