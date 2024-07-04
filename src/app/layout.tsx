import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ShreyaShree | Personal",
  metadataBase: new URL("https://www.github.com"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Shreya Shree", url: "https://github.com/shreyashree-17" },
  ],
  description: "Shreya Shree's personal portfolio website",
  openGraph: {
    title: "Shreya Shree | Personal",
    description: "Shreya Shree's personal portfolio website",
    images: [
      {
        url: "/photo-me.jpg",
        alt: "Shreya Shree's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
