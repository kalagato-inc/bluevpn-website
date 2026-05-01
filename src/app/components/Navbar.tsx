"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import { useState } from "react";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";
import ShinyText from "@/app/components/ui/ShinyText";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageSelector } from "@/app/components/LanguageSelector";

export function Navbar() {
  const { t } = useLanguage();
  const navItems = [
    {
      name: t.nav.features,
      link: "/#features",
    },
    {
      name: t.nav.blogs,
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <HoverBorderGradient
              containerClassName="rounded-full shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"
              as="a"
              href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 text-white text-sm font-semibold flex items-center gap-2 px-6 py-2.5"
            >
              <ShinyText text={t.nav.download} disabled={false} speed={2} className="text-white" />
            </HoverBorderGradient>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-slate-300 hover:text-white font-[Space_Grotesk] px-4 py-2 block">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4 px-4">
              <div className="flex justify-start">
                 <LanguageSelector />
              </div>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full justify-center">
                {t.nav.login}
              </NavbarButton>
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="a"
                href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 text-white text-base font-semibold w-full flex items-center justify-center gap-2 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShinyText text={t.nav.download} disabled={false} speed={2} className="text-white" />
              </HoverBorderGradient>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}
