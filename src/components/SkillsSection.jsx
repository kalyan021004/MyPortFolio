import React from 'react';
import { Code, ShieldCheck, Server, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Palette className="w-10 h-10 text-purple-600" />,
      title: "Frontend Development",
      desc: "Building interactive user interfaces using React, HTML, CSS, JavaScript, and modern UI libraries."
    },
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Backend Development",
      desc: "Developing scalable backend systems using Node.js, Express, and MongoDB."
    },
    {
      icon: <Server className="w-10 h-10 text-green-600" />,
      title: "API Development",
      desc: "Designing and building RESTful APIs, handling CRUD operations, validations, and data flow."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-600" />,
      title: "Authentication & Security",
      desc: "Implementing secure login systems using JWT, protected routes, and role-based access control."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
