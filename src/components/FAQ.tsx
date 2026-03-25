"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/constants/design";

// ── Figma-exact FAQ data ────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "¿Cómo puedo adquirir mis entradas?",
    a: "Si eres alumno de MINED, puedes adquirir tus entradas ingresando con tus credenciales a la oficina virtual. Actualmente contamos con tres modalidades: Virtual Argentina y Presencial Lima, ambas con cupos limitados; y Virtual 100% con participación ilimitada.",
  },
  {
    q: "¿Necesito algún software especial para participar?",
    a: "Para entrada VIRTUAL, solo necesitas un dispositivo con conexión a internet y un navegador actualizado. En la entrada Virtual Argentina, podrás vivir la transmisión desde nuestras oficinas para todos los asistentes. Y si eliges la entrada Presencial, experimentarás el evento directamente en el lugar, siendo parte de la experiencia en vivo.",
  },
  {
    q: "¿Hay algún requisito previo para participar?",
    a: "No es necesario tener experiencia previa, solo ganas de aprender.",
  },
  {
    q: "¿Puedo hacer preguntas durante el evento?",
    a: "Sí, podrás hacer preguntas a los ponentes durante las sesiones interactivas.",
  },
  {
    q: "¿Cómo puedo pagar mi inscripción?",
    a: "Puedes pagar mediante tarjeta de crédito, débito o cryptos.",
  },
  {
    q: "¿Cómo puedo acceder al evento?",
    a: "Si eres alumno MINED, podrás ingresar con tus credenciales de MINED Academy.",
  },
  {
    q: "¿Cuántas dispositivos pueden ingresar con mi credencial?",
    a: "Solo puedes ingresar con un dispositivo por credencial.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="w-full flex flex-col gap-[40px] items-center px-[136px] py-[64px] relative"
      data-name="preguntas frecuentes"
    >
      {/* Background image — Figma: opacity-5, covers entire section */}
      <div className="absolute inset-0 opacity-[0.05] overflow-hidden pointer-events-none">
        <img
          alt=""
          src={ASSETS.bgFaq}
          className="absolute max-w-none"
          style={{ height: "115.31%", left: "0", top: "-1.66%", width: "100%" }}
        />
      </div>

      {/* Title */}
      <div className="relative z-10 flex items-center justify-center">
        <p className="font-bold text-[40px] text-center text-white uppercase w-[559px] leading-[1.208]">
          Preguntas frecuentes
        </p>
      </div>

      {/* Accordion list */}
      <div className="relative z-10 flex flex-col gap-4 w-full max-w-[1240px]">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.button
              key={i}
              onClick={() => toggle(i)}
              className="flex flex-col items-start justify-center px-5 py-4 rounded-[20px] w-full text-left cursor-pointer transition-colors duration-200"
              style={{
                background: "#1c1c1c",
                border: `1px solid ${isOpen ? "#02abfc" : "#dde1e6"}`,
              }}
              whileHover={{ borderColor: "#02abfc" }}
              layout
              transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            >
              {/* Toggle row */}
              <div className="flex items-center w-full gap-6">
                <p className="flex-1 font-bold leading-6 text-[16px] text-white text-left">
                  {item.q}
                </p>

                {/* +/- icon */}
                <motion.div
                  className="shrink-0 w-6 h-6 flex items-center justify-center"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0V14M0 7H14"
                      stroke={isOpen ? "#02abfc" : "#ffffff"}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Answer — animated height */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden w-full"
                  >
                    <p className="pt-6 font-normal leading-6 text-[16px] text-white text-left">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};
