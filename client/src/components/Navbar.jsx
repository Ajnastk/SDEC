import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  
  const navLinks = ["Home", "About", "Services", "Projects","Fact", "Contact"];
  
  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Set navbar visible if scrolling up or at the very top
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
      
      // Update active link based on scroll position
      updateActiveSection();
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Set the initial active link based on the URL hash when component mounts
  useEffect(() => {
    const hash = window.location.hash.substring(1) || "home";
    setActiveLink(hash.toLowerCase());
    
    // Set up initial active section based on scroll position
    updateActiveSection();
  }, []);
  
  // Function to update the active section based on scroll position
  const updateActiveSection = () => {
    // Get all sections by their ids
    const sections = navLinks.map(link => {
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        const rect = element.getBoundingClientRect();
        return {
          id: link.toLowerCase(),
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      }
      return null;
    }).filter(Boolean);
    
    if (sections.length === 0) return;
    
    // Calculate which section is most visible in the viewport
    const viewportHeight = window.innerHeight;
    let maxVisibleSection = sections[0].id;
    let maxVisibleArea = 0;
    
    sections.forEach(section => {
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, section.top);
      const visibleBottom = Math.min(viewportHeight, section.bottom);
      const visibleArea = Math.max(0, visibleBottom - visibleTop);
      
      // If this section has more visible area, make it the active one
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        maxVisibleSection = section.id;
      }
      
      // Special case: if we're at the top of the page, select home
      if (window.scrollY < 100) {
        maxVisibleSection = "home";
      }
    });
    
    setActiveLink(maxVisibleSection);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName.toLowerCase());
    setClick(false); // Close mobile menu if open
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full px-4 pt-3 fixed top-0 left-0 z-100">
      <nav className={`text-white p-4 bg-gray-900/80 backdrop-blur-md rounded-xl max-w-7xl mx-auto shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-3xl font-bold">SDEC</div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden" onClick={handleClick} aria-label="Toggle Menu">
            {click ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navbar Links (Desktop View) */}
          <ul className="hidden sm:flex space-x-6 text-lg">
            {navLinks.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => { 
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToSection(item.toLowerCase()); 
                  }}
                  className={`transition-colors duration-300 hover:text-blue-400 ${activeLink === item.toLowerCase() ? 'text-blue-400 font-medium' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu (Collapsible) */}
        {click && (
          <ul className="sm:hidden flex flex-col items-center bg-gray-800/90 backdrop-blur-md text-lg py-4 space-y-3 mt-2 rounded-lg">
            {navLinks.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => { 
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToSection(item.toLowerCase()); 
                  }}
                  className={`block py-2 transition-colors duration-300 hover:text-blue-400 ${activeLink === item.toLowerCase() ? 'text-blue-400 font-medium' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}