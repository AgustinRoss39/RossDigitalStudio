import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { CTA } from "@/components/CTA";
import { ArrowUpRightIcon } from "@/components/Icons";
import { inviteProjects, webProjects } from "@/lib/data";

export const metadata = { title: "Portfolio", description: "Portfolio de páginas web e invitaciones digitales de Ross Digital Studio." };

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolioHero">
        <div className="container">
          <span className="eyebrow">PORTFOLIO</span>
          <h1>Diseños distintos.<br/><em>La misma atención al detalle.</em></h1>
          <p>Una selección de proyectos reales desarrollados para negocios, marcas y eventos. En las webs podés entrar al caso de estudio para ver objetivo, decisiones y resultado.</p>
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
          <SectionTitle eyebrow="INVITACIONES" title="Invitaciones digitales" text="Estamos renovando los modelos anteriores. El catálogo queda preparado para ir reemplazándolos a medida que terminemos las nuevas versiones." />
          <div className="inviteGallery">{inviteProjects.slice(0,4).map((p) => <ProjectCard key={p.title} {...p} portrait />)}</div>
          <div className="sectionAction"><Link className="textLink" href="/invitaciones/modelos">Ver catálogo completo <ArrowUpRightIcon className="actionIcon" /></Link></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
