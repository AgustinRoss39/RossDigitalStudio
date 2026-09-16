import { CTA } from "@/components/CTA";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppIcon } from "@/components/Icons";
import { faqs, webPlans, webProjects } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = { title: "Webs", description: "Páginas web para emprendimientos, profesionales, comercios y marcas." };

export default function WebsPage() {
  const wa = whatsappUrl("Hola! Quiero consultar por una web en Ross Digital Studio.");
  return (
    <>
      <section className="innerHero webHero">
        <div className="container innerHeroGrid">
          <div>
            <span className="eyebrow">WEB DESIGN</span>
            <h1>Tu negocio merece<br/><em>su propio lugar.</em></h1>
            <p>Diseñamos webs rápidas, claras y pensadas para que tu cliente encuentre lo que necesita sin perderse.</p>
            <a className="button buttonDark whatsappButton" href={wa} target="_blank" rel="noreferrer">Pedir presupuesto <span className="iconBubble"><WhatsAppIcon className="waIcon" /></span></a>
          </div>
          <div className="webHeroVisual">
            <div className="stackCard cardA">Responsive <span>01</span></div>
            <div className="stackCard cardB">A tu medida <span>02</span></div>
            <div className="stackCard cardC">Lista para vender <span>03</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="PLANES" title="Elegí el punto de partida." text="Los precios son de lanzamiento y el alcance final se confirma antes de comenzar." center />
          <div className="pricingGrid">
            {webPlans.map((plan) => <PricingCard key={plan.name} plan={plan} ctaHref={whatsappUrl(`Hola! Quiero consultar por ${plan.name} en Ross Digital Studio.`)} />)}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="PORTFOLIO WEB" title="Tres rubros. Tres identidades." text="El diseño cambia porque cada negocio tiene algo distinto que decir." />
          <div className="projectGrid">
            {webProjects.map((project) => <ProjectCard key={project.title} {...project} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitInfo">
          <div><span className="eyebrow">QUÉ NECESITAMOS</span><h2>Con lo esencial,<br/>podemos empezar.</h2></div>
          <div className="checkGrid">
            {["Nombre y logo", "Textos principales", "Servicios o productos", "Fotos", "Datos de contacto", "Referencias que te gusten"].map((x) => <div key={x}><span>✦</span>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Preguntas antes de empezar." />
          <div className="faqGrid">
            {faqs.slice(0,5).map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
      <CTA title="Tu negocio ya tiene una historia." text="Ahora hagamos que también tenga un lugar propio en internet." />
    </>
  );
}
