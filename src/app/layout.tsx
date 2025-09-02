import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Evergreen - Luxury B&B",
  description: "A sanctuary of sophistication where luxury meets the raw beauty of nature",
  keywords: ["luxury", "bed and breakfast", "mountain retreat", "himalayan", "nature"],
  authors: [{ name: "The Evergreen" }],
  openGraph: {
    title: "The Evergreen - Luxury B&B",
    description: "A sanctuary of sophistication where luxury meets the raw beauty of nature",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
