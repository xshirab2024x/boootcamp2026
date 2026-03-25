"use client";

import React from "react";
import { motion } from "framer-motion";
import { translations } from "@/constants/translations";
import { SPEAKERS } from "@/constants/design";

interface ExpositoresProps {
  lang: "es" | "en";
}

export const Expositores: React.FC<ExpositoresProps> = ({ lang }) => {
  const t = translations[lang].expositores;

  return (
    <section className="w-full flex flex-col gap-12 items-center" data-name="Expositores">
      <div className="flex flex-col gap-3 items-center text-center max-w-[765px]">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-xl font-bold text-accent-cyan uppercase"
        >
          {t.subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[40px] font-bold text-white leading-tight uppercase"
        >
          {t.title}
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {SPEAKERS.map((speaker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col gap-4 items-center group w-[274px] overflow-hidden"
          >
            <div className="relative w-full aspect-[246/337] flex flex-col items-center justify-end">
              <div className={`absolute bottom-0 w-[246px] h-[220px] rounded-[13px] border border-white/5 bg-gradient-to-b ${speaker.theme} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative w-[246px] h-[337px] z-10 overflow-hidden rounded-[13px]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-1 z-20">
              <h3 className="text-xl md:text-[24px] font-bold text-white leading-tight">
                {speaker.name}
              </h3>
              <p className="text-sm md:text-[16px] text-white/60">
                {speaker.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
