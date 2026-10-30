"use client";

import { motion } from "framer-motion";
import { Database, Server, Terminal, Box, Network } from "lucide-react";

const techs = [
  { icon: Server, label: "Go" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Network, label: "gRPC" },
  { icon: Box, label: "Docker" },
  { icon: Terminal, label: "Redis" },
];

export default function FloatingTechStack() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
        >
          <tech.icon className="w-4 h-4 text-primary" />
          {tech.label}
        </motion.div>
      ))}
    </div>
  );
}