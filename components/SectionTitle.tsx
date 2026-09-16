type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, text, center }: Props) {
  return (
    <div className={center ? "sectionTitle center" : "sectionTitle"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
