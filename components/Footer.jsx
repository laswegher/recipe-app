import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div className="h-16*- Fcenter border-t border-black/30">
      <div className="Container h-full FCenter">
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          target="_blank"
          href="https://ufuktekin.com"
          className="text-sm tracking-widest font-medium"
        >
          ufuktekin.com
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
