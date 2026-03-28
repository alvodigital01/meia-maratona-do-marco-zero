"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation, registrationUrl } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/icons";

type HeaderVariant = "solid" | "floating" | "sport";

const HEADER_VARIANT: HeaderVariant = "solid";

const variantClasses: Record<
  HeaderVariant,
  {
    shellBase: string;
    shellScrolled: string;
    shellTop: string;
    inner: string;
    logoBox: string;
    nav: string;
    cta: string;
    mobileButton: string;
  }
> = {
  solid: {
    shellBase: "mx-auto max-w-7xl border rounded-[1.15rem]",
    shellScrolled: "border-white/12 bg-[rgba(8,14,25,0.94)] shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl",
    shellTop: "border-white/10 bg-[rgba(8,14,25,0.9)] shadow-[0_12px_32px_rgba(0,0,0,0.2)] backdrop-blur-lg",
    inner: "px-4 py-2.5 sm:px-6 lg:px-8",
    logoBox: "border-white/14 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
    nav: "text-white/74 hover:text-white hover:bg-white/[0.06] hover:border-white/10",
    cta: "bg-gold text-midnight hover:bg-[#ffd05d]",
    mobileButton: "border-white/12 bg-white/10 text-white"
  },
  floating: {
    shellBase: "mx-auto max-w-7xl border rounded-[1.8rem]",
    shellScrolled: "border-white/12 bg-[rgba(7,13,24,0.86)] shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl",
    shellTop: "border-white/10 bg-[linear-gradient(180deg,rgba(7,13,24,0.78),rgba(7,13,24,0.64))] shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl",
    inner: "px-4 py-2.5 sm:px-6 lg:px-8",
    logoBox: "border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
    nav: "text-white/80 hover:text-white hover:bg-white/[0.06] hover:border-white/10",
    cta: "bg-gold text-midnight hover:bg-[#ffd05d]",
    mobileButton: "border-white/12 bg-white/10 text-white"
  },
  sport: {
    shellBase: "mx-auto max-w-7xl border rounded-[1.25rem]",
    shellScrolled: "border-electric/20 bg-[linear-gradient(90deg,rgba(5,16,34,0.96),rgba(9,24,49,0.92))] shadow-[0_24px_64px_rgba(0,43,122,0.28)] backdrop-blur-xl",
    shellTop: "border-electric/18 bg-[linear-gradient(90deg,rgba(5,16,34,0.9),rgba(9,24,49,0.82))] shadow-[0_16px_40px_rgba(0,43,122,0.22)] backdrop-blur-lg",
    inner: "px-4 py-2 sm:px-6 lg:px-8",
    logoBox: "border-electric/20 bg-[linear-gradient(180deg,rgba(0,91,255,0.22),rgba(255,255,255,0.06))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]",
    nav: "text-white/76 hover:text-gold hover:bg-white/[0.05] hover:border-electric/12",
    cta: "bg-gold text-midnight hover:bg-[#ffd05d] shadow-[0_14px_34px_rgba(245,180,0,0.18)]",
    mobileButton: "border-electric/18 bg-electric/12 text-white"
  }
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const variant = variantClasses[HEADER_VARIANT];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className={`${variant.shellBase} ${scrolled ? variant.shellScrolled : variant.shellTop} transition-all duration-300`}>
        <div className={`mx-auto flex items-center justify-between ${variant.inner}`}>
          <Link href="#top" className="group flex items-center gap-3" aria-label="Voltar ao topo">
            <span className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border p-2 ${variant.logoBox}`}>
              <Image
                src="/images/mz-mark.png"
                alt="Logo da Meia Maratona do Marco Zero"
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                sizes="48px"
                priority
              />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-xs uppercase tracking-[0.32em] text-gold">2ª edição</span>
              <span className="block font-display text-[1.02rem] font-bold uppercase tracking-[0.08em] text-white">
                Meia Maratona do Marco Zero
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-3 lg:flex" aria-label="Principal">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${variant.nav} group relative inline-flex items-center rounded-full border border-transparent px-4 py-2 font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="pointer-events-none absolute inset-x-4 bottom-[0.38rem] h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className={`${variant.cta} inline-flex items-center rounded-full px-5 py-2.5 font-display text-sm font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-midnight`}
            >
              Inscreva-se agora
            </a>
          </div>

          <button
            type="button"
            className={`${variant.mobileButton} inline-flex rounded-full border p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur lg:hidden`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(10,15,26,0.98),rgba(10,15,26,0.96))] px-4 pb-6 pt-4 backdrop-blur-2xl sm:px-6">
            <nav className="flex flex-col gap-4" aria-label="Principal mobile">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white/82 transition hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex justify-center rounded-full bg-gold px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-midnight"
              >
                Inscreva-se agora
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}