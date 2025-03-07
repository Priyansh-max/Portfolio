import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Resume = () => {
  return (
    <Element name="resume" className="px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-center mb-16">Resume</h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-pastel-pink to-pastel-purple p-[1px] rounded-lg"
        >
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-8">
              <DocumentTextIcon className="w-16 h-16 text-pastel-purple" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-gray-600">Your education details here</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Skills</h3>
                <p className="text-gray-600">Your skills details here</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Certifications</h3>
                <p className="text-gray-600">Your certifications here</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="resume-button"
              >
                Download Full Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Resume; 