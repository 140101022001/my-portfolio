import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import favicon from '@/public/favicon.png'

const roboto = Roboto({ subsets: ["latin"] , weight: ['500']});

export const metadata: Metadata = {
  title: "Hung's Portfolio",
  description: "Hung's Portfolio",
  icons: [favicon.src]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
