import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Eiffel Founders — Le camp de base parisien des fondateurs X-HEC",
  description:
    "Eiffel Founders est une hacker house à Paris portée par des fondateurs du programme X-HEC Entrepreneurs. Un lieu pour construire, recevoir et faire grandir l'écosystème entrepreneurial.",
  openGraph: {
    title: "Eiffel Founders",
    description: "Le camp de base parisien des fondateurs X-HEC Entrepreneurs.",
    siteName: "Eiffel Founders",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
