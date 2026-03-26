"use client";

import React from "react";
import { motion } from "framer-motion";
import { ASSETS } from "@/constants/design";

export const Header: React.FC = () => {
  return (
    <div
      className="relative w-full flex flex-col gap-6 items-start overflow-visible"
      data-name="Header"
    >
      {/* Background image — absolute to header only, right-aligned, Figma rotation on inner div */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-916px",
          right: "-605px",
          width: "1843px",
          height: "1962px",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ transform: "rotate(51.39deg)", width: "1732px", height: "975px", position: "absolute", right: "-180px" }}>
          <img
            src={ASSETS.background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="relative flex flex-col gap-[14px] md:gap-6 items-start pt-[234px] pb-[40px] md:py-[140px]"
        style={{ minHeight: "518px", zIndex: 20 }}
      >
        {/* Logo */}
        <div className="w-[309px] h-[60px] md:w-[619px] md:h-[121px] relative">
          <img
            src={ASSETS.logo}
            alt="Bootcamp 2026"
            className="w-full h-full object-contain object-left"
          />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-[14px] md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] text-white drop-shadow-md md:drop-shadow-none"
          >
            <p>La experiencia que potencia tu</p>
            <p>formación en negocios digitales.</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[20px] md:text-[32px] font-normal text-white uppercase"
          >
            17 AL 18 DE ABRIL
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full md:w-[302px] mt-[18px] md:mt-0 h-[50px] bg-[#02abfc] border-2 border-[#006798] text-white rounded-[40px] font-bold text-[16px] tracking-[-0.304px] flex items-center justify-center"
        >
          Obtén tu entrada aquí
        </motion.button>
      </div>
    </div>
  );
};
