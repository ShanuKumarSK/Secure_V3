'use client';

import { motion } from 'framer-motion';
import React from 'react';

type WavyTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function WavyText({ text, className = '', delay = 0 }: WavyTextProps) {
  const letters = Array.from(text);

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: letters.length * 0.05,
            delay: delay + index * 0.05,
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}
