import { whatsappUrl } from "@/lib/whatsapp";

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
          <a className="button buttonCream" href={href} target="_blank" rel="noreferrer">Hablemos por WhatsApp <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
