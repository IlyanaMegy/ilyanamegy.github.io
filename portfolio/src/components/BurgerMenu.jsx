import React, { useState } from "react";
import { Link } from "react-scroll";
import MmmhBurger from "../assets/navbar/burger_menu.png";
import BurgerHover from "../assets/navbar/burger_menu_hover.png";
import { useLanguage } from "../contexts/LanguageContext";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { language, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const sections = language === 'fr' 
    ? ["accueil","apropos","parcours","competences","projets","contact"]
    : ["accueil","apropos","parcours","competences","projets","contact"];

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-16 w-16 rounded hover:bg-lavender/10 transition-all duration-500 ease-in-out flex items-center justify-center"
      >
        <div className="relative">
          <img 
            src={MmmhBurger} 
            alt="Menu" 
            className={`w-10 h-10 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-30' : 'opacity-100'}`} 
          />
          <img 
            src={BurgerHover} 
            alt="Menu" 
            className={`w-10 h-10 absolute top-0 left-0 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
          />
        </div>
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
              className="block px-4 py-2 text-sm font-nav text-[#2b1710a3] hover:text-[#4F2131] hover:bg-lavender/10 transition-colors tracking-[1.5px] uppercase text-center"
              onClick={() => setIsOpen(false)}
            >
              {t(section)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
