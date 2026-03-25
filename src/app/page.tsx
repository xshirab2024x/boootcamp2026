"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Countdown } from "@/components/Countdown";
import { Reasons } from "@/components/Reasons";
import { Expositores } from "@/components/Expositores";
import { Tickets } from "@/components/Tickets";
import { Datos } from "@/components/Datos";
import { Testimonials } from "@/components/Testimonials";
import { Sponsors } from "@/components/Sponsors";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ASSETS } from "@/constants/design";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white font-montserrat overflow-x-hidden scroll-smooth selection:bg-primary-blue selection:text-white">

      {/* Main Container with Figma Padding */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[136px] flex flex-col gap-[120px]">
        <Header />
        
        <div className="flex flex-col gap-[120px]">
          {/* Hero is now part of Texto + video node, I'll keep the video section but remove the 'Hero' component as branding is in Header */}
          <SectionTextoVideo />
          <Countdown lang="es" />
          <Reasons lang="es" />
          <Expositores lang="es" />
          <Tickets lang="es" />
          <Datos lang="es" />
          <Testimonials lang="es" />
        </div>
      </div>

      {/* Sections that span full width */}
      <div className="flex flex-col">
        <Sponsors lang="es" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-[136px] w-full">
          <FAQ />
        </div>
        <Footer lang="es" />
      </div>
    </main>
  );
}

// Internal component for the 'Texto + video' section from Figma (since user said simplify Hero)
const SectionTextoVideo = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-48 items-center justify-center py-20" data-name="Texto + video">
      <div className="flex-1 flex flex-col gap-6 items-start">
        <h2 className="text-3xl md:text-[36px] font-bold text-white leading-[44px] max-w-[500px]">
          Domina las habilidades del futuro
        </h2>
        <p className="text-white/80 text-base md:text-[16px] leading-[24px] max-w-[544px]">
          En solo 2 días, conecta con las carreras del mañana y despierta tu potencial con métodos que revolucionarán tu aprendizaje.
        </p>
      </div>

      <div className="relative flex-1 w-full aspect-[1.78] border border-white overflow-hidden group">
        <img
          src={ASSETS.videoPlaceholder}
          alt="Video"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-[110px] h-[110px] flex items-center justify-center">
             <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
