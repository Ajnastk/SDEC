import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white p-4">
      <div className="container mx-auto flex justify-center items-center space-x-35">
        {/* Logo */}
        <div className="text-4xl font-bold">SDEC</div>

        {/* Mobile Menu Button */}
        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links (Desktop View) */}
        <ul className="hidden sm:flex space-x-6">
           <li href="#" className="cursor-pointer hover:text-gray-200">Home</li>
           <li href="#" className="cursor-pointer hover:text-gray-200">Clients</li>
           <li href="#" className="cursor-pointer hover:text-gray-200">Services</li>
           <li href="#" className="cursor-pointer hover:text-gray-200">Projects</li>
           <li href="#" className="cursor-pointer hover:text-gray-200">About</li>
           <li href="#" className="cursor-pointer hover:text-gray-200">Contact</li>
        </ul>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <ul className="sm:hidden mt-2 p-4 rounded-md">
          <li href="#" className="block py-2 text-center">Home</li>
          <li href="#" className="block py-2 text-center">About</li>
          <li href="#" className="block py-2 text-center">Services</li>
          <li href="#" className="block py-2 text-center">Blog</li>
          <li href="#" className="block py-2 text-center">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
