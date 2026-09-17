import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, ArrowUpRightIcon } from "./Icons";
import { TrackedLink } from "./TrackedLink";

export function CTA({ title = "¿Tenés una idea en mente?", text = "Contanos qué necesitás y armamos una propuesta clara para llevarla a digital." }: { title?: string; text?: string }) {
  const href = whatsappUrl("Hola! Tengo una idea y quiero pedir un presupuesto en Ross Digital Studio.");
  return (
    <section className="ctaBand">
      <div className="container ctaGrid">
        <div>
          <span className="eyebrow light">ROSS DIGITAL STUDIO</span>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{text}</p>
          <div className="ctaActions">
            <Link className="button buttonCream" href="/presupuesto">
              Armar mi consulta <ArrowUpRightIcon className="actionIcon" />
            </Link>
            <TrackedLink
              className="button buttonOutline ctaWhatsapp"
              href={href}
              target="_blank"
              rel="noreferrer"
              eventName="whatsapp_click"
              eventData={{ source: "cta_band" }}
            >
              WhatsApp <WhatsAppIcon className="waIcon" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
