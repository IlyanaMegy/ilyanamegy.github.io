import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bg/90 py-6 text-center text-muted mt-12 border-t border-beige/40">
      © {new Date().getFullYear()} Ilyana Megy — Développé avec React, Tailwind & ❤️
    </footer>
  );
};

export default Footer;
