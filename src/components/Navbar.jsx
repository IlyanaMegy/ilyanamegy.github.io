import { Link } from "react-scroll";
import Me from "../assets/navbar/cv_logo.png";
import DownloadIcon from "../assets/navbar/download.png";
import CvFr from "../../public/Megy_Ilyana_Resume.pdf";
import CvEn from "../../public/Megy_Ilyana_Resume.pdf";
import FrenchFlag from "../assets/navbar/french-lang.png";
import EnglishFlag from "../assets/navbar/english-lang.png";
import BurgerMenu from "./BurgerMenu";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  
  const currentCv = language === 'fr' ? CvFr : CvEn;
  const cvFileName = "Megy_Ilyana_Resume.pdf";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(218_202_233_/_70%)] backdrop-blur-md z-50 p-2 pl-0 pr-2 md:pr-3 lg:pr-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href={currentCv} download={cvFileName} className="relative group block">
            <img
              src={Me}
              alt={t('cvAlt')}
              className= "w-[92px] h-auto noburger-menu:w-[64px] noburger-menu:h-[64px] transition-opacity duration-200 ease-out group-hover:opacity-95"
            />
            <img
              src={DownloadIcon}
              alt={t('downloadAlt')}
              className="absolute inset-x-0 top-6 w-[55px] h-[55px] mx-auto mt-[-5px] opacity-0 transition-all duration-300 ease-out group-hover:opacity-85 group-hover:scale-110 pointer-events-none"
            />
          </a>

          <button
            onClick={toggleLanguage}
            className="ml-10 mb-[-18px] w-[45px] h-auto overflow-hidden transition-all duration-150 ease-out hover:scale-105"
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <img
              src={language === 'fr' ? EnglishFlag : FrenchFlag}
              alt={language === 'fr' ? 'English' : 'Français'}
              className="w-full h-full object-cover"
            />
          </button>
        </div>

      <div className="hidden noburger-menu:flex space-x-4 text-text items-center">
        {["accueil","apropos","parcours","competences","projets","contact"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={section === "parcours" ? -180 : section === "projets" ? -190 : section === "competences" ? -190 : section === "contact" ? -200 : -260}
            duration={500}
            className="cursor-pointer text-sm lg:text-lg font-nav text-[#2b1710c4] md:text-base hover:text-[#754b3dd6] transition-colors tracking-[1.5px] uppercase"
          >
            {t(section)}
          </Link>
        ))}
      </div>

      <div className="noburger-menu:hidden flex justify-end items-center w-full">
        <BurgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
