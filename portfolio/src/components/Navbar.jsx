import { Link } from "react-scroll";
import Me from "../assets/navbar/cv_logo.png";
import DownloadIcon from "../assets/navbar/download.png";
import FrenchFlag from "../assets/navbar/french-lang.png";
import EnglishFlag from "../assets/navbar/english-lang.png";
import BurgerMenu from "./BurgerMenu";
import { useDevice } from "../contexts/DeviceContext";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const isMobile = useDevice();
  const { language, toggleLanguage, t } = useLanguage();
  
  const currentCv = new URL(`${import.meta.env.BASE_URL}MEGY_Ilyana_Resume.pdf`, window.location.origin).toString();
  const cvFileName = t('cvFileName');
  const sectionOffset = isMobile ? -110 : -180;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(218_202_233_/_70%)] backdrop-blur-md z-50 px-3 py-2 md:px-3 lg:pr-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href={currentCv} download={cvFileName} className="relative group block">
            <img
              src={Me}
              alt={t('cvAlt')}
              className="w-[72px] sm:w-[92px] h-auto noburger-menu:w-[64px] noburger-menu:h-[64px] transition-opacity duration-200 ease-out group-hover:opacity-95"
            />
            <img
              src={DownloadIcon}
              alt={t('downloadAlt')}
              className="absolute inset-x-0 top-4 sm:top-6 w-[42px] h-[42px] sm:w-[55px] sm:h-[55px] mx-auto mt-[-5px] opacity-0 transition-all duration-300 ease-out group-hover:opacity-85 group-hover:scale-110 pointer-events-none"
            />
          </a>

          <button
            onClick={toggleLanguage}
            className="ml-4 sm:ml-10 mb-[-14px] sm:mb-[-18px] w-[38px] sm:w-[45px] h-auto overflow-hidden transition-all duration-150 ease-out hover:scale-105"
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
            offset={section === "parcours" ? sectionOffset : section === "projets" ? (isMobile ? -120 : -190) : section === "competences" ? (isMobile ? -120 : -190) : section === "contact" ? (isMobile ? -130 : -200) : (isMobile ? -90 : -260)}
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
