import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic'
import Navbar from "../../components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const Information = dynamic(() =>import("../../components/information/information"), {ssr: false})
const ShootingStars = dynamic(() =>import("../../components/shootingStars/shootingStars"), {ssr: false})


export const metadata = {
  title: "Luis Belis",
  description: "My personal porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.ico" sizes="any" />
      <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
      <Navbar />
        <main className="mainTag">
          {children}
        </main>
        <footer className="footerStyle">
          <Information />
        </footer>
        </body>
    </html>
  );
}
