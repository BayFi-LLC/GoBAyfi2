import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - Unilex',
  description: 'BayFi – Unilex: Unlocking Wealth Through Simplified Crypto Solutions',
  alternates: {
    canonical: 'https://www.gobayfi.com/unilex'
  },
  openGraph: {
    title: 'BayFi - Unilex',
    description: 'BayFi – Unilex: Unlocking Wealth Through Simplified Crypto Solutions',
    url: 'https://www.gobayfi.com/unilex',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual image path!
        width: 1200,
        height: 630,
        alt: 'BayFi Unilex Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - Unilex',
    description: 'BayFi – Unilex: Unlocking Wealth Through Simplified Crypto Solutions',
    images: ['https://www.gobayfi.com/Image/Fav.ico'], // Replace with your image path!
  },
};

const Page = () => {
  return (
    <>
      <Script id="breadcrumb-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              position: 1,
              name: "BayFi",
              item: "https://www.gobayfi.com/"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Unilex",
              item: "https://www.gobayfi.com/unilex"
            }
          ]
        })}
      </Script>
    
      <SubpageAnimation />
    </>
  );
};

export default Page;
