import { motion } from 'motion/react';
import canadaWordmark from 'figma:asset/2c7bc543dd2a2003e1bba67aa3bf551b7dfcb638.png';

export function LaunchScreen() {
  return (
    <motion.div 
      className="h-full bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-[65%]"
      >
        <img 
          src={canadaWordmark} 
          alt="Canada" 
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
