import { contents } from "../contents";


const Projects=()=>{

    const {Projects} =contents;
    return(
        <div className="flex flex-col  py-20 text-white">
            <div className="flex flex-col items-center">
                <p className="font-extrabold text-[70px] sm:text-[50px] md:text-[80px] lg:text-[120px] leading-[0%] tracking-tight uppercase text-transparent stroke-white">
                    {Projects.backgroundHeading}
                </p>
                <img src={Projects.underLineImage}/>
                <p className="text-3xl md:text-4xl sm:text-xl font-semibold">
                    Checkout our Recently<br/>
                    Completed Projects
                </p>
            </div>
        </div>
    )
}

export default Projects;