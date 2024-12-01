"use client";
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
    children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition;