"use client";
import { X } from "lucide-react";
import Nav from "./Nav";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  mobileNavOpen,
  setMobileNavOpen,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/dashboard")) {
      console.log("Dashboard route changed:", pathname);
      setMobileNavOpen(false);
    }

    return () => {
      // Cleanup function
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="flex h-full flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Mobile Nav Header */}
            <div className="flex items-center justify-between border-b border-accent-2/20 p-4 h-18 lg:h-14">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold text-accent-1">Menu</p>
              </div>
              <button
                onClick={() => setMobileNavOpen(false)}
                className="p-2 text-accent-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-4">
              <Nav />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileNav;
