"use client";

import React from "react";
import { motion } from "framer-motion";
import { Language } from "@/constants/translations";

interface DatosProps {
  lang: Language;
}

export const Datos: React.FC<DatosProps> = ({ lang }) => {
  return (
    <section className="w-full py-16 px-6" data-name="datos">
      <div className="flex flex-col gap-12 md:gap-[60px] items-center w-full max-w-[841px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-[13px] items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[40px] font-bold text-white uppercase leading-[28px] md:leading-[1.2]"
          >
            ¿Sabías que el aprendizaje digital<br className="hidden md:block"/> es más eficaz que el tradicional?
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-[16px] md:text-[20px] font-normal text-white/90 leading-[24px] md:leading-relaxed max-w-[841px]"
          >
            Este evento educativo es la puerta a tu transformación. Es tu oportunidad de obtener conocimientos prácticos, que podrás aplicar desde el primer día, sin perder tiempo ni recursos.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center relative w-full mt-4">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col gap-2 items-center justify-center p-2 text-center w-full md:w-[309px]"
          >
            <span className="font-bold text-[72px] md:text-[72px] text-[#00bb98] leading-[80px] md:leading-[80px]">
              17%
            </span>
            <span className="font-normal text-[20px] md:text-[20px] text-white">
              más eficaz
            </span>
          </motion.div>

          <div className="hidden md:flex h-[134px] w-px bg-white/20 self-center shrink-0"></div>
          <div className="flex md:hidden w-full max-w-[200px] h-px bg-white/20 self-center shrink-0 my-4 md:my-0"></div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="flex flex-col gap-2 items-center justify-center p-2 text-center w-full md:w-[309px]"
          >
            <span className="font-bold text-[72px] md:text-[72px] text-[#00bb98] leading-[80px] md:leading-[80px]">
              60%
            </span>
            <span className="font-normal text-[20px] md:text-[20px] text-white">
              más retención
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
