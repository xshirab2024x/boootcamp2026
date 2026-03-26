"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { translations } from "@/constants/translations";
import { ASSETS } from "@/constants/design";

interface TestimonialsProps {
  lang: "es" | "en";
}

// Figma-exact data from the design file
const TESTIMONIALS = [
  {
    handle: "@ale.maidana5",
    initial: "A",
    text: "El BOOTCAMP 2024 fue fenomenal, aprendí muchísimo. Gracias a Dios.",
  },
  {
    handle: "@gustavoagredaoficial",
    initial: "G",
    text: "Muy buena, aprendí trading, E-Commerce, educación financiera y más. Realmente aprendí un montón.",
  },
  {
    handle: "@soymarisolcienfuegos",
    initial: "S",
    text: "Fue un crecimiento en equipo, en el mejor evento educativo, Bootcamp. Gracias MINED.",
  },
  {
    handle: "@dannielftoficial",
    initial: "D",
    text: "Feliz y agradecido de poder aprender y compartir con buenos amigos.",
  },
];

// Duplicate for infinite loop
const ALL = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const CARD_W = 320;   // px - made smaller for mobile
const GAP = 24;       // px - smaller gap
const STEP = CARD_W + GAP; // total per card
const LOOP_WIDTH = TESTIMONIALS.length * STEP;

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = translations[lang].testimonials;
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartVal = useRef(0);

  const formatQuote = ASSETS.quoteIcon; 
  const formatQuote1 = "/assets/10623ddc70534dc2732b73c0061d91d4968bc035.svg";

  // Auto-scroll
  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;
    let next = x.get() - (delta / 1000) * 50;
    if (next <= -LOOP_WIDTH) next += LOOP_WIDTH;
    x.set(next);
  });

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartVal.current = x.get();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    let next = dragStartVal.current + (e.clientX - dragStartX.current);
    if (next > 0) next -= LOOP_WIDTH;
    if (next <= -LOOP_WIDTH) next += LOOP_WIDTH;
    x.set(next);
  };

  const onPointerUp = () => { isDragging.current = false; };

  return (
    <section
      className="w-full flex flex-col gap-[60px] items-center py-20"
      data-name="testimonios"
    >
      {/* Title — Figma: uppercase, 24px/40px bold, center */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bold text-[24px] md:text-[40px] leading-[28px] md:leading-normal text-center text-white uppercase px-4"
      >
        {t.title}
      </motion.p>

      {/* Carousel container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ cursor: isDragging.current ? "grabbing" : "grab", userSelect: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling track */}
        <motion.div
          className="flex items-center"
          style={{ x, gap: `${GAP}px`, width: `${ALL.length * STEP}px` }}
        >
          {ALL.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col gap-4 items-center overflow-hidden p-5 rounded-[16px]"
              style={{
                width: `${CARD_W}px`,
                background: "rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Inner content area = h-[128px] */}
              <div className="flex flex-col gap-4 items-start w-full" style={{ minHeight: "128px" }}>
                {/* Opening quote — rotate-180 */}
                <div className="flex items-center w-full">
                  <div style={{ transform: "rotate(180deg)" }}>
                    <div className="relative size-6">
                      <img alt="" className="absolute block max-w-none size-full" src={formatQuote} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="font-normal leading-5 text-[14px] text-[#a0aec0]">
                    {t.text}
                  </p>
                </div>

                {/* Closing quote — right aligned */}
                <div className="flex items-center justify-end w-full">
                  <div className="relative size-6">
                    <img alt="" className="absolute block max-w-none size-full" src={formatQuote1} />
                  </div>
                </div>
              </div>

              {/* Author row */}
              <div className="flex gap-[10px] items-center w-full">
                {/* Avatar */}
                <div
                  className="flex flex-col items-center justify-center overflow-hidden py-2 rounded-full shrink-0 size-10"
                  style={{ background: "#596b80" }}
                >
                  <span className="font-semibold text-[18px] text-white leading-7">
                    {t.initial}
                  </span>
                </div>
                {/* Handle */}
                <div className="flex flex-col items-start justify-center">
                  <span className="font-semibold text-[14px] text-white leading-5">
                    {t.handle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
