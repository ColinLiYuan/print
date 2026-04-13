import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HoloVerify Global - Advanced Security Solutions",
    template: "%s | HoloVerify Global",
  },
  description: "High-security holographic solutions & thermal transfer foils engineered for absolute brand protection. Premium anti-counterfeiting technology for pharmaceuticals, luxury goods, and government documents.",
  keywords: [
    "holographic security",
    "anti-counterfeiting",
    "brand protection",
    "tamper evident",
    "security labels",
    "hologram foil",
    "authentication",
    "thermal transfer",
    "security printing",
  ],
  authors: [{ name: "HoloVerify Global" }],
  creator: "HoloVerify Global",
  publisher: "HoloVerify Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://holoverify.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "zh": "/zh",
      "es": "/es",
      "ru": "/ru",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://holoverify.com",
    siteName: "HoloVerify Global",
    title: "HoloVerify Global - Advanced Security Solutions",
    description: "Premium holographic security solutions for global brand protection",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HoloVerify Global - Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HoloVerify Global",
    description: "High-security holographic solutions for brand protection",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
