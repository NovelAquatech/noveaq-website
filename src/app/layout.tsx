import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: `NovelAquatech - Home`,
  description: `Explore our innovative IoT solutions designed to enhance connectivity and efficiency across various industries.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="NovelAq" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="font-sans">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
