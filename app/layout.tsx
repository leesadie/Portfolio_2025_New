import type { Metadata } from "next";
import "./globals.css";

import { font_reg } from "./fonts";

import Navbar from "./components/nav/Navbar";

export const metadata: Metadata = {
  title: "Sadie Lee",
  description: "Sadie Lee Portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font_reg.className}
      >
        <div className="hidden md:block">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
