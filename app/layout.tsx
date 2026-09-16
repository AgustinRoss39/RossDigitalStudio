import type { Metadata } from "next";
import "./globals.css";
import "./mobile-tweaks.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Ross Digital Studio | Webs + Invitaciones digitales",
    template: "%s | Ross Digital Studio",
  },
  description: "Webs rápidas, lindas y funcionales e invitaciones digitales para todo tipo de evento.",
  openGraph: {
    title: "Ross Digital Studio",
    description: "Tu idea. Nuestra parte digital.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
