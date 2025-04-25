import Image from "next/image";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Seo from "@/components/Seo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardDemo";
import Fact from "@/components/Fact";
import FAQAccordion from "@/components/FAQAccordion";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-[#000a1f] w-full overflow-hidden"
    >
      {/* <ThreeDScene /> */}
        <Home/>
        {/* <Cube/> */}
      {/* <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount:0.2}}/> */}
      
      <About/>
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

      <FAQAccordion/>

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
