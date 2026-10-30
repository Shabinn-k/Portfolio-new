"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const links = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col p-6"
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="p-2 text-muted-foreground hover:text-primary">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center grow gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}