import { motion } from "framer-motion";
import Me from "../assets/hero/me.svg";
import BgDetails from "../assets/hero/details_bg.svg";
import GithubIcon from "../assets/hero/github.png";
import LinkedInIcon from "../assets/hero/linkedin.png";
import { useDevice } from "../contexts/DeviceContext";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const isMobile = useDevice();
  const { t } = useLanguage();

  return (
  <section
    id="accueil"
    className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-24 sm:pt-28 md:pt-64 gap-6 hero-bg relative overflow-hidden"
  >
    <img
      src={BgDetails}
      alt={t('decorationAlt')}
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    />
    <div
      className={`relative mb-2 md:mb-[150px] z-10 w-full max-w-[2000px] bg-[rgb(113_88_107_/_40%)] mx-auto flex flex-col items-center ${isMobile ? "p-6 pt-10 pb-8 min-h-[560px]" : "p-[50px] md:p-[150px] pt-[40px] md:pt-[80px] pb-[40px] min-h-[700px] md:pb-[70px]"}`}
    >
      <div className="w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${isMobile ? "text-3xl" : "text-4xl md:text-6xl"} font-bold text-[rgb(205_191_219)] mb-6 text-center`}
        >
          {t('heroTitle')}
        </motion.h1>
      </div>
      
      <div className="w-full overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${isMobile ? "text-sm" : "text-lg md:text-xl"} text-[#eddccb] block text-center max-w-2xl mx-auto`}
        >
          {t('heroSubtitle')}<br />
          <span className={isMobile ? "block" : "whitespace-nowrap"}>
            {t('heroDescription')}
          </span>
        </motion.p>
      </div>
      
      <div className="w-full overflow-hidden">
        <img
          src={Me}
          alt={t('heroAlt')}
          className={`${isMobile ? "w-44 h-44 mt-8" : "w-60 h-60 md:w-80 md:h-80 mt-12"} mx-auto`}
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 flex items-center gap-4 z-20">
        <a 
          href="https://github.com/ilyanamegy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={GithubIcon} 
            alt="GitHub" 
            className="w-10 h-10"
          />
        </a>
        <div className="w-px h-6 bg-[#EDDCCB] opacity-80"></div>
        <a 
          href="https://www.linkedin.com/in/ilyana-megy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={LinkedInIcon} 
            alt="LinkedIn" 
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  </section>
  );
};

export default Hero;
