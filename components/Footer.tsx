import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import { TrackedLink } from "./TrackedLink";

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
          <Link href="/invitaciones/modelos">Catálogo</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="footerLinks">
          <span>Contacto</span>
          <Link href="/presupuesto">Pedir presupuesto</Link>
          <TrackedLink href={wa} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ source: "footer" }}>WhatsApp</TrackedLink>
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
