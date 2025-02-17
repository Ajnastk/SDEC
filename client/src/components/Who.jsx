
import who from "../assets/images/who.svg";
import pseudo from "../assets/images/headingLineImage.png";

<<<<<<< HEAD:client/src/components/Who.jsx
export default function Who(){
  const services = [
=======



 const Who = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2 space-y-6 text-white">
        <div className="right-12 top-[150px] relative text-transparent text-[150px] font-black leading-none" style={{ WebkitTextStroke: "1px #ffffff26" }}>
          WHO
        </div>
        <img className="w-20 h-2.5" alt="Pseudo" src={pseudo} />
        <p className="text-4xl font-semibold leading-snug">
          We’re an Award-Winning <br /> Modern Business Solutions <br /> Agency
        </p>
        <p className="text-lg leading-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis architecto beatae.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
  {[
>>>>>>> 2072417f880d30c4cee8f9d634fbb3dd12b65ce1:src/components/Who.jsx
    "Tech Solutions",
    "IT Consulting",
    "Web Solutions",
    "Business Growth",
    "Product Design",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 bg-[#292738] p-2 rounded-lg shadow-lg min-w-[160px] min-h-[60px] text-white"
    >
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-purple-500 shrink-0">
        <span className="text-white text-[14px] font-bold">✔</span>
      </div>
      <span className="text-sm font-medium whitespace-nowrap">{item}</span>
    </div>
  ))}
</div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img className="w-full max-w-md" alt="About png" src={who} />
      </div>
    </div>
  );
<<<<<<< HEAD:client/src/components/Who.jsx
};
=======
};


export default Who;

>>>>>>> 2072417f880d30c4cee8f9d634fbb3dd12b65ce1:src/components/Who.jsx
