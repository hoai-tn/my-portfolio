import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hoai Tran - Full Stack Developer",
  description: "I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hoai Tran - Full Stack Developer</title>
        <meta
          name="description"
          content="I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences for the web. I have been developing web applications for over 4 years."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/avt-head.jpg"
        />

        <meta property="og:image" content="/images/avt-head.jpg" />
        <meta property="og:title" content="Hoai Tran - Full Stack Developer" />
        <meta
          property="og:description"
          content="I'm a full-stack developer passionate about crafting accessible, pixel-perfect digital experiences for the web."
        />
        <meta property="og:url" content="https://hoaitran.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Add the Google Tag Manager script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PGRSWW4X');`}
        </Script>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
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
