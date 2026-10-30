import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shabin | Full-Stack Developer",
  description: "Building scalable backend systems and beautiful frontends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
     
      <body className="min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}