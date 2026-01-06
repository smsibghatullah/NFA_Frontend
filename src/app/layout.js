import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css"; // Add Bootstrap CSS
import "typeface-livvic";
import "font-awesome/css/font-awesome.min.css";
import "../../public/assets/css/styles.min.css"; // Custom styles (ensure the path is correct)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Livvic font styles
const livvicFont = {
  variable: "--font-livvic",
  className: "livvic-font",
};

export const metadata = {
  title: "National Forensic Agency - NFA",
  description:
    "At the National Forensic Agency, we believe in the transformative power of forensic science to shape a safer, more just world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./nfa-icon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${livvicFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
