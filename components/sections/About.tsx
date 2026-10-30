"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a <strong className="text-foreground">Full-Stack Developer</strong> passionate about building robust, high-performance systems. My focus is primarily on <strong className="text-foreground">Go (Golang)</strong> for scalable backends and <strong className="text-foreground">React/Next.js</strong> for creating beautiful, interactive user interfaces.
          </p>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            Whether it's designing normalized database schemas with PostgreSQL, integrating Redis for high-speed caching, or crafting smooth UI animations with Framer Motion, I love solving complex engineering challenges. I believe in writing clean, maintainable code and building systems that are resilient by design.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Clean Architecture</p>
                <p className="text-xs text-muted-foreground mt-1">SOLID principles & Design Patterns</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">High Performance</p>
                <p className="text-xs text-muted-foreground mt-1">Concurrency & System Scaling</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative rounded-2xl border border-border/50 bg-[#0d1117] shadow-2xl shadow-primary/5 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-border/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">developer.yaml</span>
            </div>

            <div className="p-6 font-mono text-sm leading-loose">
              <div className="text-blue-400">
                <span className="text-pink-400">name:</span> "Shabin"
              </div>
              <div className="text-blue-400">
                <span className="text-pink-400">role:</span> "Full-Stack Developer"
              </div>
              <div className="text-blue-400">
                <span className="text-pink-400">location:</span> "India"
              </div>
              <div className="text-blue-400 mt-2">
                <span className="text-pink-400">status:</span> <span className="text-green-400">"Available for work"</span>
              </div>
              
              <div className="text-blue-400 mt-4">
                <span className="text-pink-400">core_stack:</span>
              </div>
              <ul className="pl-4 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Go (Golang)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> React & Next.js</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> PostgreSQL & Redis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary" /> Docker & AWS</li>
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}