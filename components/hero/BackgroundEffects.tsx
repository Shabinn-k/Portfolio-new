"use client";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-muted/50 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}