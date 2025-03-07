import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import profile from '../assets/profile.jpeg';
import devConnect from '../assets/devConnect.png';
import pmis from '../assets/pmis.png';
import findMyTeam from '../assets/findmyteam.png';
import niu from '../assets/niu.jpg';
import sixD from '../assets/sixD.png';
import iitkgp from '../assets/iitkgp.png';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  const assets = useMemo(() => [
    profile,
    devConnect,
    pmis,
    findMyTeam,
    niu,
    sixD,
    iitkgp
  ], []);

  const fonts = useMemo(() => [
    { name: 'CustomFont', url: '/fonts/Moggly.woff2' },
    { name: 'Comfortaa', url: '/fonts/Comfortaa-Light.woff2' }
  ], []);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = assets.length + fonts.length;

    const loadFont = async (font) => {
      try {
        const fontFace = new FontFace(font.name, `url(${font.url})`);
        const loadedFont = await fontFace.load();
        document.fonts.add(loadedFont);
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalAssets) * 100));
      } catch (error) {
        console.error(`Error loading font ${font.name}:`, error);
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalAssets) * 100));
      }
    };

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
          loadedCount++;
          setProgress(Math.floor((loadedCount / totalAssets) * 100));
          resolve();
        };
      });
    };

    const loadAllAssets = async () => {
      // Load fonts first
      await Promise.all(fonts.map(font => loadFont(font)));
      // Then load images
      await Promise.all(assets.map(src => loadImage(src)));
      
      // Add a small delay for smooth transition
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    };

    loadAllAssets();
  }, [assets, fonts, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-4 h-4 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full mx-1"
            animate={{
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="w-4 h-4 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full mx-1"
            animate={{
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-4 h-4 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full mx-1"
            animate={{
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
        </motion.div>
        <motion.div
          className="text-3xl font-custom text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
        </motion.div>
        <motion.div
          className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pastel-pink to-pastel-purple"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  );
};

export default Loader; 