import type { Metadata } from "next";
import "./globals.css";
import Navbar2 from "./customComponents/Navbar2";

export const metadata: Metadata = {
  title: "دکتر سبز",
  description: "مسیر تحصیلی خودت رو با دکتر سبز تضمین کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="example">
      <body className="antialiased bg-gray-50 pt-16 example">
        <Navbar2 />
        {children}
      </body>
    </html>
  );
}
