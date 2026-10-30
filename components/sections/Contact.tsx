"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (status === "loading" || status === "success") return;
    
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Looking for a developer? Let's build something scalable."
          align="center"
        />
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-12 p-8 rounded-2xl bg-background border border-border/50 shadow-2xl shadow-primary/5 space-y-6 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <input 
                required 
                type="text" 
                name="name"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-muted/20 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <input 
                required 
                type="email" 
                name="email"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-muted/20 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea 
              required 
              rows={4} 
              name="message"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-muted/20 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none disabled:opacity-50" 
              placeholder="Tell me about your project..." 
            />
          </div>

          <div className="pt-2 flex justify-center">
            <motion.button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              layout
              className={`relative flex items-center justify-center gap-2 px-8 py-3 rounded-md font-semibold transition-all duration-300 overflow-hidden ${
                status === "success" 
                  ? "bg-green-500 text-white w-32" 
                  : status === "error"
                  ? "bg-red-500 text-white w-full"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.div>
                )}

                {status === "loading" && (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    key="error"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" /> Failed to send. Try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}