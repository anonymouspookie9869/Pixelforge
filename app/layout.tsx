import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'Website Development & Graphic Design Agency for Businesses Worldwide | PixelForge Studio',
    template: '%s | PixelForge Studio',
  },
  description: 'Premium international digital agency providing custom website development, graphic design, UI/UX, and video editing services for startups and businesses worldwide.',
  keywords: ['Website Development Agency', 'Web Design Services', 'Freelance Web Developer', 'Custom Website Development', 'Website Designer', 'Graphic Design Services', 'React Developer', 'Next.js Developer', 'Website Development Services Worldwide'],
  authors: [{ name: 'PixelForge Studio' }],
  creator: 'PixelForge Studio',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Website Development & Graphic Design Agency for Businesses Worldwide',
    description: 'Premium international digital agency providing custom website development, graphic design, UI/UX, and video editing services.',
    url: 'https://www.pixelforgestudio.com',
    siteName: 'PixelForge Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development & Graphic Design Agency for Businesses Worldwide',
    description: 'Premium international digital agency providing custom website development, graphic design, UI/UX, and video editing services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pixelforgestudio.com/#organization",
        "name": "PixelForge Studio",
        "url": "https://www.pixelforgestudio.com"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pixelforgestudio.com/#localbusiness",
        "name": "PixelForge Studio",
        "email": "hello@pixelforgestudio.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pixelforgestudio.com/#website",
        "url": "https://www.pixelforgestudio.com",
        "name": "PixelForge Studio"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200" suppressHydrationWarning>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
