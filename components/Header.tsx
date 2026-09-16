"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = whatsappUrl("Hola! Vi Ross Digital Studio y quería consultar por un proyecto.");

  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Logo />
        <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
          <span />
          <span />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <Link href="/webs" onClick={() => setOpen(false)}>Webs</Link>
          <Link href="/invitaciones" onClick={() => setOpen(false)}>Invitaciones</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/#proceso" onClick={() => setOpen(false)}>Proceso</Link>
          <a className="button buttonDark buttonSmall" href={wa} target="_blank" rel="noreferrer">Pedir presupuesto</a>
        </nav>
      </div>
    </header>
  );
}
