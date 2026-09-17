import { notFound } from "next/navigation";
import { webProjects } from "@/lib/data";
import { TrackedLink } from "@/components/TrackedLink";
import { ArrowUpRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return webProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = webProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = webProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="portfolioHero caseHero">
        <div className="container">
          <span className="eyebrow">{project.type}</span>
          <h1>{project.title}<br/><em>Diseño con intención.</em></h1>
          <p>{project.description}</p>
          <TrackedLink
            className="button buttonDark"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            eventName="portfolio_live_click"
            eventData={{ project: project.slug }}
          >
            Ver sitio online <ArrowUpRightIcon className="actionIcon" />
          </TrackedLink>
        </div>
      </section>

      <section className="section altSection">
        <div className="container casePreviewWrap">
          <div className="caseBrowser">
            <div className="livePreviewBar"><i/><i/><i/><span>{project.title}</span></div>
            <iframe src={project.previewUrl} title={`Vista previa de ${project.title}`} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container caseStudyGrid">
          <article>
            <span className="eyebrow">OBJETIVO</span>
            <h2>Qué necesitaba resolver.</h2>
            <p>{project.objective}</p>
          </article>
          <article>
            <span className="eyebrow">SOLUCIÓN</span>
            <h2>Cómo lo llevamos a web.</h2>
            <p>{project.solution}</p>
          </article>
        </div>
        <div className="container caseHighlights">
          {project.highlights.map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>
    </>
  );
}
