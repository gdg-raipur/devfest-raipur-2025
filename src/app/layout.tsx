import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script";
import { url } from "inspector";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  
  title: "DevFest Raipur 2025 | November 15 | IIIT Naya Raipur",
  description: "Join DevFest Raipur 2025 on November 15 at IIIT Naya Raipur. Connect with industry leaders, attend workshops, and celebrate innovation with the Google Developer Group community.",
  keywords: "DevFest, DevFest Raipur, DevFest 2025, GDG Raipur, Google Developer Group, Tech Conference, Developer Event, IIIT Raipur",
  authors: [{ name: "GDG Raipur" }],
  openGraph: {
    title: "DevFest Raipur 2025 | November 15 | IIIT Naya Raipur",
    description: "Join DevFest Raipur 2025 on November 15 at IIIT Naya Raipur. Connect with industry leaders, attend workshops, and celebrate innovation with the Google Developer Group community.",
    type: "website",
    locale: "en_US",
    url: "https://devfest-raipur.com",
    siteName: "DevFest Raipur 2025",
    images: [{
    url: '/devfest-gdg-raipur.png',
    width: 1200,
    height: 630,
    alt: 'DevFest Raipur 2025',
    }],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "DevFest Raipur 2025 | November 15 | IIIT Naya Raipur",
    description: "Join DevFest Raipur 2025 on November 15 at IIIT Naya Raipur. Connect with industry leaders, attend workshops, and celebrate innovation with the Google Developer Group community.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/BRFirma-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/BRFirma-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Ethnocentric-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </head>
      <body
        className={`font-sans antialiased top-0`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5R8YBJGJ0H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5R8YBJGJ0H');
          `}
        </Script>

        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
