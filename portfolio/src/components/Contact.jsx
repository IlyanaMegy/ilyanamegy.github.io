import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import ContactPattern1 from "../assets/contact/contact_pattern_1.png";
import ContactPattern2 from "../assets/contact/contact_pattern_2.png";
import GithubIcon from "../assets/contact/github.png";
import PhoneIcon from "../assets/contact/phone.png";
import EmailIcon from "../assets/contact/email.png";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [currentBg, setCurrentBg] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const progress = latest
      if (progress < 0.33) setCurrentBg(0);
      else if (progress < 0.66) setCurrentBg(1);
      else setCurrentBg(2);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  const backgrounds = [ContactPattern1, ContactPattern2, ContactPattern1];

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-24 px-4 md:px-18 w-full mt-[15%] mb-[15%] mx-auto relative min-h-[55vh]"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${ContactPattern1})`,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            opacity: currentBg === 0 || currentBg === 2 ? 1 : 0.01
          }}
        />
        <div 
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${ContactPattern2})`,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            opacity: currentBg === 1 ? 1 : 0.3
          }}
        />
      </div>
      
      <div className="relative z-10 grid grid-cols-12 grid-rows-12 items-start h-full">
        <div className="col-start-8 xxs:col-start-4 xs:col-start-4 sm:col-start-4 md:col-start-5 md2:col-start-5 md3:col-span-7 col-span-5 row-start-9 xs:mt-[-2%] sm:mt-[-10%] lg:row-start-9 xl:row-start-9 2xl:row-start-9 row-span-5 lg:mb-5 midxl:mb-7 xl:mb-8 mid2xl:ml-[10%] mid3xl:ml-[15%] 4xl:mb-[10%]">
          <div className="xxs:space-y-5 xs:space-y-5 sm:space-y-8 md:space-y-7 space-y-8">
            <div>
              <h2 className="text-[23px] xxs:text-[24px] xs:text-[26px] sm:text-[28px] md:text-[30px] md2:text-[35px] mid3:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[36px] 3xl:text-[36px] font-bold text-[#cf9974] uppercase font-nav tracking-wider relative">{t('contact')}</h2>
            </div>
            
            <div className="space-y-8 xxs:space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 md2:space-y-6 md3:space-y-7">
              {/* <div className="flex items-center space-x-4">
                <img src={PhoneIcon} alt="Téléphone" className="w-7 h-7 md:w-8 md:h-8" />
                <span className="text-[#d6cddf] text-[15px] md:text-[17px] lg:text-[16px] font-nav">06 85 10 97 38</span>
              </div> */}
              <div className="flex items-center space-x-4">
                <img src={EmailIcon} alt="Email" className="w-7 h-7 md:w-8 md:h-8" />
                <a href="mailto:ilyanamegy@gmail.com" className="text-[#d6cddf] text-[15px] md:text-[18px] lg:text-[20px] font-nav hover:text-[#cf9974] transition-colors">ilyanamegy@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <img src={GithubIcon} alt="GitHub" className="w-7 h-7 md:w-8 md:h-8" />
                <a href="https://github.com/IlyanaMegy" target="_blank" rel="noopenernoreferrer" className="text-[#d6cddf] text-[15px] md:text-[18px] lg:text-[20px] font-nav hover:text-[#cf9974] transition-colors">@IlyanaMegy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
