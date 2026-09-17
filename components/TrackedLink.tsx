"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventData?: Record<string, string | number | boolean>;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function TrackedLink({ href, children, className, eventName = "outbound_click", eventData = {}, target, rel, ariaLabel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => track(eventName, { href, ...eventData })}
    >
      {children}
    </a>
  );
}
