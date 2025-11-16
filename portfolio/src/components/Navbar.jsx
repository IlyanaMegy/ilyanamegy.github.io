import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bg/70 backdrop-blur-md z-50 p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-text">Ilyana Megy</div>
      <div className="space-x-4 text-text">
        {["accueil","à propos","parcours","compétences","projets","contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-lavender transition-colors capitalize"
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
