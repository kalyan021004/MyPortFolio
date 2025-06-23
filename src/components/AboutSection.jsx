import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          I'm a passionate web developer with a strong foundation in data structures and algorithms.
          I specialize in building modern, responsive websites and web applications that combine
          performance with user-friendly design.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          🎓 <strong>Education:</strong> B.Tech in Electronics and Communication Engineering (ECE)
          at <span className="font-semibold">Indian Institute of Information Technology, Sri City</span>.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          💻 <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, EJS, Bootstrap, Firebase, Git.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          🧠 <strong>DSA Practice:</strong> Solving problems  on&nbsp;
          <a
            href="https://leetcode.com/kalyan021004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LeetCode
          </a>, focusing on arrays, dynamic programming, graphs, and more.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          🚀 <strong>Currently:</strong> Open to internship opportunities and freelance projects. I'm continuously improving my full-stack development skills and building real-world projects.
        </p>

        <p className="text-lg text-gray-700">
          🤝 <strong>Soft Skills:</strong> Teamwork, Problem-Solving, Time Management, Communication, and Adaptability.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
