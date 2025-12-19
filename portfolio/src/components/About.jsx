import PatternAbout from "../assets/pattern_about.png";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="apropos" 
      className="py-24 px-4 md:px-18 max-w-[75rem] mt-[10%] pb-[7%] mb-[10%] mx-auto relative"
      style={{
        backgroundImage: `url(${PatternAbout})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#e7dcca4d',
          opacity: '1'
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-3xl titles_big:text-4xl font-bold text-[#857893e8] mb-[50px] text-center uppercase">{t('aboutTitle')}</h2>
        <p 
          className="text-[rgb(83_49_25_/_88%)] text-[14px] md:text-[16px] md2:text-[16px] xl:text-[18px] pl-4 pr-4 leading-[2] text-center pb-0 font-nav uppercase font-bold"
          dangerouslySetInnerHTML={{ __html: t('aboutText') }}
        />
      </div>
    </section>
  );
};

export default About;
