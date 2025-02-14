import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

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
      <body className="antialiased pt-14 example">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
