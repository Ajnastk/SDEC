import Navbar from './Navbar';
import cloud1 from '../assets/images/cloud1.png';
import bulb from '../assets/images/bulb.png';
import ball from '../assets/images/Ball.png';
import person from '../assets/images/person.png';
import vector from '../assets/images/vector.png';
import homeBg from '../assets/images/home-bg.png';
import Brand from "../components/Brand";

const Home = () => {
  return (
<<<<<<< HEAD:client/src/components/Home.jsx


    <div className=" bg-[#010a23] " style={{backgroundImage :` url(${homeBg})`}}>
=======
    <div className="bg-[#010a23]" style={{ backgroundImage: `url(${homeBg})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
>>>>>>> 2072417f880d30c4cee8f9d634fbb3dd12b65ce1:src/components/Home.jsx
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center px-5 lg:px-20">
        <div className="flex flex-col items-center lg:items-start lg:mx-20">
          <img className='mt-5 w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]' src={cloud1} alt="Cloud" />
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <p className="text-white font-bold text-3xl lg:text-6xl sm:text-4xl">We Provide</p>
              <img className="w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40" src={bulb} alt="Bulb" />
            </div>
            <p className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl -mt-10">Smart Business<br />Solution</p>
            <p className="text-white text-sm sm:text-base mt-3">Grow Your Business With Us Best Business Solution</p>
          </div>
        </div>

        <div className='flex flex-col items-center mt-5 lg:mt-0 lg:-mx-30'>
          <img className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px] lg:w-[278px] lg:h-[92px]" src={cloud1} alt="Cloud" />
          <div className='flex items-center justify-center gap-5 sm:gap-10'>
            <img className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[718px]" src={person} alt="Person" />
            <img className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[70px] lg:h-[70px]' src={ball} alt="Ball" />
          </div>
        </div>
      </div>

<<<<<<< HEAD:client/src/components/Home.jsx
    <div className='flex flex-col items-center justify-center lg:-mt-60 px-5 lg:px-20' style={{backgroundImage :` url(${vector})`}}>
    <div className='flex flex-col md:flex-row items-center justify-between gap-20 mt-70'>
    <div className='text-center md:text-left '>
          <img className="mx-auto md:mx-0 w-10 sm:w-20" src={headingLine}/>
          <h1 className=" -mt-12 font-extrabold text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] leading-[120%] tracking-tight uppercase text-transparent stroke-white">
             BRAND
        </h1>
        <p className='text-white font-medium text-xl sm:text-2xl lg:text-3xl -mt-12'> We've More Then 254+ <br/> Global Partners</p>

      </div>
      <div className='text-center md:text-left'>
        <p className='text-white text-sm sm:text-base'> Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Sunt necessitatibus voluptates,<br/> aspernatur fugit quos reiciendis numquam dignissimos</p>
=======
      <div className='flex flex-col items-center justify-center lg:-mt-[420px] px-5 lg:px-20' style={{ backgroundImage: `url(${vector})`, backgroundSize: 'certain', backgroundPosition:"bottom"  ,backgroundRepeat: 'no-repeat'  }}>
        <div >
        <Brand />
        </div>
>>>>>>> 2072417f880d30c4cee8f9d634fbb3dd12b65ce1:src/components/Home.jsx
      </div>
    </div>
  );
}

export default Home;