import { bayfiFont } from "@/Component/local";
import "./globals.css";
import BodyStyle from "@/Component/BodyStyle/BodyStyle";
import Footer from "@/Component/Footer/Footer";
import Contact from "@/Component/Contactus/ContactUs/Contact";
import SmoothScrolling from "@/Component/Smothscrolling";
import Script from "next/script";
import CustomCursor from "@/Component/CustomCursor/CustomCursor";
// import { GoogleAnalytics } from '@next/third-parties/google'
import ClientWrapper from "@/Component/Sesion/ClientWrapper";
import CookieConsentBanner from "@/Component/Cookies/CookieConsentBanner";


export const metadata = {
  title: "BayFi",
  description:
    "✦ Cutting edge design, development & growth partner",
  keywords: [
    "BayFi",
    "BayFi Studio",
    "BayFi Design",
    "BayFi Development",
    "BayFi Official Website",
  ],
  icons: {
    icon: "/Image/Fav.ico",
  },
  openGraph: {
    title: "BayFi",
    description: "✦ Cutting edge design, development & growth partner",
    url: "https://www.gobayfi.com/",
    siteName: "BayFi",
    images: [
      {
        url: "/Image/favicon.ico",
        width: 1200,
        height: 630,
        alt: "BayFi Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BayFi",
    description: "✦ Cutting edge design, development & growth partner",
    images: ["/Image/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bayfiFont.variable} data-arp="" webcrx="">
      <head>
        {/* ✅ Basic SEO Meta */}
        <title>
          BayFi
        </title>
        <meta
          name="description"
          content="✦ Cutting edge design, development & growth partner"
        />
        <meta
          name="keywords"
          content="Bayfi, Bayfi Studio, Bayfi Design, Bayfi Development, Bayfi Official Website"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.gobayfi.com/" />

        {/* ✅ Favicons */}
        <link rel="icon" href="/Image/Fav.ico" />
        <link rel="apple-touch-icon" href="/Image/Fav.ico" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ Structured Data */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BayFi",
            url: "https://www.gobayfi.com/",
            logo: "https://www.gobayfi.com/Image/favicon.ico",
            sameAs: [
              "https://www.linkedin.com/company/gobayfi",
              "https://www.youtube.com/@gobayfi",
              "https://www.facebook.com/bayfistudio",
              "https://dribbble.com/gobayfi",
              "https://www.instagram.com/gobayfi",
            ],
          })}
        </Script>

        {/* ✅ Mailchimp Script (if needed) */}
        <Script
          id="mailchimp-script"
          strategy="afterInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/31a203cd243198e4c265d7c8e/1c8c1cc4a3db4f2c57763e59b.js"
        />
      </head>
      <body className="  ">
        <SmoothScrolling>
          <CustomCursor></CustomCursor>
          <BodyStyle />
          <ClientWrapper>
          {children}
              <CookieConsentBanner />
        </ClientWrapper>
          <Contact />
          <Footer />
        </SmoothScrolling>
          {/* <GoogleAnalytics gaId="G-PEJ72JDX1V" /> */}
          
          
      
      </body>
    </html>
  );
}
