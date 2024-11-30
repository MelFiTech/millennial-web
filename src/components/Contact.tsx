'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleKeyDown = (e: React.KeyboardEvent, nextId: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentInput = e.target as HTMLInputElement | HTMLTextAreaElement;
      const fieldName = currentInput.id as keyof typeof formData;
      
      setFormData(prev => ({
        ...prev,
        [fieldName]: currentInput.value
      }));

      const nextElement = document.getElementById(nextId);
      if (nextElement) {
        nextElement.focus();
      }
      if (step < 3) {
        setStep(step + 1);
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onKeyDown={(e) => handleKeyDown(e, 'email')}
                    className="mt-2 block w-full bg-transparent border-b border-gray-700 focus:border-white text-white px-0 py-2 outline-none transition-colors"
                    placeholder="Enter your name"
                    autoFocus
                    defaultValue={formData.name}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onKeyDown={(e) => handleKeyDown(e, 'message')}
                    className="mt-2 block w-full bg-transparent border-b border-gray-700 focus:border-white text-white px-0 py-2 outline-none transition-colors"
                    placeholder="Enter your email"
                    defaultValue={formData.email}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full bg-transparent border-b border-gray-700 focus:border-white text-white px-0 py-2 outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                    defaultValue={formData.message}
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full mt-8 border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}