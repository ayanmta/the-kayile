import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Kayile - Himalayan Luxury Retreat',
  description: 'Experience luxury at 9,000 feet in the Himalayas. Crafted from Pinus wallichiana wood, nestled in dense forests with breathtaking Chanchal Valley views.',
  keywords: 'The Kayile, Himalayan retreat, luxury accommodation, Pinus wallichiana, Chanchal Valley, 9000 feet, forest sanctuary, apple orchard',
  openGraph: {
    title: 'The Kayile - Himalayan Luxury Retreat',
    description: 'Experience luxury at 9,000 feet in the Himalayas. Crafted from Pinus wallichiana wood, nestled in dense forests with breathtaking Chanchal Valley views.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/upload/bannerback.png" 
          as="image" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href="/upload/mainvid.mp4" 
          as="video" 
          type="video/mp4"
        />
        <link 
          rel="preload" 
          href="/upload/file.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
