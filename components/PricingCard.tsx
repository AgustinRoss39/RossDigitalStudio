import { WhatsAppIcon } from "./Icons";

type Plan = {
  name: string;
  price: string;
  kicker: string;
  ideal?: string;
  features: string[];
  featured?: boolean;
};

type Props = { plan: Plan; ctaHref: string; ctaLabel?: string };

export function PricingCard({ plan, ctaHref, ctaLabel = "Consultar" }: Props) {
  return (
    <article className={plan.featured ? "pricingCard featured" : "pricingCard"}>
      {plan.featured && <span className="popular">Más elegida</span>}
      <div>
        <span className="eyebrow">{plan.name}</span>
        <h3>{plan.price}</h3>
        <p className="pricingKicker">{plan.kicker}</p>
        {plan.ideal && <p className="pricingIdeal">{plan.ideal}</p>}
      </div>
      <ul>
        {plan.features.map((feature) => <li key={feature}><span>✦</span>{feature}</li>)}
      </ul>
      <a className={plan.featured ? "button buttonViolet" : "button buttonOutline"} href={ctaHref} target="_blank" rel="noreferrer">
        {ctaLabel}
        <span className="iconBubble"><WhatsAppIcon className="waIcon" /></span>
      </a>
    </article>
  );
}
