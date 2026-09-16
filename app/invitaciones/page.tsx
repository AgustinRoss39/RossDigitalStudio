import { CTA } from "@/components/CTA";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppIcon } from "@/components/Icons";
import { faqs, invitePlans, inviteProjects } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = { title: "Invitaciones digitales", description: "Invitaciones digitales para cumpleaños, XV, bodas y eventos." };

export default function InvitacionesPage() {
  const wa = whatsappUrl("Hola! Quiero consultar por una invitación digital en Ross Digital Studio.");
  return (
    <>
      <section className="innerHero inviteHero">
        <div className="container innerHeroGrid">
          <div>
            <span className="eyebrow">DIGITAL INVITES</span>
            <h1>Una invitación<br/><em>que da ganas de abrir.</em></h1>
            <p>Un solo link con toda la información de tu evento, pensado para compartir fácil y verse increíble desde el celular.</p>
            <a className="button buttonDark whatsappButton" href={wa} target="_blank" rel="noreferrer">Quiero mi invitación <span className="iconBubble"><WhatsAppIcon className="waIcon" /></span></a>
          </div>
          <div className="invitePhoneMock">
            <div className="invitePhoneTop">✦</div>
            <div className="invitePhoneBody"><small>ESTÁS INVITADO</small><strong>Tu evento<br/>empieza acá.</strong><span>18 · 10 · 27</span><button>CONFIRMAR</button></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="OPCIONES" title="Elegí cómo querés empezar." text="Podés adaptar un modelo, elegir una temática o pedir una invitación diseñada desde cero." center />
          <div className="pricingGrid">
            {invitePlans.map((plan) => <PricingCard key={plan.name} plan={plan} ctaHref={whatsappUrl(`Hola! Quiero consultar por una invitación ${plan.name} en Ross Digital Studio.`)} />)}
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="QUÉ PUEDE INCLUIR" title="Toda la info. Un solo link." />
          <div className="featureGrid">
            {[["⌖","Ubicación","Mapa o acceso directo para llegar."],["◷","Cuenta regresiva","Para empezar a generar expectativa."],["✓","Confirmación","CTA directo a WhatsApp o formulario."],["♫","Música","Según el estilo y necesidad del evento."],["▧","Fotos","Imágenes y recursos del evento."],["↗","Links","Regalos, dress code, redes y más."]].map(([i,t,d]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="PORTFOLIO" title="Temáticas que ya pasaron por Ross." text="Estas son algunas de las invitaciones digitales desarrolladas hasta ahora." />
          <div className="inviteGallery">
            {inviteProjects.map((project) => <ProjectCard key={project.title} {...project} portrait />)}
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Lo que suele preguntarse." />
          <div className="faqGrid">
            {faqs.slice(1).map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
      <CTA title="Tu evento empieza antes de la fecha." text="Contanos la temática, pasanos los datos y hagamos una invitación que ya ponga a todos en clima." />
    </>
  );
}
