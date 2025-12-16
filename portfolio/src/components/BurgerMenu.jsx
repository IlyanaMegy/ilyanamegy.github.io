import React, { useState } from "react";
import { Link } from "react-scroll";
import ArrowDown from "../assets/navbar/down_arrow.png";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sections = ["accueil","à propos","parcours","compétences","projets","contact"];

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 rounded hover:bg-lavender/10 transition-colors"
      >
        <img src={ArrowDown} alt="Menu" className="w-10 h-10" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-bg/95 backdrop-blur-md rounded-lg shadow-lg border border-lavender/20">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1300}
              className="block px-4 py-2 text-sm font-nav text-[#2b1710a3] hover:text-[#edcbbe9c] hover:bg-lavender/10 transition-colors tracking-[1.5px] uppercase text-center"
              onClick={() => setIsOpen(false)}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;