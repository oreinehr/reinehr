
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "./components/ui/lib/utils"
import type React from "react" // Added import for React
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"], // até 900
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(archivo.className, "bg-black text-white antialiased")}>{children}</body>
    </html>
  )
}

