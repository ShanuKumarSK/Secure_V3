'use client';

import { motion } from 'framer-motion';
import { ReactNode, isValidElement } from 'react';

type Props = {
    children: ReactNode | ReactNode[];
    stagger?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    duration?: number;
    className?: string;
};

const directionMap = {
    left: { x: -75, y: 0 },
    right: { x: 75, y: 0 },
    top: { x: 0, y: -75 },
    bottom: { x: 0, y: 75 },
};

export default function FadeIn({
    children,
    stagger = 0.15,
    direction = 'left',
    duration = 0.8,
    className = '',
}: Props) {
    const initialOffset = directionMap[direction] || { x: 0, y: 0 };

    //   const isArray = Array.isArray(children);

    //   if (isArray) {
    //     return (
    //       <motion.div
    //         initial="hidden"
    //         animate="visible"
    //         variants={{
    //           hidden: {},
    //           visible: {
    //             transition: { staggerChildren: stagger },
    //           },
    //         }}
    //         className={className}
    //       >
    //         {(children as ReactNode[]).map((child, i) =>
    //           isValidElement(child) ? (
    //             <motion.div
    //               key={i}
    //               initial={{ opacity: 0, ...initialOffset }}
    //               animate={{ opacity: 1, x: 0, y: 0 }}
    //               transition={{ duration, ease: 'easeOut' }}
    //             >
    //               {child}
    //             </motion.div>
    //           ) : null
    //         )}
    //       </motion.div>
    //     );
    //   }

    // Single node fallback
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...initialOffset }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

