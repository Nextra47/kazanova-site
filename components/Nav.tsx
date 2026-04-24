"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "Sobre", href: "/sobre" },
  { num: "03", label: "Portfólio", href: "/portfolio" },
  { num: "04", label: "Serviços", href: "/servicos" },
  { num: "05", label: "Blog", href: "/blog" },
  { num: "06", label: "Contato", href: "/contato" },
  { num: "07", label: "Solicite Orçamento", href: "/contato", highlight: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Topbar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          height: "72px",
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(7,15,24,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "16px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--cream)",
            }}
          >
            <span style={{ color: "var(--gold)" }}>KA</span>ZANOVA{" "}
            <span
              style={{
                fontSize: "9px",
                color: "#666",
                letterSpacing: "3px",
                marginLeft: "4px",
              }}
            >
              SOB MEDIDA
            </span>
          </span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? "16px" : "24px",
                height: "1px",
                background: "var(--cream)",
                transition: "width 0.2s",
              }}
            />
          ))}
        </button>
      </header>

      {/* Overlay escuro */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 150,
          background: "rgba(7,15,24,0.6)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.4s",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Painel lateral */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(420px, 85vw)",
          zIndex: 200,
          background: "rgba(7,15,24,0.98)",
          borderRight: "1px solid rgba(201,168,76,0.12)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.45s cubic-bezier(0.77,0,0.18,1)",
          display: "flex",
          flexDirection: "column",
          padding: "32px 40px 40px",
          overflowY: "auto",
        }}
      >
        {/* Botão fechar */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#888",
            fontSize: "20px",
            lineHeight: 1,
            marginBottom: "48px",
            padding: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          ✕
        </button>

        {/* Itens de menu */}
        <nav style={{ flex: 1 }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href && !item.highlight;
            return (
              <Link
                key={item.num}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    color: "var(--gold)",
                    letterSpacing: "1px",
                    minWidth: "26px",
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "rgba(201,168,76,0.3)",
                    marginRight: "2px",
                  }}
                >
                  /
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "24px",
                    fontWeight: 300,
                    color: item.highlight
                      ? "var(--gold)"
                      : isActive
                      ? "var(--cream)"
                      : "#aaa",
                    letterSpacing: "0.5px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = item.highlight
                      ? "var(--gold-light)"
                      : "var(--cream)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = item.highlight
                      ? "var(--gold)"
                      : isActive
                      ? "var(--cream)"
                      : "#aaa")
                  }
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer do painel */}
        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "24px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "9px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#444",
              marginBottom: "12px",
            }}
          >
            Joinville, Santa Catarina
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Instagram", "WhatsApp"].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#555",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
