//import { motion } from "framer-motion";
import Navbar from "./Navbar";
//import RotatingText from "../assets/animations/RotatingText";
import cloud1 from "../assets/images/cloud1.png";
//import bulb from "../assets/images/bulb.png";
import ball from "../assets/images/Ball.png";
import person from "../assets/images/person.png";
import vector from "../../src/assets/images/Vector-1.png";
import homeBg from "../assets/images/home-bg.png";
//import Brand from "../components/Brand";
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
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Navbar />
      <div className=" flex flex-col lg:flex-row justify-center px-5 lg:px-20 ">
        <div className=" items-center lg:items-start lg:mx-20">
          <img
            className="mt-5 w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]"
            src={cloud1}
            alt="Cloud"
          />
          <div>
            <div className="flex">
              <FlipWords />
            </div>

            {/* <div className="flex bg-amber-900 items-center">
              <p className="text-white font-bold text-3xl lg:text-6xl  w-[160px] sm:w-[190px] md:w-[200px] lg:w-[400px] sm:text-4xl">
                We Provide
              </p>
              <img
                className="relative lg:right-[100px] w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40"
                src={bulb}
                alt="Bulb"
              />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 lg:mt-0 lg:-mx-30 z-51">
          <img
            className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]"
            src={cloud1}
            alt="Cloud"
          />
          <div className="flex items-center justify-center gap-5 sm:gap-10">
            <img
              className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] z-30"
              src={person}
              alt="Person"
            />
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[71px]"
              src={ball}
              alt="Ball"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute md:bottom-100 bottom-[-20px] lg:bottom-0 left-0 sm:w-full md:w-full lg:w-full w-full h-1/3 z-20"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
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
