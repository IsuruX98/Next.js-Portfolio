import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isuru Madusanka",
  description: "Portfolio next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavDemo />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
