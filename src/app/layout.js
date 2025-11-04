import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Berkshire project management service l.l.c",
  description: "Product management and consulting services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:"smooth"}}>
      {/* global.css */}
      <body
      style={{ overflowX: 'hidden' }}     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
