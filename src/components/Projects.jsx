import { contents } from "../contents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Projects = () => {
  const projectsData = contents.Projects;
  return (
    <div className="flex flex-col  py-20 text-white items-center">
      <div className="flex flex-col items-center">
        <p className="font-extrabold text-[70px] sm:text-[50px] md:text-[80px] lg:text-[120px] leading-[0%] tracking-tight uppercase text-transparent stroke-white">
          {projectsData.backgroundHeading}
        </p>
        <img src={projectsData.underLineImage} />
        <p className="text-3xl md:text-4xl sm:text-xl font-semibold">
          Checkout our Recently
          <br />
          Completed Projects
        </p>
      </div>
      {/* image swiper section */}
      <div className="w-full max-w-6xl mt-10 flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          //   navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
        >
          {projectsData.ourProjects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <div className="bg-gray-900 p-4 rounded-xl shadow-lg relative w-full mx-w-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[450px]  object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-500 px-3 py-1 rounded-md">
                  {project.category}
                </div>
                <div className="bg-black bg-opacity-60 p-3 absolute bottom-0 left-0 w-full rounded-b-lg">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
