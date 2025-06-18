import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - Priome',
  description: 'BayFi – Priome: Prioritizing Wellness, One Moment at a Time',
  alternates: {
    canonical: 'https://www.gobayfi.com/priome'
  },
  openGraph: {
    title: 'BayFi - Priome',
    description: 'BayFi – Priome: Prioritizing Wellness, One Moment at a Time',
    url: 'https://www.gobayfi.com/priome',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual image path!
        width: 1200,
        height: 630,
        alt: 'BayFi Priome Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - Priome',
    description: 'BayFi – Priome: Prioritizing Wellness, One Moment at a Time',
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
              name: "Priome",
              item: "https://www.gobayfi.com/priome"
            }
          ]
        })}
      </Script>
    
      <SubpageAnimation />
    </>
  );
};

export default Page;
