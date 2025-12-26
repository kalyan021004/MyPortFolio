import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-xl text-gray-600 mb-8">
          I’m a full-stack web developer focused on building scalable,
          secure, and production-ready web applications with strong
          problem-solving fundamentals.
        </p>

        <div className="text-left space-y-4 text-lg text-gray-700">
          <p>🎓 <strong>Education:</strong> B.Tech (ECE), IIIT Sri City</p>
          <p>💻 <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, EJS, Bootstrap, Firebase</p>
          <p>🛠 <strong>What I Build:</strong> Full-stack apps, REST APIs, authentication systems</p>
          <p>🚀 <strong>Currently:</strong> Seeking internships & entry-level roles</p>
          <p>🤝 <strong>Soft Skills:</strong> Teamwork, communication, adaptability</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
