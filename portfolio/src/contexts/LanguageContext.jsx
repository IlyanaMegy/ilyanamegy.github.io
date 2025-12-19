import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const translations = {
    fr: {
		// Navbar
		accueil: 'accueil',
		apropos: 'à propos',
		parcours: 'parcours',
		competences: 'compétences',
		projets: 'projets',
		contact: 'contact',

		telephone: 'Téléphone',
		email: 'Email',
		github: 'GitHub',

		cvAlt: 'Illustration d\'Ilyana',
		downloadAlt: 'Télécharger CV',
		cvFileName: 'Ilyana_MEGY_CV_fr.pdf',

		// Accueil
		heroTitle: 'Salut, je suis Ilyana !',
		heroSubtitle: 'Etudiante Développeuse Web & Systèmes,',
		heroDescription: 'passionnée de webdesign et de solutions logicielles automatisées.',
		heroAlt: 'Illustration d\'Ilyana',
		decorationAlt: 'Décoration',

		// A Propos
		aboutTitle: 'À propos de moi',
		aboutText: 'Actuellement étudiante à 42 Paris, mon intérêt se porte tout particulièrement sur la création d\'interfaces web avec un focus sur l\'expérience utilisateur et l\'esthétique de la page mais aussi sur l\'administration et la gestion de réseaux, ainsi que la création de logiciels automatisés. Chacun de ces domaines me permet d\'explorer différentes facettes du développement informatique.',
		
		// Parcours
		timelineTitle: 'Parcours',
		timeline2023: '2023 - Aujourd\'hui',
		timeline2022: '2019 - 2022',
		timeline2019: '2019',
		timeline42: <><a href="https://42.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b38e82e3] transition-colors duration-200">@42Paris Campus</a></>,
		timeline42Subtitle: '- Formation en Informatique -',
		timeline42Desc: <>Formation intensive en programmation par projets. <br />Acquisition de compétences avancées en algorithmie<br />et travail autonome.</>,
		timelineYnov: <><a href="https://www.ynov.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b38e82e3] transition-colors duration-200">Ynov Bordeaux Campus</a></>,
		timelineYnovSubtitle: '- Bachelor Informatique -',
		timelineYnovDesc: <>Découverte de l'informatique dans sa globalité : <br />administration réseau, sécurité, programmation orientée objet,<br />développement web, et systèmes embarqués.</>,
		timelineBac: 'Lycée Vaclav Hàvel',
		timelineBacSubtitle: 'Baccalauréat Scientifique',
		timelineBacDesc: <>Baccalauréat Scientifique avec spécialité <strong>ISN</strong>.<br />(Informatique et Sciences du Numérique)<br />Découverte des bases de la programmation, algorithmique <br />et architecture des ordinateurs.</>,
    
		// Compétences
		skillsTitle: 'Compétences',
		softSkills: [
			'Autonomie',
			'Curiosité', 
			'Travail en équipe',
			'Logique',
			'Rigueur',
			'Communication',
			'Adaptabilité',
			'Créativité'
		],

		// Projets
		projectsTitle: 'Projets',
		soLongName: 'So_Long',
		soLongDesc: 'Jeu 2D développé en C utilisant la librairie graphique minilibx.',
		bookclubName: 'BookClub',
		bookclubDesc: 'Application de gestion de bibliothèque avec catalogue de livres, profils utilisateurs et suivi d\'état de lecture personnel.',
		webservName: 'Webserv',
		webservDesc: 'Serveur HTTP personnalisé compatible avec les standards du web.',
		gitserverName: 'Git Server',
		gitserverDesc: 'Guide d\'installation complète d\'un serveur Git sur Raspberry Pi avec tutoriel détaillé par étapes et configuration.',
		mockitupName: 'MockItUp',
		mockitupDesc: 'Plateforme sociale de création et partage de posts avec système de publication et feed personnalisé.',
		tankytankName: 'TankyTank',
		tankytankDesc: 'Jeu 2D développé en Python avec la librairie Pygame.',
		viewGithub: 'Voir sur GitHub',
	},
    en: {
		// Navbar
		accueil: 'hero',
		apropos: 'about',
		parcours: 'formation',
		competences: 'skills',
		projets: 'projects',
		contact: 'contact',

		telephone: 'Phone',
		email: 'Email',
		github: 'GitHub',

		cvAlt: 'Ilyana illustration',
		downloadAlt: 'Download CV',
		cvFileName: 'Ilyana_MEGY_CV_en.pdf',

		// Hero
		heroTitle: 'Hi, I\'m Ilyana!',
		heroSubtitle: 'Web & Systems Developer Student,',
		heroDescription: 'passionate about webdesign and automated software solutions.',
		heroAlt: 'Ilyana illustration',
		decorationAlt: 'Decoration',

		// About
		aboutTitle: 'About Me',
		aboutText: 'Currently student at 42 Paris campus, my interest focuses particularly on creating web interfaces with emphasis on user experience and page aesthetics, but also on network administration and management, as well as creating automated software.<br/>Each of these areas allows me to explore different facets of software development.',

		// Timeline
		timelineTitle: 'Formation',
		timeline2023: '2023 - Today',
		timeline2022: '2019 - 2022',
		timeline2019: '2019',
		timeline42: <><a href="https://42.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b38e82e3] transition-colors duration-200">@42Paris Campus</a></>,
		timeline42Subtitle: '- Computer Science Training -',
		timeline42Desc: <>Intensive programming training through projects.<br />Acquisition of advanced skills in algorithms<br />and autonomous work.</>,
		timelineYnov: <><a href="https://www.ynov.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b38e82e3] transition-colors duration-200">Ynov Bordeaux Campus</a></>,
		timelineYnovSubtitle: '- IT Bachelor\'s Degree -',
		timelineYnovDesc: <>Discovery of computing in its entirety: network administration, security, object-oriented programming,<br />web development, and embedded systems.</>,
		timelineBac: 'Vaclav Hàvel High School',
		timelineBacSubtitle: 'Scientific Baccalaureate',
		timelineBacDesc: <>Scientific Baccalaureate with <strong>ISN</strong> specialty.<br />(Computer Science and Digital)<br />Discovery of programming basics,<br />algorithms and computer architecture.</>,

		// Skills
		skillsTitle: 'Skills',
		softSkills: [
			'Autonomy',
			'Curiosity', 
			'Teamwork',
			'Logic',
			'Rigor',
			'Communication',
			'Adaptability',
			'Creativity'
		],

		// Projects
		projectsTitle: 'Projects',
		soLongName: 'So_Long',
		soLongDesc: '2D game developed in C using the minilibx graphics library.',
		bookclubName: 'BookClub',
		bookclubDesc: 'Library management application with book catalog, user profiles and personal reading status tracking.',
		webservName: 'Webserv',
		webservDesc: 'Custom HTTP server compatible with web standards.',
		gitserverName: 'Git Server',
		gitserverDesc: 'Complete Git server installation guide on Raspberry Pi with detailed step-by-step tutorial and configuration.',
		mockitupName: 'MockItUp',
		mockitupDesc: 'Social platform for creating and sharing posts with publishing system and personalized feed.',
		tankytankName: 'TankyTank',
		tankytankDesc: '2D game developed in Python with the Pygame library.',
		viewGithub: 'View on GitHub',	
    },
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
