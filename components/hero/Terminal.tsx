"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-md rounded-lg overflow-hidden border border-border/50 bg-[#0a0a0a] shadow-lg absolute -bottom-10 -right-10 z-10 hidden lg:block"
    >
      <div className="flex items-center px-3 py-2 bg-[#111] border-b border-border/50">
        <span className="text-xs text-muted-foreground font-mono">zsh — go run main.go</span>
      </div>
      <div className="p-4 text-sm font-mono text-muted-foreground">
        <p className="text-primary">➜ ~ go run main.go</p>
        <p className="text-white mt-2">Data processed</p>
        <motion.span 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary mt-2"
        />
      </div>
    </motion.div>
  );
}