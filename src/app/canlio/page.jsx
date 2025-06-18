import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - Canlio',
  description: 'BayFi – Canlio: Revolutionizing Personal & Community Growth with Smart AI',
  alternates: {
    canonical: 'https://www.gobayfi.com/canlio'
  },
  openGraph: {
    title: 'BayFi - Canlio',
    description: 'BayFi – Canlio: Revolutionizing Personal & Community Growth with Smart AI',
    url: 'https://www.gobayfi.com/canlio',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual image path!
        width: 1200,
        height: 630,
        alt: 'BayFi Canlio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - Canlio',
    description: 'BayFi – Canlio: Revolutionizing Personal & Community Growth with Smart AI',
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
              name: "Canlio",
              item: "https://www.gobayfi.com/canlio"
            }
          ]
        })}
      </Script>
    
      <SubpageAnimation />
    </>
  );
};

export default Page;
