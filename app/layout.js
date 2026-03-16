import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import WhatsAppButton from "../components/WhatsAppButton";
import Loader from "../components/Loader";

export const metadata = {
  title: "Welcome Atelier | Experiencias y eventos personalizados",
  description:
    "Diseñamos celebraciones únicas: bodas, eventos infantiles, giveaways y experiencias gastronómicas.",
       icons: {
  icon: "/favicon.jpg",
},
  openGraph: {
    title: "Welcome Atelier Eventos",
    description:
      "Celebraciones diseñadas con elegancia y atención a cada detalle.",
    images: ["/heroes/moments.webp"],
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className= {`${playfair.variable} ${inter.variable} font-sans`}>
         <Loader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
