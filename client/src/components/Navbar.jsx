import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="text-white p-4 bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">SDEC</div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={handleClick} aria-label="Toggle Menu">
          {click ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar Links (Desktop View) */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          {["Home", "About", "Fact", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {click && (
        <ul className="sm:hidden flex flex-col items-center bg-gray-800 text-lg py-4 space-y-3">
          {["Home","About", "Fact", "Services", "Projects",  "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block py-2" onClick={() => setClick(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}