import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-16 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-lavender mb-12">Contact</h2>
      <p className="text-text mb-6">Envie de discuter ou de collaborer ?</p>
      <a
        href="mailto:ilyana@example.com"
        className="bg-lavender text-bg px-6 py-3 rounded-lg font-semibold hover:bg-beige hover:text-text transition-colors"
      >
        Envoyer un mail
      </a>
    </section>
  );
};

export default Contact;
