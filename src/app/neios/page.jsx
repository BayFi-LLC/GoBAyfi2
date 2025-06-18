import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - Neios',
  description: 'BayFi – Neios: Empowering Knowledge, One Answer at a Time',
  alternates: {
    canonical: 'https://www.gobayfi.com/neios'
  },
  openGraph: {
    title: 'BayFi - Neios',
    description: 'BayFi – Neios: Empowering Knowledge, One Answer at a Time',
    url: 'https://www.gobayfi.com/neios',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual image
        width: 1200,
        height: 630,
        alt: 'BayFi Neios Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - Neios',
    description: 'BayFi – Neios: Empowering Knowledge, One Answer at a Time',
    images: ['https://www.gobayfi.com/Image/Fav.ico'], // Replace as needed
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
              name: "Neios",
              item: "https://www.gobayfi.com/neios"
            }
          ]
        })}
      </Script>
    
      <SubpageAnimation />
    </>
  );
};

export default Page;
