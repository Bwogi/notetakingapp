import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotX",
  description: "A connected workspace where better, faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/dark-logo.svg",
        href: "/dark-logo.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/light-logo.svg",
        href: "/light-logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
