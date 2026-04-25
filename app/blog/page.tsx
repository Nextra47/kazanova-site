"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "5 tendências de cozinhas planejadas para 2024",
    excerpt: "Descubra as cores, materiais e formatos que estão dominando os projetos de cozinha este ano.",
    cat: "Cozinhas",
    date: "15 Mar 2024",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Como organizar um closet pequeno de forma elegante",
    excerpt: "Soluções inteligentes para aproveitar cada centímetro do seu espaço sem abrir mão do estilo.",
    cat: "Closets",
    date: "28 Fev 2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Ripado de madeira: o elemento que transforma qualquer ambiente",
    excerpt: "Entenda por que o ripado de madeira se tornou o favorito dos arquitetos e como aplicar no seu projeto.",
    cat: "Tendências",
    date: "10 Fev 2024",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    title: "Guarda-roupa sob medida: por que vale o investimento?",
    excerpt: "Comparamos o guarda-roupa padrão com o sob medida e os benefícios práticos de cada opção.",
    cat: "Dormitórios",
    date: "25 Jan 2024",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    title: "Home office planejado: produtividade e estilo em um só espaço",
    excerpt: "Como criar um ambiente de trabalho em casa que seja funcional, ergonômico e bonito.",
    cat: "Projetos",
    date: "08 Jan 2024",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  },
  {
    title: "Antes e depois: reforma completa de apartamento em Joinville",
    excerpt: "Acompanhe a transformação de um apartamento de 80m² com móveis sob medida da KAZANOVA.",
    cat: "Reformas",
    date: "20 Dez 2023",
    img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "50vh", minHeight: "360px", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=85" alt="Blog KAZANOVA" fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.75)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 40px", paddingTop: "130px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>Inspiração e dicas</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, color: "var(--cream)" }}>
            Blog
          </h1>
        </div>
      </section>

      {/* POST DESTAQUE */}
      <section className="section-padded">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Artigo em destaque</p>
          <span className="gold-line" />
          <div className="grid-featured" style={{ marginTop: "32px" }}>
            <div style={{ position: "relative", minHeight: "440px", overflow: "hidden" }}>
              <Image src={featured.img} alt={featured.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ background: "var(--navy-light)", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)" }}>{featured.cat}</span>
                <span style={{ width: "1px", height: "12px", background: "#333" }} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#555" }}>{featured.date}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 300, lineHeight: 1.3, marginBottom: "20px" }}>{featured.title}</h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#666", lineHeight: 2, marginBottom: "36px" }}>{featured.excerpt}</p>
              <Link href="/blog" className="btn-gold" style={{ width: "fit-content" }}>Ler artigo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE POSTS */}
      <section className="section-padded-b">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Últimos artigos</p>
          <span className="gold-line" style={{ marginBottom: "40px" }} />
          <div className="grid-3col">
            {rest.map((p) => (
              <div key={p.title} style={{ background: "var(--navy-light)", cursor: "pointer", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }} />
                </div>
                <div style={{ padding: "28px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "14px" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)" }}>{p.cat}</span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#444" }}>{p.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, lineHeight: 1.4, marginBottom: "12px" }}>{p.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#555", lineHeight: 1.8 }}>{p.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
