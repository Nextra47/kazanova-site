"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const values = [
  { title: "Qualidade", desc: "Usamos apenas materiais selecionados com acabamento impecável em cada detalhe." },
  { title: "Pontualidade", desc: "Cumprimos prazos porque sabemos que seu tempo é tão precioso quanto o nosso." },
  { title: "Personalização", desc: "Cada projeto é único. Ouvimos, projetamos e fabricamos exatamente o que você imagina." },
  { title: "Fabricação Própria", desc: "Controlamos todo o processo internamente, garantindo qualidade do início ao fim." },
];

const process = [
  { num: "01", title: "Visita e Briefing", desc: "Visitamos o espaço, medimos e entendemos suas necessidades e estilo." },
  { num: "02", title: "Projeto 3D", desc: "Criamos uma visualização completa do ambiente com seus novos móveis." },
  { num: "03", title: "Fabricação", desc: "Produzimos tudo em nossa marcenaria própria em Joinville." },
  { num: "04", title: "Instalação", desc: "Nossa equipe instala com cuidado e atenção a cada detalhe." },
];

export default function Sobre() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "60vh", minHeight: "400px", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=85" alt="Marcenaria KAZANOVA" fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.75)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 40px", paddingTop: "130px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>Nossa história</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, lineHeight: 1.1, color: "var(--cream)" }}>
            Quem somos
          </h1>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="grid-2col" style={{ minHeight: "500px" }}>
        <div className="about-text-pad" style={{ background: "var(--navy-light)", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="section-tag">Desde 2009</p>
          <span className="gold-line" />
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, lineHeight: 1.3, marginBottom: "28px" }}>
            Uma história construída<br />móvel a <span style={{ color: "var(--gold)" }}>móvel</span>
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#888", lineHeight: 2, marginBottom: "20px" }}>
            A KAZANOVA nasceu em Joinville, Santa Catarina, com um propósito simples: fazer móveis que as pessoas amem por anos. Fundada em 2009, a empresa cresceu construindo uma reputação sólida baseada em qualidade, honestidade e atenção ao detalhe.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#888", lineHeight: 2 }}>
            Hoje, com mais de 500 projetos entregues e 15 anos de experiência, somos referência em marcenaria sob medida em Joinville e região, atendendo famílias que buscam ambientes únicos e funcionais.
          </p>
        </div>
        <div style={{ position: "relative", minHeight: "400px" }}>
          <Image src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80" alt="Processo de fabricação" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      {/* VALORES */}
      <section className="section-padded">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="section-tag">Nossos pilares</p>
          <span className="gold-line" />
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, marginBottom: "56px" }}>
            O que nos <span style={{ color: "var(--gold)" }}>diferencia</span>
          </h2>
          <div className="grid-4col">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{ background: "var(--navy-light)", padding: "40px 32px", borderTop: "2px solid var(--gold)", height: "100%" }}>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "var(--gold)", letterSpacing: "2px", marginBottom: "16px" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "24px", fontWeight: 300, color: "var(--cream)", marginBottom: "16px" }}>{v.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#666", lineHeight: 1.9 }}>{v.desc}</p>
              </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section-padded" style={{ background: "var(--navy-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="section-tag">Como trabalhamos</p>
          <span className="gold-line" />
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 300, marginBottom: "56px" }}>
            Do projeto à <span style={{ color: "var(--gold)" }}>entrega</span>
          </h2>
          <div className="grid-4col" style={{ gap: "40px" }}>
            {process.map((p) => (
              <div key={p.num}>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "56px", fontWeight: 300, color: "rgba(201,168,76,0.2)", lineHeight: 1, marginBottom: "16px" }}>{p.num}</div>
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "var(--cream)", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#666", lineHeight: 1.9 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICAÇÃO */}
      <section style={{ position: "relative", minHeight: "440px", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80" alt="Marcenaria própria" fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.82)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 40px" }}>
          <div style={{ maxWidth: "560px" }}>
            <p className="section-tag" style={{ marginBottom: "16px" }}>Nosso diferencial</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>
              Fabricação <span style={{ color: "var(--gold)" }}>100% própria</span><br />em Joinville
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#888", lineHeight: 2 }}>
              Nossa marcenaria fica em Joinville e é equipada com tecnologia de ponta. Controlamos cada etapa — do corte ao acabamento — garantindo qualidade e agilidade que terceirizados não conseguem oferecer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-light)", padding: "80px 40px", textAlign: "center" }}>
        <p className="section-tag" style={{ marginBottom: "12px" }}>Pronto para começar?</p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,48px)", fontWeight: 300, marginBottom: "32px" }}>
          Fale com a nossa <span style={{ color: "var(--gold)" }}>equipe</span>
        </h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/contato" className="btn-gold">Solicitar Orçamento</Link>
          <Link href="/portfolio" className="btn-outline">Ver Portfólio</Link>
        </div>
      </section>
    </>
  );
}
