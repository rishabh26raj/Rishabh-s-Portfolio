import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishabh Raj",
  description: "Rishabh Raj's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Rishabh Raj</title>
        <meta name="description" content="Rishabh Raj's portfolio" />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://github.com/rishabh26raj' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Rishabh Raj' />
        <meta property='og:description' content="Rishabh Raj's portfolio" />
        <meta property='og:image' content='https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png?token=_qTLRn6p4KnE4V7PrsKivjz0GDQRC5w3_ivOT_p9HSw&height=714&width=1200&expires=33278371349' />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="github.com/rishabh26raj" />
        <meta property="twitter:url" content="https://github.com/rishabh26raj" />
        <meta name="twitter:title" content="Rishabh Raj" />
        <meta name="twitter:description" content="Rishabh Raj's portfolio" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png?token=_qTLRn6p4KnE4V7PrsKivjz0GDQRC5w3_ivOT_p9HSw&height=714&width=1200&expires=33278371349" />
      </head>
      <body className={twMerge(inter.variable, jetBrainMono.variable, "bg-[#333333] text-[#D6D2BD] font-sans antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}