import React from "react";
import { motion } from "framer-motion";
import Me from "../assets/me.svg";
import BgDetails from "../assets/bg_details.svg";

const Hero = () => (
  <section
    id="accueil"
    className="h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-30 md:pt-64 gap-6 hero-bg"
  >
    <img
      src={BgDetails}
      alt="Décoration"
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    />
    <div
      className="relative mb-[10px] md:mb-[100px] p-[50px] md:p-[150px] pt-[40px] md:pt-[80px] pb-[40px] min-h-[700px] md:pb-[70px] z-10  md:w-full max-w-[2000px] bg-[rgb(113_88_107_/_40%)] mx-auto"
    >
      <div className="w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-lavender mb-6 text-center md:text-center"
        >
          Salut, je suis Ilyana !
        </motion.h1>
      </div>
      
      <div className="w-full overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-beige text-lg md:text-xl block text-center md:text-center"
        >
          Etudiante Développeuse Web & Systèmes,<br />
          <span className="whitespace-nowrap">
            passionnée de webdesign et de solutions logicielles automatisées.
          </span>
        </motion.p>
      </div>
      
      <div className="w-full overflow-hidden">
        <img
          src={Me}
          alt="Illustration d'Ilyana"
          className="w-60 h-60 md:w-80 md:h-80 mt-12 mx-auto"
        />
      </div>
    </div>
  </section>
);

export default Hero;
