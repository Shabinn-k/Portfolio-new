"use client";

import TextReveal from "@/components/animations/TextReveal";
import BackgroundEffects from "@/components/hero/BackgroundEffects";
import { ArrowRight, Mail, Database, Layout, Server } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { icon: Server, label: "Go" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Layout, label: "React / Next.js" },
  { icon: Layout, label: "Tailwind CSS" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <BackgroundEffects />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Roles
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <TextReveal text="Hi, I'm Shabin Muhammed K." />
            <br />
            <span className="text-primary">
              <TextReveal text="I build scalable apps." />
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            I'm a Full-Stack Developer specializing in building robust backend systems with Go, 
            and beautiful, responsive frontends.
          </motion.p>

          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
              >
                <tech.icon className="w-4 h-4 text-primary" />
                {tech.label}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <Link 
              href="#projects" 
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#contact" 
              className="flex items-center gap-2 bg-transparent border border-border text-foreground px-6 py-3 rounded-md font-semibold hover:bg-muted transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto lg:ml-auto flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary/30 overflow-hidden bg-muted p-2">
            <div className="w-full h-full rounded-full overflow-hidden relative">
               
              <Image
                src="/coat.png" 
                alt="Shabin"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}