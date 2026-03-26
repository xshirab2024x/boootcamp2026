"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Language, translations } from "@/constants/translations";
import { EDUCATORS } from "@/constants/design";

interface CountdownProps {
  lang: Language;
}

export const Countdown: React.FC<CountdownProps> = ({ lang }) => {
  const t = translations[lang].countdown;
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      // In a real app we would use a specific end date
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-visible py-10" data-name="Countdown + educadores">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-[rgba(255,255,255,0.14)] md:bg-white/10 border border-white rounded-[8px] md:rounded-[20px] py-[10px] px-4 md:px-[60px] md:py-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm"
      >
        {/* Timer Part */}
        <div className="flex gap-[29px] md:gap-12 items-start justify-center w-full md:w-auto text-white">
          {[
            { label: t.days, value: timeLeft.days },
            { label: t.hours, value: timeLeft.hours },
            { label: t.minutes, value: timeLeft.minutes },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-[10px]">
              <span className="text-[40px] md:text-[40px] font-semibold leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[20px] md:text-[20px] font-normal font-inter">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Educators Cluster */}
        <div className="relative h-[110px] w-full md:w-[300px]">
          {EDUCATORS.map((src, i) => {
            // Figma positions are overlapping in a specific way
            const positions = [
                "left-[44px] top-0",
                "left-[132px] top-0",
                "left-[88px] top-[42px]",
                "left-[220px] top-0",
                "left-[176px] top-[42px]",
                "left-0 top-[42px]",
            ];
            const gradients = [
                "from-[#21d9ff] to-[#306795] border-[#006798]",
                "from-[#00eec1] to-[#00886e] border-[#006798]",
                "from-[#21d9ff] to-[#306795] border-[#006798]",
                "from-[#ffda6b] to-[#ab7605] border-[#9a7013]",
                "from-[#eb845d] to-[#4f0700] border-[#4f0700]",
                "from-[#393939] to-[#0c0e0e] border-[#222525]",
            ];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`absolute ${positions[i]} w-[65px] h-[65px] rounded-[13px] border bg-gradient-to-b overflow-hidden shadow-xl ${gradients[i]}`}
              >
                <img
                  src={src}
                  alt={`Educador ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
