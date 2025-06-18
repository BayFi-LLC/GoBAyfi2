import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - EdgeX',
  description: 'BayFi – EdgeX: Powering Financial Freedom with Scalable Crypto Solutions',
  alternates: {
    canonical: 'https://www.gobayfi.com/edgex'
  },
  openGraph: {
    title: 'BayFi - EdgeX',
    description: 'BayFi – EdgeX: Powering Financial Freedom with Scalable Crypto Solutions',
    url: 'https://www.gobayfi.com/edgex',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual Open Graph image path
        width: 1200,
        height: 630,
        alt: 'BayFi EdgeX Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - EdgeX',
    description: 'BayFi – EdgeX: Powering Financial Freedom with Scalable Crypto Solutions',
    images: ['https://www.gobayfi.com/Image/Fav.ico'], // Replace with your actual Twitter image path
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
              name: "EdgeX",
              item: "https://www.gobayfi.com/edgex"
            }
          ]
        })}
      </Script>
       
      <SubpageAnimation />
    </>
  );
};

export default Page;
