import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provided from "./dashboard/Components/Provided";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ungreed - Budget Management",
  description:
    "Manage your budget and finances with Ungreed - a comprehensive budget tracking application",
};

// Trigger build
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/icon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg" />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Ungreed" />
        <link rel="manifest" href="/icon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Provided>{children}</Provided>
      </body>
    </html>
  );
}
