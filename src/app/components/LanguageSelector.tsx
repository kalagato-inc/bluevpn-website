"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage, languages } from "@/app/context/LanguageContext";
import clsx from "clsx";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all font-[Space_Grotesk] text-slate-300 hover:text-white hover:bg-white/5"
      >
        <Globe size={16} />
        <span>{currentLanguage.localName}</span>
        <ChevronDown size={14} className={clsx("transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-md shadow-xl py-1 z-50"
          >
            <div className="flex flex-col">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "flex items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                    language === lang.code
                      ? "bg-blue-600/10 text-blue-400 font-medium"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="font-[Space_Grotesk]">{lang.localName}</span>
                  {language === lang.code && <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
