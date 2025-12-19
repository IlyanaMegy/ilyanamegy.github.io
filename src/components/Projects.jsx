import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import MockItUpImg from "../assets/projects/MockItUp.png";
import BookclubImg from "../assets/projects/bookclub.png";
import GitserverImg from "../assets/projects/gitserver.jpg";
import WebservImg from "../assets/projects/webserv.png";
import SoLongImg from "../assets/projects/solong.png";
import TankytanksImg from "../assets/projects/tankytanks.png";
import skillsBg from "../assets/skills_bg.png";
import { useLanguage } from "../contexts/LanguageContext";

const ProjectCard = ({ project, index, isDistributed, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative w-80 h-56 cursor-pointer"
      initial={{ 
        opacity: 0,
        scale: 0.8,
        rotateY: 180,
        x: 0,
        y: 0,
        zIndex: 6 - index
      }}
      animate={isDistributed ? {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        x: 0,
        y: 0,
        zIndex: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        rotateY: isInView ? 0 : 180,
        x: 0,
        y: index * 2 - 6,
        zIndex: 6 - index,
        transition: {
          duration: 0.6
        }
      }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.9s'
        }}
      >
        <div
          className="absolute inset-0 w-full h-full rounded-sm shadow-md overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: project.name === 'MockItUp' ? 'center top' : 'center'
          }}
        >
          <div className="h-full bg-[#18181842] flex flex-col justify-end pb-2.5 pt-1">
            <div className={`${index % 2 === 0 ? 'bg-[#a99b81c2]' : 'bg-[#9d6f81c7]'} p-2 rounded-sm`}>
              <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-black/5 text-white px-2 py-1 rounded-sm ">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full rounded-sm shadow-lg bg-[#c9bea9b5] p-4 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[rgb(97_74_63/var(--tw-text-opacity,1))] font-extrabold text-xl mb-3 font-nav uppercase tracking-wider">{project.name}</h3>
            <p className="text-[rgb(97_74_63/var(--tw-text-opacity,1))] text-sm font-semibold leading-relaxed mb-4">{project.description}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a67e90c7] text-white px-3 py-1.5 rounded-sm text-center hover:bg-[#b37f93e6] transition-colors font-nav uppercase tracking-wider text-xs"
          >
            {project.viewGithub}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [isDistributed, setIsDistributed] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      name: t('soLongName'),
      description: t('soLongDesc'),
      github: "https://github.com/IlyanaMegy/42/tree/main/F.so_long",
      image: SoLongImg,
      tags: ["C", "Parsing", "Lexer"],
      viewGithub: t('viewGithub')
    },
    {
      name: t('bookclubName'),
      description: t('bookclubDesc'),
      github: "https://github.com/IlyanaMegy/BookClub",
      image: BookclubImg,
      tags: ["PHP", "CSS", "MySQL"],
      viewGithub: t('viewGithub')
    },
    {
      name: t('webservName'),
      description: t('webservDesc'),
      github: "https://github.com/IlyanaMegy/Webserv",
      image: WebservImg,
      tags: ["C++", "HTTP", "Network"],
      viewGithub: t('viewGithub')
    },
    {
      name: t('gitserverName'),
      description: t('gitserverDesc'),
      github: "https://github.com/IlyanaMegy/Git_Server",
      image: GitserverImg,
      tags: ["Git", "C#", "Bash"],
      viewGithub: t('viewGithub')
    },
    {
      name: t('mockitupName'),
      description: t('mockitupDesc'),
      github: "https://github.com/IlyanaMegy/MockItUp",
      image: MockItUpImg,
      tags: ["Symfony", "PHP", "MySQL"],
      viewGithub: t('viewGithub')
    },
    {
      name: t('tankytankName'),
      description: t('tankytankDesc'),
      github: "https://github.com/IlyanaMegy/TankyTank",
      image: TankytanksImg,
      tags: ["Python", "Pygame", "Game"],
      viewGithub: t('viewGithub')
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsDistributed(latest > 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section 
      id="projets" 
      ref={containerRef}
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
          backgroundColor: 'rgba(231, 220, 202, 0.3)'
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-[#857893e8] mb-[100px] text-center uppercase">{t('projectsTitle')}</h2>
        <div className={`flex justify-center items-center min-h-[400px] ${isDistributed ? 'hidden' : 'block'}`}>
          <div className="relative">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                isDistributed={false}
                delay={0}
              />
            ))}
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-items-center ${isDistributed ? 'block' : 'hidden'}`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isDistributed={true}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
