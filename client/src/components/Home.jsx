import { motion } from 'framer-motion';
import Navbar from './Navbar';

import cloud1 from '../assets/images/cloud1.png';
import bulb from '../assets/images/bulb.png';
import ball from '../assets/images/Ball.png';
import person from '../assets/images/person.png';
import vector from '../assets/images/vector.png';
import homeBg from '../assets/images/home-bg.png';
import Brand from "../components/Brand";

const fadeIn ={
  hidden:{ opacity:0,y:50},
  visible:{opacity:1,y:0, transition :{duration:0.8,ease:"easeOut"}},
}

const Home = () => {
  return (
    <div className=" flex flex-col pt-20 scroll-mt-20 z-0 bg-[#010a23] " id='home' style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'contain'}}>
      <Navbar />
      <div className=" flex flex-col lg:flex-row justify-center px-5 lg:px-20 ">
        <div className=" items-center lg:items-start lg:mx-20">
          <img className='mt-5 w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]' src={cloud1} alt="Cloud" />
          <div>
            <div className="flex items-center">
              <p className="text-white font-bold text-3xl lg:text-6xl  w-[160px] sm:w-[190px] md:w-[200px] lg:w-[400px] sm:text-4xl">We Provide</p>
              <img className="relative lg:right-[100px] w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40" src={bulb} alt="Bulb" />
            </div>
            <p className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl">Smart Business<br />Solution</p>
            <p className="text-white text-sm sm:text-base mt-3">Grow Your Business With Us Best Business Solution</p>
          </div>
        </div>

        <div className='flex flex-col items-center mt-5 lg:mt-0 lg:-mx-30'>
          <img className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]" src={cloud1} alt="Cloud" />
          <div className='flex items-center justify-center gap-5 sm:gap-10'>
            <img className="w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] z-10" src={person} alt="Person" />
            <img className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[71px]' src={ball} alt="Ball" />
          </div>
        </div>
      </div>
      <div className=' relative top-10 items-center lg:px-20  ' style={{ backgroundImage: `url(${vector})`, backgroundSize: 'certain' ,backgroundRepeat: 'no-repeat'  }}>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{amount: 0.1}}>
        <Brand />
        </motion.div>
      </div>
</div>
  );
}

export default Home;