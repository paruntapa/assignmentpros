import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment Help - Get Quality Help from UK PhD Experts",
  description: "Get professional assignment help from UK PhD experts. Quality assistance for all academic levels with plagiarism-free guarantee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
