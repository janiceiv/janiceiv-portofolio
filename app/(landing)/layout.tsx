import type { Metadata } from "next";
import { DM_Sans,JetBrains_Mono, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  display : "swap",
  weight: ["400", "500", "600","700","800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display : "swap",
  weight: ["400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  display : "swap",
  weight: ["400", "500", "600","700"],
});

export const metadata: Metadata = {
  title: "Janice's Portofolio",
  description: "Janice's Portofolio is a showcase of my work and skills as a web developer. It includes projects, experience, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
