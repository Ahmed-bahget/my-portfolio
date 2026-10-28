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
    default: "Ahmed Bahget | Software Engineer",
    template: "%s | Ahmed Bahget",
  },
  description:
    "Ahmed Bahget is a Software Engineer with a system design and architecture mindset, building scalable, secure, and maintainable software with NestJS, Node.js, React, and Next.js.",
  keywords: [
    "Ahmed Bahget",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "NestJS Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "System Design",
  ],
  authors: [{ name: "Ahmed Bahget" }],
  creator: "Ahmed Bahget",

  metadataBase: new URL("https://my-portfolio-seven-beta-nhm0z5sij9.vercel.app/"),

  openGraph: {
    title: "Ahmed Bahget | Software Engineer",
    description:
      "Portfolio of Ahmed Bahget – Software Engineer building scalable, secure, and maintainable software systems.",
    url: "https://my-portfolio-seven-beta-nhm0z5sij9.vercel.app/",
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
    card: "summary_large_image",
    title: "Ahmed Bahget | Software Engineer",
    description:
      "Portfolio of Ahmed Bahget – Software Engineer building scalable, secure, and maintainable software systems.",
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