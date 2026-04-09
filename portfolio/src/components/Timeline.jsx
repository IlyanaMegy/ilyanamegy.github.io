import { motion } from "framer-motion";
import WildText from "../assets/pattern_jobs.png";
import { useDevice } from "../contexts/DeviceContext";
import { useLanguage } from "../contexts/LanguageContext";

const Timeline = () => {
  const isMobile = useDevice();
  const { t } = useLanguage();

  const parcours = [
    { 
      year: t('timeline2023'), 
      title: t('timeline42'), 
      subtitle: t('timeline42Subtitle'),
      description: <>{t('timeline42Desc')}</>,
      type: "school"
    },
    { 
      year: t('timeline2022'), 
      title: t('timelineYnov'), 
      subtitle: t('timelineYnovSubtitle'),
      description: <>{t('timelineYnovDesc')}</>,
      type: "school"
    },
    { 
      year: t('timeline2019'), 
      title: t('timelineBac'), 
      subtitle: t('timelineBacSubtitle'),
      description: <>{t('timelineBacDesc')}</>,
      type: "achievement"
    },
  ];

  return (
    <section id="parcours" className="py-16 sm:py-24 px-4 sm:px-10 bg-[rgb(227_208_179_/_16%)] max-w-[75rem] md:px-18 max-w-5xl mt-12 md:mt-[10%] pb-[5%] mb-12 md:mb-[10%] mx-auto relative">
      <h2 className="text-2xl sm:text-3xl titles_big:text-4xl font-bold text-[#857893e8] mb-10 sm:mb-20 text-center uppercase">{t('timelineTitle')}</h2>
      <div 
        className={`absolute top-100 -right-5 hidden lg:block ${isMobile ? 'hidden' : ''}`}
        style={{
          backgroundImage: `url(${WildText})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '925px',
          height: 'auto',
          aspectRatio: '16/9',
          opacity: '75%',
        }}
      >
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lavender/30 hidden md:block"></div>
        <div className="space-y-12">
          {parcours.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center md:text-left`}>
                <div className="bg-[#e1dcd2ad] p-5 sm:p-6 rounded-md shadow-md">
                  <span className="text-sm font-bold text-[#9d8caf] uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#614a3f] mt-2 mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-[#9d8caf] font-medium mb-4">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-[#858585] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lavender border-4 border-bg rounded-full z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
