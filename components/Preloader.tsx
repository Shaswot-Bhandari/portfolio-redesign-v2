"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay to let assets load and show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-12 h-12 border-t-2 border-r-2 border-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 font-mono text-xs uppercase tracking-widest text-muted"
            >
              Initializing Latent Space...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
