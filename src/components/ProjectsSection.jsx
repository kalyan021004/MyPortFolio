import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectsSection = () => {
  const openProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openProject(project.link)}
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">{project.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project.github);
                      }}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;