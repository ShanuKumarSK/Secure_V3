// 'use client';

// import { motion } from 'framer-motion';
// import React from 'react';

// type SecureRevealProps = {
//   text?: string;
//   delay?: number;
// };

// const SecureReveal = ({ text = 'SECURE', delay = 0 }: SecureRevealProps) => {
//   const letters = Array.from(text);

//   return (
//     <div className="flex justify-left items-center">
//       <div className="text-4xl md:text-5xl font-bold mb-4">
//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             className="inline-block"
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             transition={{
//               delay: delay + index * 0.2,
//               duration: 0.8,
//               ease: 'easeOut',
//             }}
//             style={{
//               display: 'inline-block',
//               transformStyle: 'preserve-3d',
//               perspective: 1000,
//             }}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecureReveal;


'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedLetters = ({ text = 'FEATURING', delay = 0 }: { text?: string; delay?: number }) => {
  const letters = text.split('');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1); // trigger re-render
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={animationKey} className="flex justify-left items-center gap-[16px]">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-white text-6xl font-bold"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{
            delay: delay + index * 0.15,
            duration: 0.6,
            ease: 'easeOut',
          }}
          style={{
            display: 'inline-block',
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedLetters;
