"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "h-1 w-20 bg-primary rounded-full mt-2",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}