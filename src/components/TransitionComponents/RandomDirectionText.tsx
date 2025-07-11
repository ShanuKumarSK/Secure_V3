
'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
    sentence: string;
};

type LetterMotion = {
    x: number;
    y: number;
    duration: number;
    delay: number;
};

export default function RandomDirectionText({ sentence }: Props) {
    const letterAnimations = useMemo<LetterMotion[]>(() => {
        return sentence.split('').map((_, i) => {
            const angle = Math.random() * 360;
            const distance = 100 + Math.random() * 100;
            const duration = 0.3 + Math.random() * 0.2;
            const delay = i * 0.03;

            return {
                x: Math.cos((angle * Math.PI) / 180) * distance,
                y: Math.sin((angle * Math.PI) / 180) * distance,
                duration,
                delay,
            };
        });
    }, [sentence]);

    return (
        <>
            {sentence.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{
                        x: letterAnimations[i].x,
                        y: letterAnimations[i].y,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: letterAnimations[i].delay,
                            duration: letterAnimations[i].duration,
                            ease: 'easeOut',
                        },
                    }}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </>

    );
}
