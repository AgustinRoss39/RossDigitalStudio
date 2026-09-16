import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const href = whatsappUrl("Hola! Vi Ross Digital Studio y quería pedir un presupuesto.");
  return (
    <a className="waFloat" href={href} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
      <span>↗</span>
      WhatsApp
    </a>
  );
}
