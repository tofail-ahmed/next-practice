"use client";
import { Inter } from "next/font/google";
import "./globals.css";


import Footer from "./components/footer/Footer.jsx";
import { ThemeProvider, useThemeContext } from "./lib/provider/ThemeContext";
import ParticlesComponent from "./components/partilces";
import Navsbar from "./components/navbar/Navsbar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <RootContent>{children}</RootContent>
    </ThemeProvider>
  );
}

function RootContent({ children }) {
  return (
    <Html>
      <Body>
        <NavbarContainer />
        <ParticlesContainer />
        {children}
        <FooterContainer />
      </Body>
    </Html>
  );
}

function NavbarContainer() {
  const { dark } = useThemeContext();
  return (
    <div className={inter.className}>
     <div className="pt-4">
     <Navsbar />
     </div>
    </div>
  );
}

function ParticlesContainer() {
  return (
    <div className="-z-50">
      <ParticlesComponent id="particles" />
    </div>
  );
}

function FooterContainer() {
  const { dark } = useThemeContext();
  return (
    <div className={inter.className}>
      <Footer />
    </div>
  );
}

function Html({ children }) {
  return <html lang="en">{children}</html>;
}

function Body({ children }) {
  const { dark } = useThemeContext();
  return (
    <body
      className={`${
        dark ? "text-white bg-slate-900" : "text-white bg-black"
      }  min-h-screen`}
    >
      {children}
    </body>
  );
}