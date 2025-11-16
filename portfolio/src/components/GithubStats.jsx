import React from "react";

const GithubStats = () => {
  return (
    <section id="stats" className="py-24 px-4 md:px-16 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-lavender mb-12">Mes stats GitHub</h2>
      <div className="space-y-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=IlyanaMegy&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default GithubStats;
