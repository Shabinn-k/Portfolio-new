"use client";

import { motion } from "framer-motion";

const codeLines = [
  { text: "package main", color: "text-pink-400" },
  { text: "", color: "" },
  { text: 'import "fmt"', color: "text-pink-400" },
  { text: "", color: "" },
  { text: "func processData(ch chan string) {", color: "text-blue-400" },
  { text: '  ch <- "Data processed"', color: "text-green-400" },
  { text: "}", color: "text-blue-400" },
  { text: "", color: "" },
  { text: "func main() {", color: "text-blue-400" },
  { text: "  ch := make(chan string)", color: "text-yellow-300" },
  { text: "  go processData(ch)", color: "text-purple-400" },
  { text: "  fmt.Println(<-ch)", color: "text-yellow-300" },
  { text: "}", color: "text-blue-400" },
];

export default function CodeEditor() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-2xl shadow-primary/10"
    >
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-muted-foreground font-mono">main.go</div>
      </div>
      
      <div className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 text-muted-foreground/50 select-none">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}