//import { motion } from "framer-motion";
import Navbar from "./Navbar";
//import RotatingText from "../assets/animations/RotatingText";
// import cloud1 from "/assets/images/cloud1.png";
// //import bulb from "../assets/images/bulb.png";
// // import ball from "/assets/images/Ball.png";
// import person from "/assets/images/person.png";
// import vector from "/assets/images/Vector-1.png";
// import homeBg from "/assets/images/home-bg.png";
// //import Brand from "../components/Brand";
import FlipWords from "./FlipWords";

// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col pt-20 scroll-mt-20 z-0 bg-[#010a23] md:h-[700px] sm:h-[80vh] bg-contain h-[85vh]"
      style={{ backgroundImage: `url(${"/assets/images/home-bg.png"})` }}
    >
      <Navbar />
      <div className=" flex flex-col lg:flex-row justify-center px-5 lg:px-20 ">
        <div className=" items-center lg:items-start lg:mx-15">
          <img
            className="mt-5 w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]"
            src="/assets/images/cloud1.png"
            alt="Cloud"
          />
            <div>
              <FlipWords />
            </div>
        </div>

        <div className="flex flex-col items-center mt-5 lg:mt-0 lg:-mx-30 z-51">
          <img
            className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]"
            src="/assets/images/cloud1.png"
            alt="Cloud"
          />
          <div className="flex items-center justify-center sm:gap-10">
            <img
              className="w-[400px] sm:w-[400px] md:w-[450px] lg:w-[550px] z-30"
              src="/assets/images/person.png"
              alt="Person"
            />
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[71px]"
              src="/assets/images/Ball.png"
              alt="Ball"
            />
          </div>
        </div>
      </div>
      <div
  className="absolute left-0 w-full z-20
    h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]
    bottom-[-10px] sm:bottom-[-15px] md:bottom-[-20px] lg:bottom-0
    transform scale-y-[1.5] sm:scale-y-[1.1] md:scale-y-[1] lg:scale-y-[1]"
  style={{
    backgroundImage: `url(${"/assets/images/Vector-1.png"})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
  }}
></div>
      {/* <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0 }}
        >
      <Brand />
        </motion.div> */}
    </div>
  );
};

export default Home;
