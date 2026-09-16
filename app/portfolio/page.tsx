import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { CTA } from "@/components/CTA";
import { inviteProjects, webProjects } from "@/lib/data";

export const metadata = { title: "Portfolio", description: "Portfolio de páginas web e invitaciones digitales de Ross Digital Studio." };

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolioHero">
        <div className="container">
          <span className="eyebrow">PORTFOLIO</span>
          <h1>Diseños distintos.<br/><em>La misma atención al detalle.</em></h1>
          <p>Una selección de proyectos reales desarrollados para negocios, marcas y eventos.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="WEBS" title="Proyectos web" text="Diseñados para comunicar, ordenar información y convertir visitas en consultas." />
          <div className="projectGrid">{webProjects.map((p) => <ProjectCard key={p.title} {...p} />)}</div>
        </div>
      </section>
      <section className="section altSection">
        <div className="container">
          <SectionTitle eyebrow="INVITACIONES" title="Invitaciones digitales" text="Diseños temáticos y personalizados listos para compartir desde el celular." />
          <div className="inviteGallery">{inviteProjects.map((p) => <ProjectCard key={p.title} {...p} portrait />)}</div>
        </div>
      </section>
      <CTA />
    </>
  );
}
