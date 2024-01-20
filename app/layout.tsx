import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import {
  TITLE,
  DESCRIPTION,
  NEXT_PUBLIC_MAIN_SITE_URL,
} from "@/constants/layout";

import "./globals.css";

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
  metadataBase: new URL(NEXT_PUBLIC_MAIN_SITE_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: NEXT_PUBLIC_MAIN_SITE_URL,
  },
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
