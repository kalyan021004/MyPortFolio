import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-purple-100 mb-12">
          Let's work together to bring your ideas to life!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3 text-lg">
            <Mail className="w-6 h-6" />
            <span>kalyan@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Phone className="w-6 h-6" />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Globe className="w-6 h-6" />
            <span>www.kalyan-dev.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;