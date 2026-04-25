"use client";

import Image from "next/image";
import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "var(--cream)",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  padding: "14px 18px",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", ambiente: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "50vh", minHeight: "360px", overflow: "hidden" }}>
        <Image src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1600&q=85" alt="Contato KAZANOVA" fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.78)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "60px 40px", paddingTop: "130px" }}>
          <p className="section-tag" style={{ marginBottom: "12px" }}>Fale conosco</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px,6vw,72px)", fontWeight: 300, color: "var(--cream)" }}>
            Solicite seu Orçamento
          </h1>
        </div>
      </section>

      {/* FORMULÁRIO + INFO */}
      <section className="contact-grid">
        {/* Formulário */}
        <div className="contact-form-col" style={{ padding: "80px 60px" }}>
          <p className="section-tag" style={{ marginBottom: "8px" }}>Orçamento gratuito</p>
          <span className="gold-line" />
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px,3vw,40px)", fontWeight: 300, marginBottom: "40px" }}>
            Conte-nos sobre<br />seu <span style={{ color: "var(--gold)" }}>projeto</span>
          </h2>

          {sent ? (
            <div style={{ background: "var(--navy-light)", padding: "40px", borderLeft: "3px solid var(--gold)", maxWidth: "480px" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, marginBottom: "12px" }}>
                Mensagem <span style={{ color: "var(--gold)" }}>enviada!</span>
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#777", lineHeight: 1.9 }}>
                Obrigado pelo contato! Nossa equipe retornará em até 24 horas. Ou, se preferir, fale agora pelo WhatsApp.
              </p>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: "24px", display: "inline-block" }}>
                Falar no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: "520px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }} />
                <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone / WhatsApp" style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }} />
              </div>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail" style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }} />
              <select name="ambiente" value={form.ambiente} onChange={handleChange} style={{ ...inputStyle, appearance: "none" as const }}
                onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }}>
                <option value="" style={{ background: "#0d1b2a" }}>Qual ambiente?</option>
                {["Cozinha", "Closet", "Sala", "Dormitório", "Reforma Completa", "Outro"].map((o) => (
                  <option key={o} value={o} style={{ background: "#0d1b2a" }}>{o}</option>
                ))}
              </select>
              <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre seu projeto..." rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }} />
              <button type="submit" className="btn-gold" style={{ cursor: "pointer", border: "none" }}>
                Enviar Solicitação
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="contact-info-col" style={{ background: "var(--navy-light)", padding: "80px 52px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
          {[
            {
              title: "WhatsApp",
              content: "Prefere resolver pelo WhatsApp? Clique e fale direto com nossa equipe agora.",
              action: "Iniciar conversa →",
              href: "https://wa.me/5547999999999",
            },
            {
              title: "Localização",
              content: "Joinville, Santa Catarina. Atendemos Joinville e região.",
            },
            {
              title: "Horário de Atendimento",
              content: "Segunda a Sexta: 08h às 18h\nSábado: 08h às 12h",
            },
            {
              title: "Instagram",
              content: "Acompanhe nossos projetos e tendências no Instagram.",
              action: "@kazanova_sob_medida →",
              href: "https://instagram.com/kazanova_sob_medida",
            },
          ].map((info) => (
            <div key={info.title} style={{ borderLeft: "2px solid rgba(201,168,76,0.3)", paddingLeft: "24px" }}>
              <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>{info.title}</h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#666", lineHeight: 1.9, whiteSpace: "pre-line" }}>{info.content}</p>
              {info.action && (
                <a href={info.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "var(--gold)", textDecoration: "none", marginTop: "8px", display: "inline-block" }}>
                  {info.action}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
