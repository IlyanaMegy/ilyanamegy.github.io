import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

import HtmlIcon from "../assets/languages/html.svg";
import CssIcon from "../assets/languages/css.svg";
import JsIcon from "../assets/languages/js.svg";
import PythonIcon from "../assets/languages/python.svg";
import CIcon from "../assets/languages/c.svg";
import PhpIcon from "../assets/languages/php.svg";
import SqlIcon from "../assets/languages/sql.svg";
import CsharpIcon from "../assets/languages/csharp.svg";
import BashIcon from "../assets/languages/bash.svg";

import ReactIcon from "../assets/languages/react.svg";
import SymfonyIcon from "../assets/languages/symfony.svg";
import BootstrapIcon from "../assets/languages/bootstrap.svg";
import TailwindIcon from "../assets/languages/tailwindcss.svg";
import TypeScriptIcon from "../assets/languages/typeScript.svg";
import WordpressIcon from "../assets/languages/wordpress.svg";

import DockerIcon from "../assets/languages/docker.svg";
import GitIcon from "../assets/languages/git.svg";
import ComposerIcon from "../assets/languages/composer.svg";
import VagrantIcon from "../assets/languages/vagrant.svg";
import DebianIcon from "../assets/languages/debian.svg";
import skillsBg from "../assets/skills_bg.png";

const Skills = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const hardSkills = [
    { name: "HTML", icon: HtmlIcon, color: "text-orange-500" },
    { name: "CSS", icon: CssIcon, color: "text-blue-500" },
    { name: "JavaScript", icon: JsIcon, color: "text-yellow-500" },
    { name: "Python", icon: PythonIcon, color: "text-blue-600" },
    { name: "C", icon: CIcon, color: "text-gray-600" },
    { name: "PHP", icon: PhpIcon, color: "text-purple-600" },
    { name: "SQL", icon: SqlIcon, color: "text-blue-800" },
    { name: "C#", icon: CsharpIcon, color: "text-purple-700" },
    { name: "Bash", icon: BashIcon, color: "text-gray-700" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "text-blue-700" },

    { name: "React", icon: ReactIcon, color: "text-cyan-500" },
    { name: "Symfony", icon: SymfonyIcon, color: "text-black" },
    { name: "Bootstrap", icon: BootstrapIcon, color: "text-purple-600" },
    { name: "Tailwind", icon: TailwindIcon, color: "text-teal-500" },
    { name: "WordPress", icon: WordpressIcon, color: "text-blue-500" },

    { name: "Docker", icon: DockerIcon, color: "text-blue-400" },
    { name: "Git", icon: GitIcon, color: "text-red-500" },
    { name: "Composer", icon: ComposerIcon, color: "text-gray-600" },
    { name: "Vagrant", icon: VagrantIcon, color: "text-blue-600" },
    { name: "Debian", icon: DebianIcon, color: "text-red-600" },
  ];

  const softSkills = t('softSkills');

  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hardSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, hardSkills.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + hardSkills.length) % hardSkills.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hardSkills.length);
  };

  const getCarouselItemStyle = (index) => {
    const total = hardSkills.length;
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + total) % total);
    let x, opacity, width, height, zIndex;
    
    if (normalizedDiff === 0) {
      x = 0;
      opacity = 1;
      width = '160px';
      height = '150px';
      zIndex = 10;
    } else if (normalizedDiff === 1 || normalizedDiff === total - 1) {
      x = normalizedDiff === 1 ? 180 : -180;
      opacity = 0.5;
      width = '130px';
      height = '115px';
      zIndex = 5;
    } else {
      x = normalizedDiff > total / 2 ? -400 : 400;
      opacity = 0;
      width = '130px';
      height = '115px';
      zIndex = 1;
    }
    
    return {
      transform: `translateX(${x}px)`,
      opacity: opacity,
      zIndex: zIndex,
      width: width,
      height: height,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    };
  };

  return (
    <section 
      id="competences" 
      className="py-24 px-4 md:px-18 max-w-[75rem] mt-[10%] mb-[10%] mx-auto relative min-h-[65vh]"
      style={{
        backgroundImage: `url(${skillsBg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#e7dcca4d'
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-3xl titles_big:text-4xl font-bold text-[#857893e8] mb-20 text-center uppercase">{t('skillsTitle')}</h2>
        <div className="mb-16 px-[20%] soft_skills_md:px-[10%]">
          <motion.div 
            className="grid grid-cols-2 soft_skills_md:grid-cols-2 soft_skills_big:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#cbbfd987] hover:bg-[#d4c9e194] p-4 shadow-sm text-center h-20 flex items-center justify-center"
              >
                <span className="text-md font-nav uppercase tracking-wider text-[#574124] transition-all duration-150 hover:text-bold hover:text-[15px] cursor-pointer">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div>
          <div 
            className="relative h-[210px] flex items-center justify-center mb-0 overflow-hidden pb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={handlePrev}
              className="absolute left-0 z-20 p-3 transition-colors"
            >
              <svg className="w-6 h-6 text-[#61421b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 z-20 p-3 transition-colors"
            >
              <svg className="w-6 h-6 text-[#61421b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`absolute bg-[#cbbfd987] p-6 shadow-sm flex flex-col items-center justify-center transition-all duration-50 ${
                    index === currentIndex ? 'hover:bg-[#d4c9e194] hover:scale-110 cursor-pointer group' : 'cursor-default'
                  }`}
                  style={getCarouselItemStyle(index)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: getCarouselItemStyle(index).opacity }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className={`w-16 h-16 ${skill.color} transition-all duration-200 ${
                      index === currentIndex ? 'group-hover:mb-2' : ''
                    }`}
                  />
                  <span className={`text-sm font-nav uppercase tracking-wider text-[#331f0abd] transition-opacity duration-100 absolute bottom-2 text-center ${
                    index === currentIndex ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                  }`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            {hardSkills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-0.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#61421b] w-8' 
                    : 'bg-[#61421b]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
