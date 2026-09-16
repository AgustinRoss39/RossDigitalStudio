import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Ross Digital Studio - Inicio">
      <span className="brandMark">R<span>✦</span></span>
      <span className="brandText">ROSS DIGITAL STUDIO</span>
    </Link>
  );
}
