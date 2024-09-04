import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// bg-[#F5F5F5]
// bg-no-repeat bg-cover bg-[url('/bg.svg')]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} scroll-smooth bg-white`}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
