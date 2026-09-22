import type { Metadata } from "next";
import { Philosopher, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "Hush House Handbook",
  description: "A librarian's handbook for Hush House.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${philosopher.variable} ${notoSerifSC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}