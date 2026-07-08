/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 bg-[#001E33] z-[9999] flex flex-col items-center justify-center text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo and Spinning Ring Container */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-slate-700 border-t-[#00AEEF]"
              />
              
              {/* Custom Logo Image pulse */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0.7 }}
                animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-20 h-20 flex items-center justify-center"
              >
                <img 
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-5.png" 
                  alt="Lizando Lda Logo" 
                  className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_12px_rgba(0,174,239,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-xl font-display font-bold tracking-widest text-white uppercase">
                LIZANDO Lda.
              </h2>
              <p className="text-[9px] text-gray-400 font-mono tracking-widest mt-1 uppercase">
                Comércio, Serviços e Logística
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
