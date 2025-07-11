'use client';

import { motion, easeOut } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
  sentence: string;
  angle?: number;     
  distance?: number;    
  speed?: number;   
};

export default function FloatingLetterReveal({
  sentence,
  angle = 180,
  distance = 150,
  speed = 0.5     
}: Props) {
  const radians = (angle * Math.PI) / 180;

  const letterConfigs = useMemo(() => {
    return sentence.split('').map((_, i) => {
      const offsetX = Math.cos(radians) * distance;
      const offsetY = Math.sin(radians) * distance;
      return {
        initial: {
          x: offsetX,
          y: offsetY,
          opacity: 0,
        },
        animate: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            delay: i * 0.06,
            duration: speed,
            ease: easeOut,
          },
        },
      };
    });
  }, [sentence, angle, distance, speed]);

  return (
      <>
        {sentence.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={letterConfigs[i].initial}
            animate={letterConfigs[i].animate}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </>
  );
}




















