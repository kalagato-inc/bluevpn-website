"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageSelector } from "@/app/components/LanguageSelector";
import Logo from "@/imports/Frame2147223268";

export function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  // Handle scroll effect for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.features, link: "/#features" },
    { name: t.nav.blogs, link: "/blog" },
  ];

  const useCases = [
    { name: "Streaming", link: "/streaming", icon: "📺" },
    { name: "Gaming", link: "/gaming", icon: "🎮" },
    { name: "Travel", link: "/travel", icon: "✈️" },
    { name: "Remote Work", link: "/remote-work", icon: "💼" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5"
          : "bg-slate-950/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="scale-75 origin-left">
                <Logo />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {/* Use Cases Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setUseCasesOpen(true)}
                onMouseLeave={() => setUseCasesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-[Space_Grotesk]">
                  Use Cases
                  <ChevronDown size={16} className={`transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {useCasesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                      {useCases.map((useCase, index) => (
                        <a
                          key={useCase.name}
                          href={useCase.link}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-[Space_Grotesk] border-b border-white/5 last:border-b-0"
                        >
                          <span className="text-lg">{useCase.icon}</span>
                          {useCase.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 font-[Space_Grotesk]"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right side: Language + Download */}
            <div className="flex items-center gap-3">
              <LanguageSelector />

              <a
                href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 font-[Space_Grotesk]"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                {t.nav.download}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-slate-950/98 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Use Cases Section */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">
                  Use Cases
                </div>
                {useCases.map((useCase) => (
                  <a
                    key={useCase.name}
                    href={useCase.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-base font-medium text-slate-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-white/5 font-[Space_Grotesk]"
                  >
                    <span className="text-lg">{useCase.icon}</span>
                    {useCase.name}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-4" />

              {/* Mobile Nav Links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-white/5 font-[Space_Grotesk]"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Download Button */}
              <a
                href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 font-[Space_Grotesk]"
              >
                <Download size={18} />
                {t.nav.download}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
