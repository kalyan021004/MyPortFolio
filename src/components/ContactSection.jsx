import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-purple-100 mb-8">
          Available for internships, freelance work & collaborations.
        </p>

        <p className="flex justify-center gap-2 mb-6">
          <Mail /> kalyan021004@gmail.com
        </p>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/kalyan021004"><Github /></a>
          <a href="https://linkedin.com/in/kalyan021004"><Linkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
