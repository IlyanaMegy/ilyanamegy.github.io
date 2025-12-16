import React from "react";
import PatternAbout from "../assets/pattern_about.png";

const About = () => {
  return (
    <section 
      id="à propos" 
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
        <h2 className="text-4xl font-bold text-[#857893e8] mb-[50px] text-center uppercase">À propos de moi</h2>
        <p className="text-[rgb(83_49_25_/_88%)] text-[15px] leading-[2] text-center pb-0 font-nav uppercase font-bold">
        Actuellement étudiante à 42 Paris, mon intérêt se porte tout particulièrement sur <br />la création d'interfaces web avec un focus sur l'expérience utilisateur et l'esthétique de la page<br />
        mais aussi sur l'administration et la gestion de réseaux, ainsi que la création de logiciels automatisés.<br />
        Chacun de ces domaines me permet d'explorer différentes facettes du développement informatique.
      </p>
      </div>
    </section>
  );
};

export default About;
