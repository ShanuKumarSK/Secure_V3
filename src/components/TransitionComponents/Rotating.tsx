'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type RotatingProps = {
  children: ReactNode;
  angle?: number;          // total rotation angle
  speed?: number;          // duration in seconds
  repeat?: number;         // how many times to repeat (-1 or Infinity for infinite)
};

export default function Rotating({
  children,
  angle = 360,
  speed = 1.5,
  repeat = Infinity,
}: RotatingProps) {
  return (
    <motion.div
      animate={{ rotate: [0, angle] }}
      transition={{
        duration: speed,
        ease: 'easeInOut',
        repeat: repeat,
        repeatType: 'loop',
      }}
    >
      {children}
    </motion.div>
  );
}
