import type { Metadata } from "next";
import { Inter, Kalam, Linefont } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const lineFont = Linefont({ variable: "--line-font" });

export const metadata: Metadata = {
  title: "SHOPPING APP",
  description: "Generate new text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} text-primary bg-mist ${lineFont.variable}`}>{children}</body>
    </html>
  );
}
