import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(p => (
            <div key={p.id} className="rounded-xl shadow hover:-translate-y-2 transition">
              <div className="h-40 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-5xl">
                {p.emoji}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="bg-purple-100 px-3 py-1 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github />
                  </a>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <ExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
