import { useState } from "react";
import Link from "next/link";

export default function Navbar(){
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
  <li><Link href="/" className="cursor-pointer hover:text-gray-200">Home</Link></li>
  <li><Link href="/clients" className="cursor-pointer hover:text-gray-200">Clients</Link></li>
  <li><Link href="/services" className="cursor-pointer hover:text-gray-200">Services</Link></li>
  <li><Link href="/projects" className="cursor-pointer hover:text-gray-200">Projects</Link></li>
  <li><Link href="/about" className="cursor-pointer hover:text-gray-200">About</Link></li>
  <li><Link href="/contact" className="cursor-pointer hover:text-gray-200">Contact</Link></li>
</ul>

      </div> 

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
       <ul className="sm:hidden mt-2 p-4 rounded-md">
       <li><Link href="/" className="block py-2 text-center">Home</Link></li>
       <li><Link href="/clients" className="block py-2 text-center">Clients</Link></li>
       <li><Link href="/services" className="block py-2 text-center">Services</Link></li>
       <li><Link href="/projects" className="block py-2 text-center">Projects</Link></li>
       <li><Link href="/about" className="block py-2 text-center">About</Link></li>
       <li><Link href="/contact" className="block py-2 text-center">Contact</Link></li>
     </ul>
     
      )}
    </nav>
  );
};


