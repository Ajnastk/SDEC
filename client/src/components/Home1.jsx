import image4 from "../assets/images/person.png";
import image5 from "../assets/images/Ball.png";
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.svg";
import cloud3 from "../assets/images/cloud3.svg";
import object4Png from "../assets/images/bulb.png";
import Menu from "../assets/images/menu.svg";
import Stroke from "../assets/images/Grid.svg";



const Home1 = () => {
  return (
    <div className="min-w-screen  h-[1200px] [background:linear-gradient(180deg,rgb(0,10,31)_0%,rgb(0,12,47)_100%)]">
      <div className="relative h-[1410px]">
        <div className="absolute  h-[904px] top-0 left-0">
          <div className="absolute w-[1111px] h-[49px] top-16 left-[310px]">
            
            <div className="absolute w-[682px] h-[30px] top-0 left-[100px]">
              <div className="absolute w-[70px] h-[30px] top-0 left-0">
                <div className="absolute w-[53px] h-[30px] top-0 left-0">
                  <div className="absolute w-[53px] h-px top-[27px] left-0 bg-white" />
                  <div className="absolute w-[1111px] h-[49px] top-16 left-[405px]">
              SDEC
            </div>

                  <div className="absolute h-[30px] top-0 left-0 [font-family:'Jost-Medium',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                    Home
                  </div>
                </div>
                <div className="absolute h-6 top-px left-[58px] [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
                  
                </div>
              </div>
              <div className="h-[30px] top-0 left-[109px] [font-family:'Jost-Medium',Helvetica] font-medium text-xl leading-[30px] absolute text-white text-center tracking-[0] whitespace-nowrap">
                Clients
              </div>
              <div className="h-6 top-px left-[173px] [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-xs leading-6 absolute text-white text-center tracking-[0] whitespace-nowrap">
                
              </div>
              <div className="h-[30px] top-0 left-[225px] [font-family:'Jost-Medium',Helvetica] font-medium text-xl leading-[30px] absolute text-white text-center tracking-[0] whitespace-nowrap">
                Services
              </div>
              <div className="left-[304px] absolute h-6 top-px [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
                
              </div>
              <div className="h-[30px] top-0 left-[358px] [font-family:'Jost-Medium',Helvetica] font-medium text-xl leading-[30px] absolute text-white text-center tracking-[0] whitespace-nowrap">
                Projects
              </div>
              <div className="left-[433px] absolute h-6 top-px [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
                
              </div>
              <div className="h-[30px] top-0 left-[485px] [font-family:'Jost-Medium',Helvetica] font-medium text-xl leading-[30px] absolute text-white text-center tracking-[0] whitespace-nowrap">
                About
              </div>
              <div className="left-[543px] absolute h-6 top-px [font-family:'Font_Awesome_5_Free-Solid',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
                
              </div>
              <div className="h-[30px] top-0 left-[597px] [font-family:'Jost-Medium',Helvetica] font-medium text-xl leading-[30px] absolute text-white text-center tracking-[0] whitespace-nowrap">
                Contact
              </div>
            </div>
            <img
              className="absolute w-7 h-[22px] top-0.5 left-[1083px]"
              alt="Vector"
              src={Menu}
            />
          </div>
        </div>
        <div className="relative h-[904px]">
          <img
            className="absolute min-w-screen h-[903px] top-0 left-0"
            alt="W stroke"
            src={Stroke}
          />
        </div>
      </div>

      <div className="absolute w-[1422px] h-[490px] top-[123px] left-[238px]">
        <img
          className="absolute w-[278px] h-[277px] top-0 left-[900px]"
          alt="Image"
          src={cloud3}
        />
        <img
          className="absolute w-[278px] h-[159px] top-[331px] left-[483px]"
          alt="Image"
          src={cloud2}
        />
        <img
          className="absolute w-[278px] h-[92px] top-[47px] right-[1300px]"
          alt="Image"
          src={cloud1}
        />
      </div>
      <div className="absolute w-[780px] h-[686px] top-[161px] left-[720px]">
        <div className="relative h-[686px]">
          <img
            className="absolute w-[718px] h-[668px] top-0 "
            alt="Image"
            src={image4}
          />
          <img
            className="absolute w-[107px] h-[107px] top-[179px] left-[673px]"
            alt="Image"
            src={image5}
          />
        </div>
      </div>
      <div className="absolute w-[720px] h-[225px] top-[281px] left-[405px]">
        <div className="absolute w-[548px] h-[310px] top-[-70px] left-0">
          <img
            className="absolute w-[206px] h-[214px] -top-[20px] left-[190px] "
            alt="Object png"
            src={object4Png}
          />
          <div className="absolute w-[550px] h-[258px] top-[52px] right-[150px] [font-family:'Jost-SemiBold',Helvetica] font-semibold text-white text-[75px] tracking-[-0.75px] leading-[75px]">
            We Provide
            <br />
            smart Business
            <br />
            solutions
          </div>
        </div>
        <p className="absolute w-[441px] h-[29px] top-[248px] right-[425px] [font-family:'Jost-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
          Grow your Business With Us Best Business Solutions
        </p>
         {/* Shape Divider at the Bottom */}
       
      </div>   
    
      
      
</div>
    

  );
};

export default Home1;
