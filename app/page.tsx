"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";

const stats = [
  { num: 15, suffix: "+", label: "Anos no Mercado" },
  { num: 500, suffix: "+", label: "Projetos Entregues" },
  { num: 100, suffix: "%", label: "Fabricação Própria" },
  { num: 4, suffix: ".9★", label: "Satisfação" },
];

const services = [
  { name: "Cozinhas", desc: "Planejamento funcional e elegante para o coração da sua casa", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { name: "Closets", desc: "Organização e sofisticação para o seu espaço pessoal", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { name: "Salas", desc: "Painéis, estantes e móveis que definem ambientes únicos", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { name: "Dormitórios", desc: "Guarda-roupas e cabeceiras sob medida para seu descanso", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { name: "Reformas", desc: "Renovação completa de ambientes com móveis planejados", img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80" },
  { name: "Projetos", desc: "Da planta ao acabamento — acompanhamento completo", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" },
];

const portfolio = [
  { name: "Cozinha Contemporânea", cat: "Cozinhas", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", big: true },
  { name: "Closet Master Suite", cat: "Closets", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { name: "Painel TV Premium", cat: "Salas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { name: "Suíte Casal", cat: "Dormitórios", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { name: "Home Office", cat: "Projetos", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80" },
];

const testimonials = [
  { text: "A KAZANOVA transformou nossa cozinha num ambiente incrível. Qualidade impecável e prazo cumprido.", author: "Maria S.", city: "Joinville" },
  { text: "Closet dos sonhos! A equipe entendeu exatamente o que eu queria. Recomendo sem hesitar.", author: "João P.", city: "Joinville" },
  { text: "Do projeto à entrega, tudo perfeito. Os móveis valorizaram muito o apartamento.", author: "Ana C.", city: "São Bento do Sul" },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <AnimateIn delay={i * 0.08}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ position: "relative", height: "260px", overflow: "hidden", cursor: "pointer" }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image src={s.img} alt={s.name} fill style={{ objectFit: "cover" }} />
        </motion.div>
        <div className="img-overlay" />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "var(--cream)" }}>{s.name}</div>
          <div style={{ width: "24px", height: "1px", background: "var(--gold)", margin: "10px 0" }} />
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(245,240,235,0.65)", lineHeight: 1.7 }}>{s.desc}</div>
        </div>
      </motion.div>
    </AnimateIn>
  );
}

function PortfolioCard({ p, i }: { p: typeof portfolio[0]; i: number }) {
  return (
    <AnimateIn delay={i * 0.1}>
      <motion.div
        whileHover="hover"
        style={{ position: "relative", overflow: "hidden", height: "100%", cursor: "pointer" }}
      >
        <motion.div
          variants={{ hover: { scale: 1.07 } }}
          transition={{ duration: 0.55 }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0.4 }}
          style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.95) 0%, transparent 55%)" }}
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>{p.cat}</div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: i === 0 ? "22px" : "17px", fontWeight: 300, color: "var(--cream)" }}>{p.name}</div>
        </div>
      </motion.div>
    </AnimateIn>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO com parallax */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-20%", y: heroY }}>
          <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85" alt="Cozinha sob medida KAZANOVA" fill style={{ objectFit: "cover" }} priority />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,27,42,0.93) 45%, rgba(13,27,42,0.25) 100%)" }} />

        <motion.div
          style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 40px", paddingTop: "72px", opacity: heroOpacity }}
        >
          <div style={{ maxWidth: "520px" }}>
            <motion.p
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ marginBottom: "20px" }}
            >
              Joinville · Santa Catarina · Desde 2009
            </motion.p>

            <div style={{ overflow: "hidden" }}>
              {["Móveis que", "transformam", "ambientes"].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
                >
                  <span style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(48px,6vw,80px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: i === 1 ? "var(--gold)" : "var(--cream)",
                  }}>
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(245,240,235,0.7)", lineHeight: 1.9, margin: "20px 0 36px", maxWidth: "400px" }}
            >
              Há 15 anos fabricando móveis sob medida com qualidade, design e condições especiais de pagamento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <Link href="/portfolio" className="btn-gold">Ver Portfólio</Link>
              <Link href="/contato" className="btn-outline">Pedir Orçamento</Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats flutuantes - hidden on mobile via .hero-stats-float */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hero-stats-float"
          style={{ position: "absolute", bottom: "40px", right: "40px" }}
        >
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 300, color: "var(--gold)" }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(245,240,235,0.5)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, var(--gold))" }}
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="stats-grid">
        {stats.map((s, i) => (
          <AnimateIn key={s.label} delay={i * 0.1} direction="up">
            <div style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: 300, color: "var(--gold)" }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#666", marginTop: "6px" }}>{s.label}</div>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* SERVIÇOS */}
      <section className="section-padded">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimateIn>
            <div className="section-header">
              <div>
                <p className="section-tag">O que fazemos</p>
                <span className="gold-line" />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, lineHeight: 1.2 }}>
                  Móveis <span style={{ color: "var(--gold)" }}>sob medida</span><br />para cada ambiente
                </h2>
              </div>
              <Link href="/servicos" style={{ fontFamily: "var(--font-inter)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px", whiteSpace: "nowrap" }}>
                Ver todos os serviços
              </Link>
            </div>
          </AnimateIn>

          <div className="services-grid">
            {services.map((s, i) => <ServiceCard key={s.name} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className="section-padded-b">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimateIn>
            <div className="section-header">
              <div>
                <p className="section-tag">Nosso trabalho</p>
                <span className="gold-line" />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300 }}>
                  Portfólio de <span style={{ color: "var(--gold)" }}>projetos</span>
                </h2>
              </div>
              <Link href="/portfolio" style={{ fontFamily: "var(--font-inter)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px", whiteSpace: "nowrap" }}>
                Ver portfólio completo
              </Link>
            </div>
          </AnimateIn>

          <div className="portfolio-mosaic">
            {portfolio.map((p, i) => (
              <div key={p.name} style={{ gridRow: p.big ? "span 2" : undefined, height: "100%" }}>
                <PortfolioCard p={p} i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE SNIPPET */}
      <section className="about-grid">
        <AnimateIn direction="left" className="about-img" style={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80" alt="Marcenaria KAZANOVA" fill style={{ objectFit: "cover" }} />
          </motion.div>
        </AnimateIn>
        <AnimateIn direction="right" className="about-text-pad" style={{ background: "var(--navy-light)", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="section-tag">Nossa história</p>
          <span className="gold-line" />
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, lineHeight: 1.3, marginBottom: "24px" }}>
            15 anos fazendo<br />móveis sob <span style={{ color: "var(--gold)" }}>medida</span>
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#888", lineHeight: 2, marginBottom: "36px" }}>
            A KAZANOVA nasceu em Joinville com um propósito claro: transformar ambientes com móveis que unem funcionalidade, design e qualidade. Com fabricação própria e uma equipe apaixonada, cada projeto é tratado como único.
          </p>
          <Link href="/sobre" className="btn-gold" style={{ width: "fit-content" }}>Conheça nossa história</Link>
        </AnimateIn>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-padded" style={{ background: "var(--navy-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimateIn>
            <p className="section-tag">O que dizem nossos clientes</p>
            <span className="gold-line" />
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, marginBottom: "56px" }}>
              Histórias de <span style={{ color: "var(--gold)" }}>transformação</span>
            </h2>
          </AnimateIn>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.author} delay={i * 0.15}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "24px" }}
                >
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px", fontWeight: 300, color: "#ccc", lineHeight: 1.9, fontStyle: "italic", marginBottom: "20px" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)" }}>
                    {t.author} — {t.city}
                  </p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ position: "relative", minHeight: "360px", overflow: "hidden" }}>
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1600&q=80" alt="Solicite seu orçamento" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.85)" }} />
        <AnimateIn style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>Vamos começar?</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 300, marginBottom: "12px" }}>
            Seu próximo projeto começa<br />com uma <span style={{ color: "var(--gold)" }}>conversa</span>
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#666", letterSpacing: "1px", marginBottom: "36px" }}>
            Atendemos Joinville e região · Fabricação própria · Condições facilitadas
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contato" className="btn-gold">Solicitar Orçamento Grátis</Link>
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="btn-outline">Falar no WhatsApp</a>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
