export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin" />
        <p className="text-muted-foreground font-mono text-sm animate-pulse">
          Initializing environment...
        </p>
      </div>
    </div>
  );
}