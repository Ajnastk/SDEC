import { motion } from "framer-motion";
import About from "./components/About";
import Seo from "./components/Seo";
import Services from "./components/Services";
// import Projects from "./components/Projects";
import { AppleCardsCarouselDemo } from "./components/AppleCardDemo";
import Fact from "./components/Fact";
// import Says from "./components/Says";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import Call from "./components/Call";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Cube from "./components/Cube";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const App = () => {
    return (
      <div className="bg-[#000a1f] w-full overflow-hidden"
      >
        {/* <ThreeDScene /> */}
          <Home/>
          {/* <Cube/> */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}/>
        <About />
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        <Services/>
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.3}}> */}
        <Seo/>
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        {/* <Projects /> */}
        <AppleCardsCarouselDemo />
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        <Fact/>
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        {/* <Says /> */}
        <InfiniteMovingCardsDemo />
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        <Call/>
        {/* </motion.div> */}
        {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}> */}
        <Footer/>
        {/* </motion.div> */}
        </div>
    );
  }

export default App;
