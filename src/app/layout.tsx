import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "ویدیو سبز",
  description: "مسیر تحصیلی خودت رو با ویدیو سبز تضمین کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="example" suppressHydrationWarning>
      <body className="antialiased pt-16 example">
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
