"use client";

import { FormEvent, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

const webOptions = ["Landing Express", "Web Negocio", "Web Personalizada"];
const inviteOptions = ["Invitación Modelo", "Invitación Temática", "Invitación Personalizada"];

export function BudgetForm() {
  const [service, setService] = useState("Web");
  const [detail, setDetail] = useState(webOptions[0]);

  const options = useMemo(() => service === "Web" ? webOptions : inviteOptions, [service]);

  function changeService(value: string) {
    setService(value);
    setDetail(value === "Web" ? webOptions[0] : inviteOptions[0]);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const business = String(form.get("business") || "").trim();
    const date = String(form.get("date") || "").trim();
    const budget = String(form.get("budget") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = [
      "Hola! Quiero pedir un presupuesto en Ross Digital Studio.",
      "",
      `Nombre: ${name}`,
      business ? `Marca / evento: ${business}` : "",
      `Servicio: ${service} - ${detail}`,
      date ? `Fecha estimada: ${date}` : "",
      budget ? `Presupuesto estimado: ${budget}` : "",
      message ? `Idea / necesidad: ${message}` : "",
    ].filter(Boolean).join("\n");

    track("budget_form_submit", { service, detail, budget: budget || "sin definir" });
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="budgetForm" onSubmit={onSubmit}>
      <div className="formGrid">
        <label>
          <span>Tu nombre *</span>
          <input name="name" required placeholder="¿Cómo te llamás?" />
        </label>
        <label>
          <span>Marca o evento</span>
          <input name="business" placeholder="Ej. Estudio Ross / Cumple de Emma" />
        </label>
        <label>
          <span>¿Qué necesitás? *</span>
          <select value={service} onChange={(e) => changeService(e.target.value)}>
            <option>Web</option>
            <option>Invitación</option>
          </select>
        </label>
        <label>
          <span>Tipo de proyecto *</span>
          <select value={detail} onChange={(e) => setDetail(e.target.value)}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>¿Para cuándo?</span>
          <input name="date" placeholder="Ej. Octubre / lo antes posible" />
        </label>
        <label>
          <span>Presupuesto estimado</span>
          <select name="budget" defaultValue="">
            <option value="">Prefiero conversar</option>
            <option>Hasta $50.000</option>
            <option>$50.000 a $150.000</option>
            <option>$150.000 a $300.000</option>
            <option>$300.000 a $500.000</option>
            <option>Más de $500.000</option>
          </select>
        </label>
      </div>
      <label className="formWide">
        <span>Contanos un poco tu idea</span>
        <textarea name="message" rows={5} placeholder="Qué necesitás, qué estilo tenés en mente, referencias, funcionalidades, temática..." />
      </label>
      <button className="button buttonDark formSubmit" type="submit">
        Enviar consulta por WhatsApp <WhatsAppIcon className="waIcon" />
      </button>
      <p className="formNote">No enviamos tus datos a una base: usamos esta información para preparar el mensaje de WhatsApp.</p>
    </form>
  );
}
