import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import { TrackedLink } from "./TrackedLink";

export function WhatsAppFloat() {
  const href = whatsappUrl("Hola! Vi Ross Digital Studio y quería pedir un presupuesto.");
  return (
    <TrackedLink
      className="waFloat"
      href={href}
      target="_blank"
      rel="noreferrer"
      ariaLabel="Consultar por WhatsApp"
      eventName="whatsapp_click"
      eventData={{ source: "floating_button" }}
    >
      <WhatsAppIcon className="waIcon" />
    </TrackedLink>
  );
}
