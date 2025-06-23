import React from 'react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text section */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hello, I'm{' '}
              <span className="text-yellow-400 drop-shadow-lg">Kalyan</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Passionate Web Developer
            </p>
            <p className="text-lg text-purple-100 leading-relaxed">
              I craft beautiful, responsive websites and web applications that deliver 
              exceptional user experiences. Let's bring your ideas to life with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Animated Profile Image */}
          <div className="flex justify-center">
            <div className="relative group w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl ring-4 ring-yellow-300/30 animate-fade-in transform transition duration-500 hover:scale-105">
              <img
                src="/kim.jpg" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Floating animated dots */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-4 bg-white/30 rounded-full animate-ping ${
                    i === 0 ? 'top-6 left-6' :
                    i === 1 ? 'bottom-10 right-6' :
                    'bottom-6 left-12'
                  }`}
                  style={{
                    animationDelay: `${i}s`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
