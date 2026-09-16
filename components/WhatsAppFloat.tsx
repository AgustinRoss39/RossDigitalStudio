import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  const href = whatsappUrl("Hola! Vi Ross Digital Studio y quería pedir un presupuesto.");
  return (
    <a className="waFloat" href={href} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp" title="Consultar por WhatsApp">
      <WhatsAppIcon className="waIcon" />
    </a>
  );
}
