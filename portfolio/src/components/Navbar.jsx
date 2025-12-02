import React from "react";
import { Link } from "react-scroll";
import Me from "../assets/cv_logo.png";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(175_159_191_/_90%)] backdrop-blur-md z-50 p-2 pl-0 pr-2 md:pr-3 lg:pr-6 flex justify-between items-center">
        <img
          src={Me}
          alt="Illustration d'Ilyana"
          className="w-20 h-20 md:w-30 md:h-30"
        />

      <div className="hidden md:flex space-x-4 text-text">
        {["accueil","à propos","Parcours","Skills","Projects","Contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-sm lg:text-lg font-nav text-[#2b1710a3] md:text-base hover:text-[#edcbbe9c] transition-colors tracking-[1.5px] uppercase"
          >
            {section}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
