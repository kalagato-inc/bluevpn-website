"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/imports/Frame2147223268";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div className={clsx("fixed top-0 inset-x-0 z-50 w-full pointer-events-none flex justify-center pt-6", className)}>
      <div className="pointer-events-auto w-full max-w-4xl px-4">
        <nav className="w-full rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-blue-900/10 transition-all">
          {children}
        </nav>
      </div>
    </div>
  );
};

export const NavBody = ({ children, className }: NavbarProps) => {
  return (
    <div className={clsx("hidden md:flex h-16 items-center justify-between px-6", className)}>
      {children}
    </div>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className={clsx("flex-shrink-0 cursor-pointer flex items-center", className)}>
       <div className="scale-75 origin-left">
         <Logo />
       </div>
    </a>
  );
};

interface NavItem {
  name: string;
  link: string;
}

export const NavItems = ({ items, className }: { items: NavItem[]; className?: string }) => {
  return (
    <div className={clsx("flex items-center gap-6", className)}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="text-sm font-medium text-slate-400 transition-colors hover:text-white font-[Space_Grotesk] hover:bg-white/5 px-3 py-1.5 rounded-full"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const NavbarButton = ({ children, className, variant = "primary", ...props }: NavbarButtonProps) => {
  const baseStyles = "rounded-full px-5 py-2 text-xs font-bold transition-all font-[Space_Grotesk]";
  const variants = {
    primary: "bg-white text-slate-950 hover:bg-slate-200 shadow-lg shadow-white/5",
    secondary: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export const MobileNav = ({ children, className }: NavbarProps) => {
  return <div className={clsx("md:hidden pointer-events-auto", className)}>{children}</div>;
};

export const MobileNavHeader = ({ children, className }: NavbarProps) => {
  return (
    <div className={clsx("flex h-16 items-center justify-between px-4 bg-slate-950/90 backdrop-blur-md border-b border-white/5 rounded-none md:rounded-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }: { isOpen: boolean; onClick: () => void; className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={clsx("p-2 text-slate-300 hover:text-white", className)}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const MobileNavMenu = ({ isOpen, onClose, children, className }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={clsx("overflow-hidden border-b border-white/10 bg-slate-950 md:rounded-b-3xl", className)}
        >
          <div className="flex flex-col gap-4 p-4 pb-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
