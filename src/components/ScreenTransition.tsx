import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScreenTransitionProps {
  children: ReactNode;
  transitionKey: string | number;
}

export function ScreenTransition({ children, transitionKey }: ScreenTransitionProps) {
  return (
    <motion.div
      key={transitionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
