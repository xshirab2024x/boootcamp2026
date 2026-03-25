"use client";

import React from "react";
import { motion } from "framer-motion";
import { Language, translations } from "@/constants/translations";

interface SponsorsProps {
  lang: Language;
}

const LOGOS = [
  { name: "Impulse", src: "/assets/5959128f4eb12e1c784ca1a0bbee4f668dfc2a6d.png", width: 200, height: 60 },
  { name: "FWP", src: "/assets/708eebaaa8ac19f6a8f0b0722b8cc25a08a58c05.png", width: 120, height: 50 },
  { name: "World Binary", src: "/assets/43c765cd55d4877a7a62396581d76fd8ff3cc605.png", width: 140, height: 60 },
  { name: "Prtus", src: "/assets/efddaeab339e14193c9d911952598cc0514dc469.png", width: 180, height: 50 },
];

export const Sponsors: React.FC<SponsorsProps> = ({ lang }) => {
  const t = translations[lang].sponsors;

  return (
    <section className="bg-gradient-to-r from-accent-blue-dark to-primary-blue py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em]"
        >
          {t.title}
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale brightness-200">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
            >
             <div className="relative w-32 h-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src={logo.src}
                alt="Sponsor"
                className="w-full h-full object-contain"
              />
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
