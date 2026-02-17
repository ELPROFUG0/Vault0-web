import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CloudBackground } from "@/components/cloud-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TexTab - AI Keyboard Shortcuts for macOS",
  description:
    "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
  authors: [{ name: "Dipmal Lakhani" }],
  keywords: [
    "capture",
    "notes",
    "productivity",
    "macOS",
    "library",
    "bookmarks",
    "screenshots",
    "organize",
    "inbox",
    "quick capture tool",
    "personal knowledge management",
    "note taking app macOS",
    "digital library",
    "visual bookmarking",
    "idea organizer",
    "thought capture",
    "inbox for ideas",
    "local first notes",
    "private note taking",
    "keyboard shortcuts productivity",
    "save for later app",
    "content curation tool",
    "personal library app",
    "macOS productivity app",
    "screenshot organizer",
    "link manager",
    "voice notes app",
  ],
  creator: "Dipmal Lakhani",
  publisher: "TexTab",
  robots: "index, follow",
  openGraph: {
    title: "TexTab - AI Keyboard Shortcuts for macOS",
    description:
      "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
    url: "https://textab.io",
    siteName: "TexTab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/textabog.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@elmoidev",
    title: "TexTab - AI Keyboard Shortcuts for macOS",
    description:
      "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
    images: ["/textabog.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://textab.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TexTab",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "macOS",
              description:
                "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
              url: "https://textab.io",
              author: {
                "@type": "Person",
                name: "Dipmal Lakhani",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-web-background overscroll-contain`}
      >
        <CloudBackground />
        {children}
      </body>
    </html>
  );
}
