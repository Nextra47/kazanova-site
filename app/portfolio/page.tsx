"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Cozinhas", "Closets", "Salas", "Dormitórios", "Reformas", "Projetos"];

const projects = [
  { name: "Cozinha Contemporânea",  cat: "Cozinhas",    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { name: "Cozinha Clássica",       cat: "Cozinhas",    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80" },
  { name: "Cozinha Gourmet",        cat: "Cozinhas",    img: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80" },
  { name: "Closet Master Suite",    cat: "Closets",     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { name: "Closet Feminino",        cat: "Closets",     img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
  { name: "Closet Casal",           cat: "Closets",     img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" },
  { name: "Painel TV Premium",      cat: "Salas",       img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
  { name: "Sala de Jantar",         cat: "Salas",       img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" },
  { name: "Sala de Estar",          cat: "Salas",       img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
  { name: "Suíte Casal",            cat: "Dormitórios", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80" },
  { name: "Quarto Infantil",        cat: "Dormitórios", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80" },
  { name: "Dormitório Planejado",   cat: "Dormitórios", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80" },
  { name: "Reforma Apartamento",    cat: "Reformas",    img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80" },
  { name: "Reforma Cozinha",        cat: "Reformas",    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { name: "Reforma Completa",       cat: "Reformas",    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80" },
  { name: "Home Office",            cat: "Projetos",    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80" },
  { name: "Banheiro Planejado",     cat: "Projetos",    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" },
  { name: "Área de Serviço",        cat: "Projetos",    img: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80" },
];

export default function Portfolio() {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "50vh", minHeight: "360px", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85"
          alt="Portfólio KAZANOVA" fill style={{ objectFit: "cover" }} priority
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.72)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 40px", paddingTop: "130px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>Nosso trabalho</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, color: "var(--cream)" }}>
            Portfólio
          </h1>
        </div>
      </section>

      {/* FILTROS */}
      <section style={{ padding: "0 40px", background: "var(--navy-light)", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "sticky", top: "72px", zIndex: 50 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "28px", overflowX: "auto" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "18px 0",
              fontFamily: "var(--font-inter)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
              color: active === c ? "var(--gold)" : "#555",
              borderBottom: active === c ? "2px solid var(--gold)" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s", whiteSpace: "nowrap", flexShrink: 0,
            }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section style={{ background: "var(--navy-dark)", padding: "3px" }}>
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(filtered.length, 3)}, 1fr)`,
            gap: "3px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                whileHover="hover"
                style={{ position: "relative", height: "360px", overflow: "hidden", cursor: "pointer" }}
              >
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                </motion.div>

                {/* Overlay só aparece no hover */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.2) 60%)" }}
                />

                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "6px" }}>{p.cat}</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "var(--cream)" }}>{p.name}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-light)", padding: "80px 40px", textAlign: "center" }}>
        <p className="section-tag" style={{ marginBottom: "12px" }}>Gostou do que viu?</p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,48px)", fontWeight: 300, marginBottom: "32px" }}>
          Vamos criar o seu <span style={{ color: "var(--gold)" }}>projeto</span>
        </h2>
        <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Solicitar Orçamento Grátis
        </a>
      </section>
    </>
  );
}
