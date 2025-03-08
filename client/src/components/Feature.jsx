import { contents } from "../Contents";
import { motion } from "framer-motion";
import SpotlightCard from "../assets/animations/SpotlightCard";
import Magnet from "../assets/animations/Magnet";
import ScrollFloat from "../assets/animations/ScrollFloat";

export default function Feature() {
  const { feature } = contents;

  // Animation variants for each element
  // const iconsImageVariants = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: { opacity: 1, x: 0 },
  // };

  const mainImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // const extraDivVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };

  const marginLeftValues = ["ml-[35px]", "ml-[0px]", "ml-[35px]"];
  const iconsAnimation = [
    { scale: [], y: [0, 2, 0], x: [0, 3, 0] },
    { scale: [], y: [0, 2, 0], x: [0, 1, 0] },
    { scale: [], y: [0, 3, 0], x: [0, 2, 0] },
  ];

  return (
    <section className="relative bg-[#000a1f] text-white p-5 overflow-hidden pt-[130px] z-50">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center  justify-center z-10">
        {/* Left Side - Illustration */}
        <div className="relative w-full md:w-3/7 flex flex-col justify-center mt-[220px] ">
          <div className="md:flex justify-center items-center w-full hidden ">
            <div className="flex flex-col gap-20 ">
              {feature.iconsImageArray.map((icon, index) => (
                <Magnet
                  key={index}
                  padding={50}
                  disabled={false}
                  magnetStrength={8}
                >
                  <motion.img
                    className={`hidden md:block ${marginLeftValues[index]}`} // Hide on mobile
                    src={icon}
                    alt="icons"
                    animate={iconsAnimation[index]}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Magnet>
              ))}
            </div>

            {/* Animated Main Image */}
            {/* <motion.img
              src={feature.mainImage}
              animate={{ scale: [], y: [0, 8, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              alt="Business Illustration"
              className="w-48 ml-15 md:w-60"
              // initial="hidden"
              // whileInView="visible"
              // variants={mainImageVariants}
              // transition={{
              //   duration: 1, // Control the duration of the animation
              //   ease: "easeOut",
              // }}
            /> */}
            <motion.img
              src={feature.mainImage}
              animate={{ scale: [], y: [0, 8, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              alt="Business Illustration"
              className="hidden lg:block w-48 md:w-60" // Hide on mobile, show on md+
            />
          </div>

          {/* Background Heading (Only for Mobile) */}
          {/* <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[50px] font-extrabold uppercase text-transparent stroke-white md:hidden">
            {feature.backgroundHeading}
          </div> */}
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2  text-center lg:text-left md:text-left relative">
          {/* Background Heading (Only for Desktop) */}
          <div className=" text-white font-bold mb-[-30px] md:mb-[-45px] lg:ml-3 md:ml-3 ">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              {feature.backgroundHeading}
            </ScrollFloat>
          </div>

          <h2 className="text-gray-400 text-2xl md:text-4xl mb-6 text-center md:text-left lg:ml-4 md:ml-4">
            <img
              src={feature.headingLineImage}
              alt=""
              className="mx-auto md:mx-0"
            />
            {feature.heading}
          </h2>

          {/* Animated Extra Div (Added New Section) */}
          {/* <motion.div
            className="p-4 md:p-6 bg-gray-800 rounded-lg"
            initial="hidden"
            whileInView="visible"
            variants={extraDivVariants}
            transition={{
              duration: 1, // Control the duration of the animation
              ease: "easeOut",
            }}
          >
            <p className="text-sm text-gray-400">
              This is an additional section with animation applied. You can customize it further.
            </p>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 items-center ml-4 justify-center text-center md:text-left">
            {feature.featuresList.map((item, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card border border-gray-800 border-opacity-50 rounded-2xl"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-base md:text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
