import React from "react";
import { motion } from "framer-motion";

const parcours = [
  { year: "2023", title: "Tronc commun 42", description: "Apprentissage intensif en programmation et projets web." },
  { year: "2022", title: "Bac Scientifique", description: "Spécialité Mathématiques et Informatique." },
];

const Timeline = () => {
  return (
    <section id="parcours" className="py-24 px-4 md:px-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-lavender mb-12 text-center">Parcours</h2>
      <div className="space-y-8">
        {parcours.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-beige/30 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-text">{item.year} - {item.title}</h3>
            <p className="text-muted mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
