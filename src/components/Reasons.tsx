"use client";

import React from "react";
import { motion } from "framer-motion";
import { Language, translations } from "@/constants/translations";

interface ReasonsProps {
  lang: Language;
}

export const Reasons: React.FC<ReasonsProps> = ({ lang }) => {
  const t = translations[lang].reasons;

  const reasons = [
    {
      title: t.items[0].title,
      description: t.items[0].description,
      icon: "/assets/3d4b1282f08fc58cde35f14d5ff25a18fb7ce8e7.svg",
      color: "bg-[#ff6a69]",
    },
    {
      title: t.items[1].title,
      description: t.items[1].description,
      icon: "/assets/d3fa9ceb0bbabb0c9575bef7992a52025323298b.svg",
      color: "bg-[#b465dc]",
    },
    {
      title: t.items[2].title,
      description: t.items[2].description,
      icon: "/assets/4b33c8fc4d05cd61280237b3906fd45dc3382dca.svg",
      color: "bg-[#ff9050]",
    },
    {
      title: t.items[3].title,
      description: t.items[3].description,
      icon: "/assets/dbd59a3b9afc7a56f43e9a97909def1a95f8bbac.svg",
      color: "bg-[#00886e]",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-[21px] md:gap-10 items-center py-0 md:py-20" data-name="Razones">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[24px] md:text-[40px] font-semibold md:font-bold text-white text-center uppercase leading-[28px] md:leading-normal"
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-6 w-full max-w-[1168px]">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-4 items-start p-6 rounded-[20px] bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <div className={`p-2 rounded-lg ${reason.color} w-[54px] h-[54px] flex items-center justify-center`}>
              <div className="relative w-10 h-10">
                <img src={reason.icon} alt={reason.title} className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="w-full h-px bg-white/10 my-2" />

            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] md:text-[20px] font-bold text-white leading-[1.2]">
                {reason.title}
              </h3>
              <p className="text-[16px] md:text-[16px] text-white/80 md:text-white/60 leading-[24px]">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
