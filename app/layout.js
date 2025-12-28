import { Outfit, Ovo, Eczar } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit', 
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo', 
});

const eczar = Eczar({
  subsets:["latin"],
  weight:["400","500","600","700"],
  variable: '--font-eczar',
})

export const metadata = {
  title: {
    default: "Ahmed Bahget | Full Stack MERN Developer",
    template: "%s | Ahmed Bahget",
  },
  description:
    "Ahmed Bahget is a Full Stack MERN Developer specializing in React, Next.js, Node.js, Express, MongoDB, and scalable backend systems.",
  keywords: [
    "Ahmed Bahget",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "Backend Engineer",
  ],
  authors: [{ name: "Ahmed Bahget" }],
  creator: "Ahmed Bahget",

  metadataBase: new URL("https://github.com/Ahmed-bahget/my-portfolio"),

  openGraph: {
    title: "Ahmed Bahget | Full Stack MERN Developer",
    description:
      "Portfolio of Ahmed Bahget – Full Stack MERN Developer building scalable web applications.",
    url: "https://github.com/Ahmed-bahget/my-portfolio",
    siteName: "Ahmed Bahget Portfolio",
    images: [
      {
        url: "/ahmed-img.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Bahget Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "ahmed_image",
    title: "Ahmed Bahget | Full Stack MERN Developer",
    description:
      "Portfolio of Ahmed Bahget – MERN Stack & Next.js Developer.",
    images: ["/ahmed-img.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${ovo.variable} ${eczar.variable} scroll-smooth`}>
      <body className="antialiased leading-8 overflow-x-hidden ">
        {children}
      </body>
    </html>
  );
}