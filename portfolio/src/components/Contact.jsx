import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import ContactPattern1 from "../assets/contact/contact_pattern_1.png";
import ContactPattern2 from "../assets/contact/contact_pattern_2.png";
import GithubIcon from "../assets/contact/github.png";
import PhoneIcon from "../assets/contact/phone.png";
import EmailIcon from "../assets/contact/email.png";

const Contact = () => {
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
      
      <div className="relative z-10 grid grid-cols-12 items-start h-full">
        <div className="col-start-4 col-span-3">
          <div className="mt-[100px] xsm:mt-[125px] sm:mt-[115px] md:mt-[115px] ml-[100px] xsm:ml-[-35px] sm:ml-[-20px] md:ml-[0px] midlg:ml-[15px] lg:ml-[45px] midxl:ml-[70px] xl:ml-[110px] mid2xl:ml-[140px] 2xl:ml-[180px] 3xl:ml-[225px] mb-12">
            <h2 className="xsm:text-[25px] sm:text-[27px] text-3xl md:text-[29px] midlg:text-[35px] lg:text-[35px] xl:text-[35px] 2xl:text-[36px] 3xl:text-[36px] font-bold text-[#cf9974] uppercase font-nav tracking-wider relative">Contact</h2>
            <div 
              className="absolute"
              style={{
                content: '""',
                display: 'block',
                width: '40px',
                paddingTop: '3px',
                borderBottom: '3px solid rgb(227 153 104)',
                marginTop: '8px'
              }}
            ></div>
          </div>
        </div>
        <div className="col-start-4 col-span-5 xsm:ml-[35px] sm:ml-[55px] md:ml-[55px] lg:ml-[50px] xl:ml-[60px] 2xl:ml-[85px] flex items-center justify-center">
          <div className="space-y-5 md:space-y-4 sm:space-y-4 xsm:space-y-3">
            <div className="flex items-center space-x-4">
              <img src={PhoneIcon} alt="Téléphone" className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-[#d6cddf] text-[15px] md:text-[16px] lg:text-[16px] font-nav">06 85 10 97 38</span>
            </div>
            <div className="flex items-center space-x-4">
              <img src={EmailIcon} alt="Email" className="w-7 h-7 md:w-8 md:h-8" />
              <a href="mailto:ilyanamegy@gmail.com" className="text-[#d6cddf] text-[15px] md:text-[16px] lg:text-[16px] font-nav hover:text-[#cf9974] transition-colors">ilyanamegy@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <img src={GithubIcon} alt="GitHub" className="w-7 h-7 md:w-8 md:h-8" />
              <a href="https://github.com/IlyanaMegy" target="_blank" rel="noopenernoreferrer" className="text-[#d6cddf] text-[15px] md:text-[16px] lg:text-[16px] font-nav hover:text-[#cf9974] transition-colors">@IlyanaMegy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
