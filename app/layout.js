import { Tinos } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
const tinos = Tinos({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-tinos', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description, keywords: site.keywords,
  authors: [{ name: site.name }], alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: 'website', images: [{ url: '/hero.jpg', width: 800, height: 1162, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 } },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#fff8e8' };
const ld = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: 'Graphic Designer', url: site.url, image: site.url + '/hero.jpg', email: site.email, sameAs: [site.instagram, site.behance, site.linkedin], knowsAbout: ['Social media design', 'Branding', 'Advertising design', 'Adobe Photoshop', 'Adobe Illustrator'] };
export default function RootLayout({ children }) {
  return (<html lang="en" className={tinos.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
