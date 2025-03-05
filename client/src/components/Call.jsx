import { useState } from "react";
import Swal from "sweetalert2";
import callImage from "../assets/images/call.svg";
import { contents } from "../Contents";
import ScrollFloat from "../assets/animations/ScrollFloat";
const Call = () => {
  const { call } = contents;
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_BACKEND_URL : "http://localhost:2000/"
    
    try {
      const response = await fetch(`${backendUrl}send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();
      
      if (response.ok) {
        Swal.fire({
          title: "success",
          text: data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to sent Email. Please try again",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error sending email", error);
    }
  };
  return (
    <div
      className="container mt-[130px]  px-4 py-16 flex flex-col lg:flex-row items-center gap-8"
      id="contact"
    >
      {/* Left Side - Image */}
      <div className="lg:w-1/2">
        <img
          className="w-full max-w-[541px]"
          alt="Person working on laptop"
          src={callImage}
        />
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 max-w-[515px]">
        <div className="relative mb-8">
          <div className=" text-white font-bold md:mb-[-45px] mb-[-30px] md:ml-[30px] ml-9 ">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
            >
              {call.heading}
            </ScrollFloat>
          </div>
          <img
            className="ml-10"
            alt="Decorative line"
            src={call.underLine}
          />
          <h2 className="text-4xl text-gray-400 ml-10 relative z-10 leading-tight">
            Ready to Work Together <br /> In News Projects?
          </h2>
        </div>

        {/* Contact Form */}
        <div className="bg-transparent p-6 shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formdata.name}
              placeholder="Your Name*"
              onChange={handleChange}
              required
              className="w-full h-[54px] px-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md focus:ring-2"
            />
            <input
              type="email"
              name="email"
              value={formdata.email}
              placeholder="Your Email*"
              onChange={handleChange}
              required
              className="w-full py- h-[54px] px-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md focus:ring-2"
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formdata.message}
              onChange={handleChange}
              required
              className="w-full h-[120px] px-4 pt-4 bg-neutral-50 text-[#a8adb3] font-normal border rounded-md resize-none focus:ring-2"
            />
            <button
              type="submit"
              className="w-[178px] h-[54px] text-white text-[17px] font-semibold bg-gradient-to-b from-[#186ef2] to-[#6d18ef] cursor-pointer hover:opacity-90 rounded-[4px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Call;
