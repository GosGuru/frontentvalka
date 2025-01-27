
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import React from "react";
import Footer from "./components/FooterMovil"; // Importa el Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased layout-container`}
    >
      <Header />
      <main className="content-container">{children}</main>
      <div className="block sm:hidden footer-container">
        <Footer />
      </div>
    </body>
  </html>
);

