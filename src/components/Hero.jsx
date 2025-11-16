import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="accueil" className="h-screen flex flex-col justify-center items-center text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-bold text-lavender mb-4"
    >
      Salut, je suis Ilyana
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-beige text-xl max-w-xl"
    >
      Développeuse Web & Systèmes — Je crée des applications modernes, minimalistes et chill.
    </motion.p>
  </section>
);

export default Hero;
