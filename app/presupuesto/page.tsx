import { BudgetForm } from "@/components/BudgetForm";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "Pedir presupuesto",
  description: "Contanos qué necesitás y armamos una consulta lista para enviar por WhatsApp.",
};

export default function PresupuestoPage() {
  return (
    <>
      <section className="portfolioHero compactHero">
        <div className="container">
          <span className="eyebrow">PRESUPUESTO</span>
          <h1>Contanos tu idea.<br/><em>Ordenamos el resto.</em></h1>
          <p>Completá lo esencial y te llevamos a WhatsApp con el mensaje armado para que la consulta sea más rápida y clara.</p>
        </div>
      </section>
      <section className="section altSection">
        <div className="container budgetWrap">
          <SectionTitle eyebrow="EMPECEMOS" title="Unos datos y listo." text="No hace falta tener todo resuelto. Con una idea general ya podemos orientarte." />
          <BudgetForm />
        </div>
      </section>
    </>
  );
}
