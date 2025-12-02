import React from "react";
import { motion } from "framer-motion";
import WildText from "../assets/pattern_jobs.png";

const parcours = [
  { 
    year: "Mai 2023 - Aujourd'hui", 
    title: "42 Paris", 
    description: "Formation intensive en programmation par projets. Acquisition de compétences solides en algorithmie, développement web et soft skills.",
    type: "school"
  },
  { 
    year: "2019 - 2022", 
    title: "Ynov Bordeaux", 
    description: "Découverte de l'informatique dans sa globalité : administration réseau, sécurité, programmation orientée objet, développement web, et systèmes embarqués.",
    type: "school"
  },
  { 
    year: "2019", 
    title: "Baccalauréat", 
    description: <>Baccalauréat Scientifique avec spécialité <strong>ISN</strong>.(Informatique et Sciences du Numérique)<br />Découverte des bases de la programmation, algorithmique et architecture des ordinateurs.</>,
    type: "achievement"
  },
];

const Timeline = () => {
  return (
    <section id="parcours" className="py-24 px-10 bg-[rgb(227_208_179_/_16%)] md:px-18 max-w-5xl mt-[10%] pb-[5%] mb-[10%] mx-auto relative">
      <h2 className="text-4xl font-bold text-[rgb(168_157_179)] mb-24 text-center">Parcours</h2>
      
      <div 
        className="absolute top-100 -right-5 hidden lg:block"
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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lavender/30"></div>
        <div className="space-y-12">
          {parcours.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-[rgb(237_230_219_/_80%)] p-6 rounded-lg shadow-lg border border-lavender/20">
                  <span className="text-sm font-bold text-lavender uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-text mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lavender border-4 border-bg rounded-full z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
