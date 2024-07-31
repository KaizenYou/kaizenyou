import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Commerce & Management Skills Online | KaizenYou",
  description: "KaizenYou is an online training and learning platform created specifically for students from the field of Commerce and Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
