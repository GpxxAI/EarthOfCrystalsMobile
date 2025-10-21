import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earth of Crystals Admin",
  description: "Admin Mobile per catalogo gemme e cristalli"
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
