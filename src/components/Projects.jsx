import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Libft", description: "Projet C : création de fonctions de librairie.", github: "https://github.com/IlyanaMegy/42" },
  { name: "Ft_printf", description: "Projet C : réimplémentation de printf.", github: "https://github.com/IlyanaMegy/42" },
  { name: "Portfolio", description: "Mon portfolio React + Tailwind.", github: "https://github.com/IlyanaMegy/portfolio" },
];

const Projects = () => {
  return (
    <section id="projets" className="py-24 px-4 md:px-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-lavender mb-12 text-center">Projets</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige/20 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-text mb-2">{project.name}</h3>
            <p className="text-muted text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
