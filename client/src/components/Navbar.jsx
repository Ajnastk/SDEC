import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-center items-center space-x-35">
        {/* Logo */}
        <div className="text-4xl font-bold">SDEC</div>

        {/* Mobile Menu Button */}
        <div className="block sm:hidden" onClick={handleClick}>
          {click ? <FaTimes size={30} style={{ color: '#ffffff' }} /> : <FaBars size={30} style={{ color: '#ffffff' }} />}
        </div>

        {/* Navbar Links (Desktop View) */}
        <ul className="hidden sm:flex space-x-6">
          <a href="#home" className="cursor-pointer hover:text-gray-200" >Home</a>
          <a href="#fact" className="cursor-pointer hover:text-gray-200">Fact</a>
          <a href="#services" className="cursor-pointer hover:text-gray-200">Services</a>
          <a href="#about" className="cursor-pointer hover:text-gray-200">About</a>
          <a href="#contact" className="cursor-pointer hover:text-gray-200">Contact</a>
          <a href="#projects" className="cursor-pointer hover:text-gray-200">Projects</a>
        </ul>
      </div> 

      {/* Mobile Menu (Collapsible) */}
      {click && (
        <ul className="sm:hidden mt-2 p-4 rounded-md">
          <a href="#home" className="block py-2 text-center" >Home</a>
          <a href="#fact" className="block py-2 text-center" >fact</a>
          <a href="#services" className="block py-2 text-center">Services</a>
          <a href="#projects" className="block py-2 text-center">Projects</a>
          <a href="#about" className="block py-2 text-center">About</a>
          <a href="#contact" className="block py-2 text-center">Contact</a>
        </ul>
      )}
    </nav>
  );
}