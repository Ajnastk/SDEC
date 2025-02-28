import { useState } from "react";
import Swal from "sweetalert2";
import call from "../assets/images/call.svg";
import pseudo from "../assets/images/headingLineImage.png";
const Call = () => {
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
    try {
      const response = await fetch("http://localhost:2000/send-email", {
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
          name : "",
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
    };
  };
  return (
    <div className="container mt-[130px]  px-4 py-16 flex flex-col lg:flex-row items-center gap-8" id="contact">
      {/* Left Side - Image */}
      <div className="lg:w-1/2">
        <img
          className="w-full max-w-[541px]"
          alt="Person working on laptop"
          src={call}
        />
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 max-w-[515px]">
        <div className="relative mb-8">
          <div className="absolute font-jost bottom-2 text-[150px] font-bold text-[#ffffff26] leading-none">
            CALL
          </div>
          <img
            className="w-[84px] h-2.5 ml-10 relative z-10 my-4"
            alt="Decorative line"
            src={pseudo}
          />
          <h2 className="text-4xl font-semibold text-white ml-10 relative z-10 leading-tight">
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
