
import { useState } from 'react';
import call from '../src/assets/images/call.svg'
import pseudo from '../src/assets/images/headingLineImage.png'; 

export default function Call(){
  
  const [formData,setFormData] =useState({
    name:"",
    email:"",
    message:""
  })
  const [status,setStatus] = useState(null);

  //Handle input change
  const handleChange=(e)=>{
      setFormData({...formData, [e.target.name] : e.target.value});
  }
  //Handle for submission
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response=await fetch('/api/send-message',{
        method:'POST',
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify(formData),
      });
      const data= await response.json();
      if(response.ok){
        setStatus({type:"success",message:"Message sent succesfully"});
        setFormData({name:"", email:"",message:""});
      }else{
        setStatus({type:"error", message:data.error || "Something went wrong"});
      }
    } catch (error) {
      setStatus({type:"error", message:error.message || "Network error. Try again later!" })
    }
  };
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Side - Image */}
      <div className="lg:w-1/2">
        <img className="w-full max-w-[541px]" alt="Person working on laptop" src={call} />
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 max-w-[515px]">
        <div className="relative mb-8">
          <div className="absolute font-jost bottom-2 text-[150px] font-bold text-[#ffffff26] leading-none">
            CALL
          </div>
          <img className="w-[84px] h-2.5 ml-10 relative z-10 my-4" alt="Decorative line" src={pseudo} />
          <h2 className="text-4xl font-semibold text-white ml-10 relative z-10 leading-tight">
            Ready to Work Together <br /> In News Projects?
          </h2>
        </div>

        
       {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-transparent p-6 shadow-md rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              className="w-full h-[54px] px-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md focus:ring-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email*"
              className="w-full py- h-[54px] px-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md focus:ring-2"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message*"
              className="w-full h-[120px] px-4 pt-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md resize-none focus:ring-2"
              required
            />
            <button type="submit" className="w-[178px] h-[54px] text-white text-[17px] font-semibold bg-gradient-to-b from-[#186ef2] to-[#6d18ef] hover:opacity-90 rounded-[4px]">
              Send Message
            </button>

            {/* Status message */}
            {status && (
              <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {status.message}
              </p>)}
          </div>
        </form>
      </div>
    </div>
  );
};

