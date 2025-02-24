import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "./common/modalContext";
import Modal from "./components/modal";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "ویدیو سبز",
  description: "مسیر تحصیلی خودت رو با ویدیو سبز تضمین کن",
};

export const viewport = {
  themeColor: "#8ff1ca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      className="example2 overflow-x-hidden"
      suppressHydrationWarning
    >
      <body className="antialiased pt-16 example2">
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <ModalProvider>
            <Navbar />
            <Modal />
            {children}
            <Toaster position="bottom-right" />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
