"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  index: number;
}

function AnimatedNumber({ value, prefix = "" }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display}</span>;
}

export default function StatCard({ numericValue, suffix, prefix, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group rounded-2xl border border-light-gray bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-2 text-3xl font-bold text-navy md:text-4xl">
        <AnimatedNumber value={numericValue} prefix={prefix} />
        <span>{suffix}</span>
      </div>
      <p className="text-sm text-near-black/60">{label}</p>
    </motion.div>
  );
}
