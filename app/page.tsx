import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowUpRightIcon } from "@/components/Icons";
import { TrackedLink } from "@/components/TrackedLink";
import { invitePlans, inviteProjects, webPlans, webProjects } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Home() {
  const webWa = whatsappUrl("Hola! Quiero consultar por una página web en Ross Digital Studio.");
  const inviteWa = whatsappUrl("Hola! Quiero consultar por una invitación digital en Ross Digital Studio.");

  return (
    <>
      <section className="hero">
        <div className="heroGlow glowOne" />
        <div className="heroGlow glowTwo" />
        <div className="container heroGrid">
          <div className="heroCopy reveal">
            <span className="eyebrow">DISEÑO DIGITAL · SIMPLE · A MEDIDA</span>
            <h1>Tu idea.<br/><em>Nuestra parte digital.</em></h1>
            <p>Webs rápidas, lindas y funcionales + invitaciones digitales pensadas para marcas, negocios y momentos importantes.</p>
            <div className="heroActions">
              <Link className="button buttonDark" href="/webs">Quiero una web <span className="iconBubble"><ArrowUpRightIcon className="actionIcon" /></span></Link>
              <Link className="button buttonOutline" href="/invitaciones">Quiero una invitación <span className="iconBubble"><ArrowUpRightIcon className="actionIcon" /></span></Link>
            </div>
            <div className="heroMeta">
              <span><b>01</b> Diseño personalizado</span>
              <span><b>02</b> Pensado para celular</span>
              <span><b>03</b> Proceso sin vueltas</span>
            </div>
          </div>
          <div className="heroVisual reveal delay">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="browserCard">
              <div className="browserTop"><i/><i/><i/><span>ross.digital</span></div>
              <div className="browserContent">
                <span className="miniLabel">TU MARCA ACÁ</span>
                <h3>Una web que<br/>se siente tuya.</h3>
                <div className="mockLine large"/><div className="mockLine"/><div className="mockButton">VER MÁS</div>
              </div>
            </div>
            <div className="phoneCard">
              <span>✦</span>
              <small>INVITE</small>
              <strong>Tu evento<br/>empieza acá.</strong>
              <div className="phoneButton">ABRIR</div>
            </div>
            <div className="spark s1">✦</div><div className="spark s2">✦</div>
          </div>
        </div>
      </section>

      <section className="serviceSplit section">
        <div className="container">
          <SectionTitle eyebrow="DOS LÍNEAS. UNA MISMA IDEA." title="Diseño digital que resuelve." text="Elegí el camino que necesitás hoy. Nosotros nos encargamos de que se vea bien, funcione bien y sea fácil de usar." />
          <div className="serviceGrid">
            <article className="serviceCard darkCard">
              <span className="serviceNumber">01</span>
              <div className="serviceIcon">⌘</div>
              <h3>Webs</h3>
              <p>Para emprendimientos, profesionales, comercios y marcas que necesitan un lugar propio en internet.</p>
              <ul><li>Landing pages</li><li>Sitios institucionales</li><li>Webs personalizadas</li></ul>
              <TrackedLink href={webWa} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ source: "home_web_service" }}>Consultar por mi web <ArrowUpRightIcon className="actionIcon" /></TrackedLink>
            </article>
            <article className="serviceCard violetCard">
              <span className="serviceNumber">02</span>
              <div className="serviceIcon">✦</div>
              <h3>Invitaciones</h3>
              <p>Invitaciones digitales para cumpleaños, XV, bodas, eventos y cualquier momento que quieras compartir.</p>
              <ul><li>Modelos listos</li><li>Diseños temáticos</li><li>Diseños desde cero</li></ul>
              <TrackedLink href={inviteWa} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventData={{ source: "home_invite_service" }}>Quiero mi invitación <ArrowUpRightIcon className="actionIcon" /></TrackedLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="PORTFOLIO" title="Trabajos reales. Identidades distintas." text="No creemos en copiar y pegar una misma estética. Cada proyecto tiene su propio lenguaje." />
          <div className="projectGrid homeProjects">
            {webProjects.map((project) => <ProjectCard key={project.title} {...project} />)}
          </div>
          <div className="sectionAction"><Link className="textLink" href="/portfolio">Ver portfolio completo <ArrowUpRightIcon className="actionIcon" /></Link></div>
        </div>
      </section>

      <section className="section pricingPreview">
        <div className="container">
          <SectionTitle eyebrow="PRECIOS DE LANZAMIENTO" title="Empezar puede ser más simple." text="Paquetes claros para que sepas desde el principio qué estás contratando." center />
          <div className="priceMiniGrid">
            <PricingCard plan={webPlans[0]} ctaHref={webWa} />
            <PricingCard plan={webPlans[1]} ctaHref={webWa} />
            <PricingCard plan={invitePlans[1]} ctaHref={inviteWa} />
          </div>
          <div className="sectionAction double"><Link className="textLink" href="/webs">Ver planes web <ArrowUpRightIcon className="actionIcon" /></Link><Link className="textLink" href="/invitaciones">Ver invitaciones <ArrowUpRightIcon className="actionIcon" /></Link></div>
        </div>
      </section>

      <section className="section processSection" id="proceso">
        <div className="container">
          <SectionTitle eyebrow="PROCESO" title="Sin reuniones eternas. Sin vueltas." text="Un proceso claro para llegar de tu idea a un proyecto publicado." />
          <div className="processGrid">
            {[
              ["01", "Nos contás", "Nos decís qué necesitás, para quién es y qué tenés en mente."],
              ["02", "Propuesta", "Definimos alcance, precio, tiempos y qué material necesitamos."],
              ["03", "Diseñamos", "Armamos la experiencia y ajustamos los detalles con vos."],
              ["04", "Publicamos", "Te entregamos todo listo para usar, compartir o vender."],
            ].map(([n,t,d]) => <article key={n} className="processCard"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section inviteStrip">
        <div className="container">
          <SectionTitle eyebrow="INVITACIONES" title="Un link también puede generar expectativa." text="Diseños que acompañan la temática de tu evento y concentran toda la información en un solo lugar." />
          <div className="inviteStripGrid">
            {inviteProjects.slice(0,4).map((project) => <ProjectCard key={project.title} {...project} portrait />)}
          </div>
          <div className="sectionAction"><Link className="textLink" href="/invitaciones/modelos">Ver catálogo de modelos <ArrowUpRightIcon className="actionIcon" /></Link></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
