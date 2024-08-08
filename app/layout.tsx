import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoai Tran Dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hoai Tran Dev</title>
        <meta
          name="description"
          content="I’m a full-stack developer (Vue.js, React.js & Node.js). I am not satisfied with my skill and working hard towards a higher skill. I have been developing web applications for over 4 years. I aim to make high-quality works with 100% effort for all customers."
        />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link rel="shortcut icon"   href="/images/avatar.png"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/avatar.png"
        />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
