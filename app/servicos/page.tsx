"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    name: "Cozinhas Planejadas",
    desc: "Projetamos cozinhas que combinam beleza e funcionalidade. Do corredor à cozinha gourmet, criamos soluções completas com bancadas, armários e ilhas personalizadas.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    items: ["Cozinhas lineares e em L", "Cozinhas com ilha", "Cozinhas gourmet", "Armários sob bancada"],
  },
  {
    name: "Closets",
    desc: "Seu espaço pessoal merece organização impecável e design refinado. Criamos closets com prateleiras, gaveteiros e nichos no tamanho certo para cada peça.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    items: ["Closets femininos e masculinos", "Walk-in closet", "Closets com iluminação LED", "Sapateiras planejadas"],
  },
  {
    name: "Salas e Painéis",
    desc: "Transformamos salas com painéis de TV, estantes, buffets e racks sob medida que viram o centro das atenções de qualquer ambiente.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    items: ["Painéis de TV com ripado", "Estantes e prateleiras", "Buffets e aparadores", "Home theaters"],
  },
  {
    name: "Dormitórios",
    desc: "Guarda-roupas, cabeceiras e criados sob medida que transformam quartos em ambientes aconchegantes e altamente funcionais.",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    items: ["Guarda-roupas com espelho", "Cabeceiras estofadas", "Criados-mudos planejados", "Quartos infantis"],
  },
  {
    name: "Reformas Completas",
    desc: "Renovação total de ambientes: desmontamos o antigo, projetamos o novo e entregamos um espaço completamente transformado.",
    img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    items: ["Reforma de cozinhas", "Reforma de banheiros", "Reforma de dormitórios", "Reforma completa de apartamentos"],
  },
  {
    name: "Projetos Especiais",
    desc: "Home offices, lavabos, areas de serviço, escritórios e qualquer ambiente que precise de móveis planejados e personalizados.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    items: ["Home offices", "Lavabos e banheiros", "Áreas de serviço", "Escritórios corporativos"],
  },
];

export default function Servicos() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "50vh", minHeight: "360px", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=85" alt="Serviços KAZANOVA" fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.75)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 40px", paddingTop: "130px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>O que fazemos</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, color: "var(--cream)" }}>
            Serviços
          </h1>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section-padded">
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {services.map((s, i) => (
            <div key={s.name} className="service-split" style={{ direction: i % 2 !== 0 ? "rtl" : "ltr" }}>
              <div className="service-img" style={{ position: "relative", minHeight: "400px", overflow: "hidden", direction: "ltr" }}>
                <Image src={s.img} alt={s.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-text" style={{ background: "var(--navy-light)", padding: "60px 52px", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
                <p className="section-tag" style={{ marginBottom: "8px" }}>0{i + 1}</p>
                <span className="gold-line" />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 300, marginBottom: "20px" }}>{s.name}</h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#777", lineHeight: 2, marginBottom: "28px" }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-inter)", fontSize: "12px", color: "#666" }}>
                      <span style={{ width: "16px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contato" className="btn-gold" style={{ width: "fit-content" }}>Solicitar Orçamento</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-light)", padding: "80px 40px", textAlign: "center" }}>
        <p className="section-tag" style={{ marginBottom: "12px" }}>Atendemos Joinville e região</p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,48px)", fontWeight: 300, marginBottom: "32px" }}>
          Não encontrou o que procura?<br /><span style={{ color: "var(--gold)" }}>Fale conosco.</span>
        </h2>
        <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="btn-gold">
          Falar no WhatsApp
        </a>
      </section>
    </>
  );
}
