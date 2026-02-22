import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
  title: "Vault0 - AI Keyboard Shortcuts for macOS",
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
  publisher: "Vault0",
  robots: "index, follow",
  openGraph: {
    title: "Vault0 - AI Keyboard Shortcuts for macOS",
    description:
      "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
    url: "https://vault0.app",
    siteName: "Vault0",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/vault0og.png",
        width: 4000,
        height: 2250,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@elmoidev",
    title: "Vault0 - AI Keyboard Shortcuts for macOS",
    description:
      "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
    images: ["/vault0og.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://vault0.app"),
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
              name: "Vault0",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "macOS",
              description:
                "A personal library and quick capture tool for thoughts, ideas, links, visuals, and more.",
              url: "https://vault0.app",
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
        <script defer data-auto-init src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@latest/dist/embed.global.js"></script>
      </head>
      <body
        className={`${inter.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans antialiased overscroll-contain`}
      >
        {children}
      </body>
    </html>
  );
}
