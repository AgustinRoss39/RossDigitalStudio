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
          <p>Estamos actualizando los modelos viejos para que todo el catálogo tenga la nueva calidad visual de Ross. Mientras tanto podés reservar cualquier temática.</p>
        </div>
      </section>
      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="MODELOS" title="Temáticas disponibles" text="Cada modelo se adapta con tus datos, colores, fotos y contenido según el servicio elegido." />
          <div className="catalogGrid">
            {inviteProjects.map((model) => {
              const wa = whatsappUrl(`Hola! Quiero consultar por el modelo ${model.code} - ${model.title} de Ross Digital Studio.`);
              return (
                <article className={`catalogCard theme-${model.theme}`} key={model.slug}>
                  <div className="catalogVisual">
                    <span className="catalogCode">{model.code}</span>
                    <span className="catalogSpark">✦</span>
                    <small>{model.category}</small>
                    <strong>{model.title}</strong>
                    <span className="catalogStatus">{model.status === "actualizando" ? "Actualizando diseño" : "Próximamente"}</span>
                  </div>
                  <div className="catalogBody">
                    <div className="tagList">{model.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <TrackedLink
                      className="button buttonOutline whatsappButton"
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      eventName="whatsapp_click"
                      eventData={{ source: "catalog", model: model.code }}
                    >
                      Quiero este modelo <WhatsAppIcon className="waIcon" />
                    </TrackedLink>
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
