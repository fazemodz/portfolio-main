import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from"./components/navbar";
export const metadata: Metadata = {
  title: "Alex's portfolio",
  description: "Alex's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        <Navbar />
        {children}
        <Footer/>
      </body>
      
        
    </html>
  );
}
