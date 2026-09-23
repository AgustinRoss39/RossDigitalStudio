import Link from "next/link";

type Props = {
  slug?: string;
  title: string;
  type: string;
  tags: string[];
  description?: string;
  href?: string;
  previewUrl?: string;
  theme?: string;
  portrait?: boolean;
};

export function ProjectCard({ slug, title, type, tags, description, href, previewUrl, theme = "violet", portrait }: Props) {
  const isInvitation = Boolean(portrait && href);
  const body = (
    <article className={portrait ? "projectCard inviteCard" : "projectCard"}>
      <div className={portrait ? `projectImage portrait theme-${theme}` : "projectImage"}>
        {previewUrl ? (
          <div className={portrait ? "livePreview livePreviewPortrait" : "livePreview"} aria-hidden="true">
            <div className="livePreviewBar"><i/><i/><i/><span>{title}</span></div>
            <iframe src={previewUrl} title={`Vista previa de ${title}`} loading="lazy" tabIndex={-1} />
          </div>
        ) : (
          <div className="invitePreview" aria-hidden="true">
            <span className="invitePreviewSpark">✦</span>
            <small>INVITACIÓN DIGITAL</small>
            <strong>{title}</strong>
            <div className="invitePreviewLine" />
            <span className="invitePreviewButton">VER MODELO</span>
          </div>
        )}
        {previewUrl && (slug || href) && (
          <div className="projectOverlay">
            <span>{isInvitation ? "Ver invitación ↗" : "Ver caso de estudio ↗"}</span>
          </div>
        )}
      </div>
      <div className="projectBody">
        <div>
          <span className="eyebrow">{type}</span>
          <h3>{title}</h3>
        </div>
        {description && <p>{description}</p>}
        <div className="tagList">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );

  if (isInvitation && href) {
    return <a className="projectLink" href={href} target="_blank" rel="noreferrer" aria-label={`Abrir invitación ${title}`}>{body}</a>;
  }

  if (slug && previewUrl) return <Link className="projectLink" href={`/portfolio/${slug}`}>{body}</Link>;
  if (href) return <a className="projectLink" href={href} target="_blank" rel="noreferrer">{body}</a>;
  return body;
}
