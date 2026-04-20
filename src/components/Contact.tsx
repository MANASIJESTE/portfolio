'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    // For now, just show a success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Get in Touch
        </h2>

        <div className="mb-12">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'd love to connect! Feel free to reach out for collaborations, research opportunities, or to discuss automation and AI projects.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://github.com/MANASIJESTE" 
              className="text-accent hover:text-white smooth-transition text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/manasijeste" 
              className="text-accent hover:text-white smooth-transition text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:manasi.jeste@gmail.com" 
              className="text-accent hover:text-white smooth-transition text-lg"
            >
              Email
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary text-white border border-gray-600 rounded-lg focus:border-accent focus:outline-none smooth-transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-primary text-white border border-gray-600 rounded-lg focus:border-accent focus:outline-none smooth-transition"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-primary text-white border border-gray-600 rounded-lg focus:border-accent focus:outline-none smooth-transition resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 smooth-transition font-semibold"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-400 text-center">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
