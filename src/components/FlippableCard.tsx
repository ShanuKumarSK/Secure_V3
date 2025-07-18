// components/FlippableCard.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type FlippableCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export default function FlippableCard({ front, back }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={clsx(
          'absolute w-full h-full transition-transform duration-700 transform-style preserve-3d rounded-xl',
          isFlipped ? 'rotate-y-180' : ''
        )}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  );
}
