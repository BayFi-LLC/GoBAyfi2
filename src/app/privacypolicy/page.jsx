 
import PrivacyBody from '@/Privacy/PrivacyBody';
import PrivacyHero from '@/Privacy/PrivacyHero';
import React from 'react';
export const metadata = {
  title: 'BayFi – Privacy Policy',
  description: 'Read BayFi’s Privacy Policy to learn how we collect, use, protect, and respect your information across all our digital products and services.',
  alternates: {
    canonical: 'https://www.gobayfi.com/privacypolicy'
  },
  openGraph: {
    title: 'BayFi – Privacy Policy',
    description: 'Review BayFi’s Privacy Policy and understand our commitment to safeguarding your data and privacy online.',
    url: 'https://www.gobayfi.com/privacypolicy',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // You can use your logo, or a specific privacy/lock image if you have one
        width: 1200,
        height: 630,
        alt: 'BayFi Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi – Privacy Policy',
    description: 'Find out how BayFi protects your privacy and data with our transparent privacy practices.',
    images: ['https://www.gobayfi.com/Image/Fav.ico'], // Use a relevant image if you prefer
  },
};

const page = () => {
    return (
        <div>
             <PrivacyHero></PrivacyHero>
             <PrivacyBody></PrivacyBody>
  
        </div>
    );
};

export default page;