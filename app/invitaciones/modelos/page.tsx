import { inviteProjects } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata = {
  title: "Catálogo de invitaciones",
  description: "Modelos y temáticas de invitaciones digitales de Ross Digital Studio.",
};

export default function InvitationCatalogPage() {
  return (
    <>
      <section className="portfolioHero compactHero">
        <div className="container">
          <span className="eyebrow">CATÁLOGO</span>
          <h1>Elegí una base.<br/><em>La hacemos tuya.</em></h1>
          <p>Explorá los modelos disponibles, abrí cada invitación completa y elegí la temática que mejor encaje con tu evento.</p>
        </div>
      </section>
      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="MODELOS" title="Temáticas disponibles" text="Cada modelo se adapta con tus datos, colores, fotos y contenido según el servicio elegido." />
          <div className="catalogGrid">
            {inviteProjects.map((model) => {
              const wa = whatsappUrl(`Hola! Quiero consultar por el modelo ${model.code} - ${model.title} de Ross Digital Studio.`);
              return (
                <article className="catalogCard" key={model.slug}>
                  <a
                    className="catalogPreviewLink"
                    href={model.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir invitación ${model.title}`}
                  >
                    <div className="catalogVisual catalogVisualPreview">
                      <iframe src={model.previewUrl} title={`Vista previa de ${model.title}`} loading="lazy" tabIndex={-1} />
                      <span className="catalogCode">{model.code}</span>
                      <span className="catalogOpen">Ver invitación ↗</span>
                    </div>
                  </a>
                  <div className="catalogBody">
                    <span className="eyebrow">{model.category}</span>
                    <h3>{model.title}</h3>
                    <div className="tagList">{model.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="catalogActions">
                      <a className="button buttonOutline" href={model.href} target="_blank" rel="noreferrer">
                        Ver invitación ↗
                      </a>
                      <TrackedLink
                        className="button buttonDark whatsappButton"
                        href={wa}
                        target="_blank"
                        rel="noreferrer"
                        eventName="whatsapp_click"
                        eventData={{ source: "catalog", model: model.code }}
                      >
                        Quiero este modelo <WhatsAppIcon className="waIcon" />
                      </TrackedLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
