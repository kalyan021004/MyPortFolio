import React from 'react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I'm <span className="text-yellow-400">Kalyan</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100">
            Full-Stack Web Developer | Problem Solver
          </p>

          <p className="text-lg text-purple-100 leading-relaxed">
            I build scalable, secure, and user-friendly web applications using
            modern technologies. Passionate about clean code and real-world impact.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Get In Touch
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-8 mt-6 text-purple-100">
            <div>
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="text-sm">Projects</p>
            </div>
           
            <div>
              <p className="text-2xl font-bold text-white">Full-Stack</p>
              <p className="text-sm">Developer</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default HeroSection;
