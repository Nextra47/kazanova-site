"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const services = ["Cozinhas", "Closets", "Salas", "Dormitórios", "Reformas", "Projetos"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 40px 32px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr", gap: "48px" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px", letterSpacing: "5px", textTransform: "uppercase", color: "var(--cream)", marginBottom: "16px" }}>
            <span style={{ color: "var(--gold)" }}>KA</span>ZANOVA
          </div>
          <div style={{ width: "36px", height: "2px", background: "var(--gold)", marginBottom: "20px" }} />
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#555", lineHeight: "2", maxWidth: "220px" }}>
            Há 15 anos fazendo móveis na medida do seu sonho. Joinville, Santa Catarina.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "#c9a84c", marginTop: "20px", letterSpacing: "1px" }}>
            @kazanova_sob_medida
          </p>
        </div>

        {/* Navegação */}
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Navegação</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {links.map((l) => (
              <li key={l.href} style={{ marginBottom: "12px" }}>
                <Link href={l.href} style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#555")}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Serviços</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {services.map((s) => (
              <li key={s} style={{ marginBottom: "12px", fontFamily: "var(--font-inter)", fontSize: "12px", color: "#555" }}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>Contato</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Joinville, SC",
              "Seg–Sex: 08h às 18h",
              "Sáb: 08h às 12h",
            ].map((t) => (
              <li key={t} style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#555" }}>{t}</li>
            ))}
            <li>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "var(--gold)", textDecoration: "none" }}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 40px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#333", letterSpacing: "1px" }}>
          © {new Date().getFullYear()} KAZANOVA Móveis Sob Medida. Todos os direitos reservados.
        </p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#333", letterSpacing: "1px" }}>
          Joinville · Santa Catarina
        </p>
      </div>
    </footer>
  );
}
