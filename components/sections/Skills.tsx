"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skill";
import SectionHeading from "@/components/ui/SectionHeading";
import { Layout, Server, Database } from "lucide-react";

const icons = [Layout, Server, Database];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/10 border-y border-border/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="The tools and technologies I use to build scalable systems."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}