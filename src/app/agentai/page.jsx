import SubpageAnimation from "@/SubpageAimation/SubpageAnimation";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: 'BayFi - AgentAI',
  description: 'BayFi – Agent.ai: Transforming Workflows Through AI-Powered Innovation',
  alternates: {
    canonical: 'https://www.gobayfi.com/agentai'
  },
  openGraph: {
    title: 'BayFi - AgentAI',
    description: 'BayFi – Agent.ai: Transforming Workflows Through AI-Powered Innovation',
    url: 'https://www.gobayfi.com/agentai',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Replace with your actual image
        width: 1200,
        height: 630,
        alt: 'BayFi AgentAI Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi - AgentAI',
    description: 'BayFi – Agent.ai: Transforming Workflows Through AI-Powered Innovation',
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
              name: "Home",
              item: "https://www.gobayfi.com/"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "AgentAI",
              item: "https://www.gobayfi.com/agentai"
            }
          ]
        })}
      </Script>

      <SubpageAnimation />
    </>
  );
};

export default Page;
