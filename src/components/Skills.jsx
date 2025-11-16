import React from "react";
import { motion } from "framer-motion";

const hardSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL"];
const softSkills = ["Curiosité", "Autonomie", "Travail en équipe", "Résolution de problèmes"];

const Skills = () => {
  return (
    <section id="compétences" className="py-24 px-4 md:px-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-lavender mb-12 text-center">Compétences</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-text mb-6">Hard Skills</h3>
          <div className="space-y-4">
            {hardSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-beige/20 p-3 rounded-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-text mb-6">Soft Skills</h3>
          <div className="space-y-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-lavender/20 p-3 rounded-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
