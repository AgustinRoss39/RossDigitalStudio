import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  const wa = whatsappUrl("Hola! Quiero consultar por un proyecto en Ross Digital Studio.");
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Logo />
          <p className="footerPitch">Tu idea. Nuestra parte digital.</p>
        </div>
        <div className="footerLinks">
          <span>Servicios</span>
          <Link href="/webs">Webs</Link>
          <Link href="/invitaciones">Invitaciones</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="footerLinks">
          <span>Contacto</span>
          <a href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} Ross Digital Studio</span>
        <span>Ideas que se vuelven historias.</span>
      </div>
    </footer>
  );
}
