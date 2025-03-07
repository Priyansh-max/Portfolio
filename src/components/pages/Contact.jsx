import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <Element name="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-center mb-16">Contact Me</h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-pastel-pink to-pastel-purple p-[1px] rounded-lg"
        >
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-8">
              <EnvelopeIcon className="w-16 h-16 text-pastel-purple" />
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-purple focus:ring-pastel-purple"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-purple focus:ring-pastel-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-purple focus:ring-pastel-purple"
                />
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="resume-button"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Contact; 