"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-light-gray"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="relative -my-16 -ml-16 shrink-0">
          <Image
            src="/PersonalLogo.png"
            alt="AJ Sottile"
            width={1280}
            height={720}
            className={cn(
              "h-40 w-auto transition-all duration-300",
              scrolled ? "invert mix-blend-multiply" : "mix-blend-screen"
            )}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-coral",
                scrolled ? "text-near-black/70" : "text-white/80"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            title="Download Resume (PDF)"
            className="rounded-full bg-coral px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-navy"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-navy" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-light-gray bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-near-black/70 transition-colors hover:text-coral"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                title="Download Resume (PDF)"
                className="w-fit rounded-full bg-coral px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-navy"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
