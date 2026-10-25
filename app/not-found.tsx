import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 mb-8">
        <Terminal className="w-12 h-12 text-primary" />
      </div>

      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-foreground mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
        Route Not Found
      </h2>

      <p className="text-muted-foreground max-w-md mb-8">
        The endpoint you are trying to reach does not exist in this system.
        It may have been moved or deleted.
      </p>

      <Link
        href="/"
        className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Return to Home
      </Link>
    </div>
  );
}