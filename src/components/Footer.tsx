"use client";

import React from "react";
import { ASSETS } from "@/constants/design";
import { Language, translations } from "@/constants/translations";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="w-full border-t border-white/10 pt-20 pb-10 bg-black relative" data-name="Footer">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[136px] flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6 max-w-[300px]">
            <div className="relative w-48 h-12">
              <img
                src={ASSETS.logo}
                alt="Bootcamp 2026"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              La experiencia educativa que transformará tu visión de los negocios digitales.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">Legal</h4>
              <ul className="flex flex-col gap-2 text-white/40 text-sm">
                <li><a href="#" className="hover:text-primary-blue transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">Libro de reclamaciones</a></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Síguenos</h4>
            <div className="flex gap-4">
              {[
                { icon: <InstagramIcon />, url: "#" },
                { icon: <FacebookIcon />, url: "#" },
                { icon: <YouTubeIcon />, url: "#" },
                { icon: <LinkedInIcon />, url: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary-blue hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © 2026 Bootcamp. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-white/20 text-xs">
            <span>Power by MINED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
