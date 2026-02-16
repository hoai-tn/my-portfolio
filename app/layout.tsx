import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hoai Tran - Full Stack Developer",
  description:
    "I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences for the web.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "359x441" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Hoai Tran - Full Stack Developer",
    description:
      "I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences for the web.",
    url: "https://hoaitran.dev",
    type: "website",
    images: ["/images/seo/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PGRSWW4X');`}
        </Script>
      </head>
      <body className={`${roboto.variable} overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGRSWW4X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
