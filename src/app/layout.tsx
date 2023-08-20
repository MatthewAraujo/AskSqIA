import "./globals.css";
import type { Metadata } from "next";
import { Inter, Ubuntu_Mono as UbuntuMono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ubuntu = UbuntuMono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "AskSQL",
  description:
    "Comece perguntando com um código SQL para receber a ajuda da IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ubuntu.variable} font-sans`}
    >
      <body className="bg-blueberry-900">{children}</body>
    </html>
  );
}