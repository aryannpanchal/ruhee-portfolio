import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Ruhee Portfolio",
  description: "Official Website of Ruhee Awargaonkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
