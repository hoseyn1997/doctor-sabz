import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "./common/modalContext";
import Modal from "./components/modal";
import { Toaster } from "react-hot-toast";
import { headers } from "next/headers";
import { UserProvider } from "./common/userContext";
import { get_xUser } from "@/lib/x_user";
import { DrawerProvider } from "./common/drawerContext";
import Drawer from "./components/drawer";

export const metadata: Metadata = {
  title: "ویدیو سبز",
  description: "مسیر تحصیلی خودت رو با ویدیو سبز تضمین کن",
};

export const viewport = {
  themeColor: "#8ff1ca",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const x_user = await get_xUser(headers);

  return (
    <html
      lang="fa"
      className="example2 overflow-x-hidden"
      suppressHydrationWarning
    >
      <body className="antialiased pt-16 example2">
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <ModalProvider>
            <DrawerProvider>
              <UserProvider x_user={x_user}>
                <Navbar />
                <Modal />
                <Drawer />
                {children}
                <Toaster position="bottom-right" />
              </UserProvider>
            </DrawerProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
