import TermBody from '@/termsandcondition/TermBody';
import TermHero from '@/termsandcondition/TermHero';
import React from 'react';
export const metadata = {
  title: 'BayFi – Terms & Conditions',
  description: 'Read BayFi’s Terms & Conditions to understand the rules, rights, and responsibilities for using our website, products, and services.',
  alternates: {
    canonical: 'https://www.gobayfi.com/termsandcondition'
  },
  openGraph: {
    title: 'BayFi – Terms & Conditions',
    description: 'Review BayFi’s Terms & Conditions for important information about your rights and obligations as a user of our digital platforms.',
    url: 'https://www.gobayfi.com/termsandcondition',
    siteName: 'BayFi',
    images: [
      {
        url: 'https://www.gobayfi.com/Image/Fav.ico', // Or use your logo or a custom image
        width: 1200,
        height: 630,
        alt: 'BayFi Terms & Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFi – Terms & Conditions',
    description: 'Understand BayFi’s Terms & Conditions and how they apply to your use of our products and services.',
    images: ['https://www.gobayfi.com/Image/Fav.ico'],
  },
};

const page = () => {
    return (
        <div>
        <TermHero></TermHero>
        <TermBody></TermBody>
        </div>
    );
};

export default page;