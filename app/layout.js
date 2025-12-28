import { Outfit, Ovo, Eczar } from 'next/font/google';
import "./globals.css";
import { Providers } from './provider';

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
  title: "Portfolio",
  description: "MERN stack developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${ovo.variable} ${eczar.variable} scroll-smooth`}>
      <body className="antialiased leading-8 overflow-x-hidden ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}