import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { TITLE, DESCRIPTION, TEST_URL } from "@/constants/layout";

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
  metadataBase: new URL(TEST_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: TEST_URL,
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
