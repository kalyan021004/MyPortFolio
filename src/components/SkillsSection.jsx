import React from 'react';
import { Code, Smartphone, Zap, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with HTML, CSS, JavaScript, and modern frameworks like React and Vue.js."
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs with Node.js, Express, and various databases like MongoDB and MySQL."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect and functions flawlessly on all devices and screen sizes with mobile-first approach."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Optimizing websites for speed, SEO, and exceptional user experience across all platforms and browsers."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;