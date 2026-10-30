"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background."
          align="center"
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(132,204,22,0.3)]">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"} w-full`}>
                    <div className="p-6 rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}