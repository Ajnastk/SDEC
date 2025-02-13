import { useState, useEffect } from "react";
import { contents } from "../contents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Says = () => {
  const { says } = contents;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect if screen width is less than 768px
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-[150px] bg-[#000A1F]">
      <div>
        <div className="relative">
          {/* Desktop Background Heading */}
          <h1 className="absolute text-center mt-[-50px] left-1/2 transform -translate-x-1/2 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-none tracking-tight uppercase text-transparent stroke-white hidden lg:block">
            {says.backgroundHeading}
          </h1>
          {/* Mobile Background Heading */}
          <h1 className="absolute text-center mt-[-50px] left-1/2 transform -translate-x-1/2 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[130px] leading-none tracking-tight uppercase text-transparent stroke-white lg:hidden">
            {says.backgroundHeading}
          </h1>
        </div>

        {/* Section Title */}
        <div className="flex flex-col justify-center items-center text-center text-3xl md:text-4xl sm:text-xl font-semibold text-white">
          <img className="mx-auto" src={says.underLine} alt="underline" />
          <h1>
            {`People's Say About Our`} <br /> Support & Services
          </h1>
        </div>

        {/* Testimonials Section with Icons */}
        <div className="mt-10 ml-5 lg:ml-40 flex items-center justify-center lg:justify-between">
          {/* Left Icon - Hidden on Mobile */}
          <img
            src={says.iconsimage1}
            alt="Left Icon"
            className="ml-[-80px] absolute w-[20%] hidden lg:block"
          />

          {/* Swiper Carousel */}
          <div className="lg:ml-[9%] flex justify-center w-full lg:w-[70%]">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={!isMobile} // Hide navigation if it's mobile
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {says.testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className=" flex flex-col justify-around bg-[#232331] p-5 px-10 lg:w-[100%] w-[95%] h-[350px] shadow-lg">
                    <div>
                      <img className="w-[15%]" src={testimonial.doubleCodes} alt="" />
                    </div>
                    <div>
                      <p className="text-gray-300 italic">{testimonial.text}</p>
                    </div>
                    <div>
                      <hr className="text-[#464548]" />
                    </div>
                    <div className="mt-4 flex flex-row justify-between items-center">
                      <div>
                        <h1 className="text-white font-semibold text-xl">
                          {testimonial.name}
                        </h1>
                        <p className="text-gray-400">{testimonial.roll}</p>
                      </div>
                      <div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-12"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Icon - Hidden on Mobile */}
          <img
            src={says.iconsimage2}
            alt="Right Icon"
            className="absolute w-[25%] hidden lg:block ml-[900px]"
          />
        </div>

        {/* Total Testimonials */}
        {/* <div className="mt-12 text-center">
          <p className="text-4xl font-bold text-white">
            {says.totalTestimonials}
          </p>
          <p className="text-gray-400 mt-2">Total Testimonials</p>
        </div> */}
      </div>
    </div>
  );
};

export default Says;
