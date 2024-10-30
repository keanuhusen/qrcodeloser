import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from 'next/script';
import "./globals.css";

const molengo = localFont({
  src: [
    {
      path: 'fonts/molengo/molengo-regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-molengo',
});

const angel = localFont({
  src: [
    {
      path: 'fonts/angel-club/angel-club-regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-angel',
});

export const metadata: Metadata = {
  title: "QR Code Loser!",
  description: "Welcome to QR Code Loser. You have lost... loser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M088S0GK9S" />
      <Script id="google-analytics">
        {'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-M088S0GK9S");'}
      </Script>
      <body
        className={`${angel.variable} ${molengo.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
