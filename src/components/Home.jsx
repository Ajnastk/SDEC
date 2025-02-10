
import Navbar from './Navbar';



const Home = ()=> {

  return (


    <div className=" bg-[#010a23] bg-[url(/assets/images/home-bg.png)]">
      <Navbar />
      <div className="flex">
        <div className="flex flex-col">
        <img className=' mt-15 mx-50 w-[150px] h-[50px] lg:w-[278px] lg:h-[92px]' src="/assets/images/cloud1.png"/>
        <div className="flex flex-col mx-50">
    
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
            <img className="w-[150px] h-[50px] lg:w-[278px] lg:h-[92px]" src="/assets/images/cloud1.png"/>

          </div>
        
        </div>
        </div>
        </div>

        <div className='flex flex-col mt-10 -mx-80'>

            <img className=" mx-60 w-[140px] h-[45px] lg:w-[258px] lg:h-[82px]" src="/assets/images/cloud1.png"/>
            <div className='flex'>
            <img className=" -mt-10 mx-5 w-[260px] h-[210px]  md:w-[360] md:h-[310px] lg:w-[718px] lg:h-[686px]" src="/assets/images/person.png"/>
            <img className='mt-30 -mx-30 w-[30px] h-[30px] lg:w-[70px] lg:h-[70px]' src="/assets/images/Ball.png"/>
            </div>



      </div>
    </div> 
    <div className=' flex items-center justify-center gap-20 -mt-80 bg-[url(/assets/images/vector-1.png)]'>
      <div className='flex flex-col '>
          <img className="mx-10 w-20 mt-100" src="/assets/images/headingLineImage.png"/>
          <p class=" -mt-18 font-extrabold text-[80px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-[150px] tracking-tight uppercase text-transparent stroke-white">
             BRAND
        </p>
        <p className='text-white font-medium text-3xl -mt-15'>We've More Then 254+ <br/> Global Partners</p>
      </div>
      <div>
        <p className='text-white mt-100'> Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Sunt necessitatibus voluptates,<br/> aspernatur fugit quos reiciendis numquam dignissimos</p>
      </div>
    </div>
    </div>
   

  )
}

export default Home;
