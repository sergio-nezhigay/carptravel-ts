import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://carptravel-ts.vercel.app/";
const TITLE = "CarpTravel";
const DESCRIPTION =
  "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    locale: "en",
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
