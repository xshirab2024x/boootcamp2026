"use client";

import React from "react";
import { motion } from "framer-motion";
import { Language, translations } from "@/constants/translations";

interface TicketsProps {
  lang: Language;
}

export const Tickets: React.FC<TicketsProps> = ({ lang }) => {
  const t = translations[lang].tickets;

  const tickets = [
    {
      type: "Presencial",
      price: "$200",
      theme: "#ff9119",
      border: "border-[#9a7013]",
      bullets: [
        "Welcome kit.",
        "Certificado de participación.",
        "Catering.",
        "Acceso a la transmisión los 2 días de evento.",
        "Networking.",
        "Cena los días 17 y 18.",
        "Interacción en vivo con los educadores.",
        "Traslado ida y vuelta a las instalaciones.",
      ],
    },
    {
      type: "Virtual Argentina",
      price: "$60",
      theme: "#02abfc",
      border: "border-[#006798]",
      bullets: [
        "Welcome kit.",
        "Certificado de participación.",
        "Aperitivos.",
        "Acceso a la transmisión los 2 días de evento.",
        "Disponible en Córdoba (30 cupos) y Mendoza (30 cupos).",
      ],
    },
    {
      type: "Virtual",
      price: "$33",
      theme: "#c029fe",
      border: "border-[#6f368c]",
      points: "30 Puntos",
      bullets: [
        "Certificado de participación.",
        "Acceso a la transmisión los 2 días de evento.",
        "Acceso desde cualquier parte del mundo.",
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 items-center py-20 relative" data-name="precios">
      {/* Figma Background — rotate-[-165.59deg] skew-x-[1.87deg], centered behind section */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          left: "50%",
          top: "40px",
          transform: "translateX(calc(-50% - 11.85px))",
          width: "2224.31px",
          height: "1356.141px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <div style={{ transform: "rotate(-165.59deg) skewX(1.87deg)", position: "relative", width: "2105.447px", height: "852.604px" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              src="/assets/4cadc638deea65e85e997e21ea1f145fc7c824ae.png"
              className="absolute max-w-none"
              style={{ width: "100.61%", height: "112.36%", top: "-.18%", left: "0" }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] md:gap-3 items-center text-center max-w-[819px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[44px] font-bold text-white uppercase leading-[28px] md:leading-normal"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[20px] font-normal text-white md:text-white/80 leading-[24px] md:leading-[28px]"
        >
          {t.subtitle}
        </motion.p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-[24px] md:gap-6 w-full justify-center items-stretch mt-[24px] md:mt-0">
        {tickets.map((ticket, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-[24px] md:gap-6 items-center flex-1 max-w-full md:max-w-[373px] w-full"
          >
            <div className="h-auto md:h-[80px] flex items-center justify-center w-full">
              <h3 className="text-[32px] md:text-[32px] font-bold text-center leading-[40px] md:leading-tight" style={{ color: ticket.theme }}>
                {ticket.type}
              </h3>
            </div>

            <div className={`w-full h-full flex flex-col gap-[32px] md:gap-8 items-center px-4 py-8 md:p-8 rounded-[22px] border-2 ${ticket.border} bg-black/35 backdrop-blur-[80px] shadow-2xl relative overflow-hidden group`}>
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[100px] opacity-20 transition-opacity duration-500 group-hover:opacity-40" style={{ backgroundColor: ticket.theme }} />

              <div className="flex flex-col items-center gap-2 h-[150px] justify-start w-full">
                <span className="text-[18px] text-white/60 uppercase font-medium">{t.regularPrice}</span>
                <span className="text-[72px] font-bold text-white leading-none">{ticket.price}</span>
                {ticket.points && <span className="text-[20px] font-bold text-white mt-1">{ticket.points}</span>}
              </div>

              <div className="w-full h-px bg-white/10 shrink-0" />

              <ul className="flex-1 flex flex-col gap-4 w-full">
                {ticket.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 items-start text-sm md:text-[14px] text-white/90">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full text-[12px] font-bold" style={{ backgroundColor: ticket.theme, color: "#000000" }}>✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full h-[50px] mt-auto rounded-full text-white font-bold text-[16px] transition-all hover:brightness-110 active:scale-95 shadow-lg shrink-0"
                style={{ backgroundColor: ticket.theme, boxShadow: `0 10px 20px -5px ${ticket.theme}33` }}
              >
                {t.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
