import { useState } from 'react'
import Header from './Header';
import Navbar from './Navbar';



const Home = ()=> {

  return (

    <div className=" bg-[#010a23] bg-[url(/assets/images/home-bg.png)]">
      <Navbar />
      <div className="flex">
        <div className="flex flex-col">
        <img className=' m-15 mx-50 w-[150px] h-[50px] lg:w-[278px] lg:h-[92px]' src="/assets/images/cloud1.png"/>
        <div className="flex flex-col">
        <div className="flex relative z-0">
        <p className="text-white font-bold lg:text-6xl sm:text-3xl flex items-center gap-2 ">
        We Provide
        </p>
        <img className=" w-20 h-20 lg:w-40 lg:h-40" src="/assets/images/bulb.png"/>
        </div>
        <div className="flex -mt-5 lg:-mt-10 z-10 ">
          <div>
          <p className="text-white  font-bold lg:text-6xl sm:text-3xl z-20">
         Smart Business<br/>
          Solution
        </p>
        <p className=" text-white mt-5">
          Grow Your Business With Us Best Business Solution
       </p>
          </div>
          <div className="lg:mt-15 lg:-mx-10">
            <img className="w-[150px] h-[50px] lg:w-[278px] lg:h-[92px]" src="/assets/images/cloud1.png" />
          </div>
        
        </div>
        </div>
        </div>
        <div>
          <img className="lg:w-[718px] lg:h-[686px]" src="/assets/images/person.png"/>
        </div>
      </div>
    </div> 

  )
}

export default Home;
