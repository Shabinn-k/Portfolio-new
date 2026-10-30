"use client";

import { projects } from "@/data/project";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-muted/5 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Engineering" 
          subtitle="Deep dives into backend architectures, concurrency models, and full-stack systems."
          align="center"
        />
        
        <div className="grid grid-cols-1 gap-8 mt-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}