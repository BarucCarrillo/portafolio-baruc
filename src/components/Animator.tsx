import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

export type AnimationType = 'fadeIn' | 'slideUp' | 'slideRight' | 'scaleUp' | 'bounce';

interface AnimatorProps {
    children: ReactNode;
    animation?: AnimationType;
    duration?: number;
    delay?: number;
    className?: string;
}

const animations: Record<AnimationType, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    bounce: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', bounce: 0.5, duration: 0.8 }
        },
    }
};

export const Animator = ({
    children,
    animation = 'fadeIn', 
    duration = 0.5,
    delay = 0,
    className = ''
}: AnimatorProps) => {

    return (
        <motion.div
            className={className}
            variants={animations[animation]}
            initial="hidden"
            animate="visible"
            transition={{
                duration: duration,
                delay: delay,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.div>
    );
};