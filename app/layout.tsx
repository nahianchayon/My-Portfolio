import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nahian1.vercel.app"),
  title: "Nahian Rahman Chayon | Computer Engineer & AI Developer",
  description:
    "Personal portfolio of Nahian Rahman Chayon, a Computer Engineering student exploring AI, deep learning, full-stack development, and intelligent systems.",
  openGraph: {
    title: "Nahian Rahman Chayon | AI & Full-Stack Developer",
    description:
      "Computer Engineering student building AI systems, software products, and practical engineering experiences.",
    url: "https://nahian1.vercel.app",
    siteName: "Nahian Rahman Chayon Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#f7f7f6] text-[#111111] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
