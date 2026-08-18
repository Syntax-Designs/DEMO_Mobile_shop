import { motion } from "motion/react";
import { ArrowRight, Calculator, ShieldCheck, Truck, CreditCard } from "lucide-react";
import iphone from "@/assets/phone-iphone.png";
import samsung from "@/assets/phone-samsung.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-10 pt-10 sm:pt-16">
      {/* lens flares */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -left-24 top-0 size-72 rounded-full bg-primary/25 blur-[90px]"
        />
        <motion.div
          animate={{ opacity: [0.5, 0.25, 0.5], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -right-16 top-40 size-80 rounded-full bg-accent/30 blur-[100px]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck className="size-3.5" /> Official Sri Lanka Warranty
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Next-Gen Tech,
            <br />
            <span className="gradient-text">Unbeatable Prices.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Official Sri Lanka Warranty | Same-Day Delivery | Easy Installment Plans
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#flagships"
              className="pulse-neon inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-neon)] px-6 font-semibold text-primary-foreground"
            >
              Explore Flagships <ArrowRight className="size-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#compare"
              className="glass inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold text-foreground/90 hover:text-primary"
            >
              <Calculator className="size-4" /> Trade-In Calculator
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Truck className="size-4 text-primary" /> Island-wide express
            </span>
            <span className="inline-flex items-center gap-2">
              <CreditCard className="size-4 text-primary" /> 0% installments
            </span>
          </div>
        </motion.div>

        {/* 3D floating showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            whileHover={{ rotateX: -6, rotateY: 8, scale: 1.03 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="glass-strong relative rounded-3xl p-5"
            style={{ boxShadow: "var(--shadow-float), var(--shadow-violet)", transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-bold">Top Flagships</p>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary">
                LIVE STOCK
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { img: iphone, n: "iPhone 15 Pro Max", p: "LKR 429,900" },
                { img: samsung, n: "Galaxy S24 Ultra", p: "LKR 399,900" },
              ].map((d, idx) => (
                <motion.div
                  key={d.n}
                  animate={{ y: [0, idx === 0 ? -8 : -12, 0] }}
                  transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut" }}
                  className="glass rounded-2xl p-3 text-center"
                >
                  <img
                    src={d.img}
                    alt={d.n}
                    width={900}
                    height={1100}
                    className="mx-auto h-32 w-auto object-contain drop-shadow-[0_18px_30px_oklch(0_0_0/0.6)] sm:h-44"
                  />
                  <p className="mt-2 truncate text-xs font-semibold">{d.n}</p>
                  <p className="gradient-text text-xs font-bold">{d.p}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ["12K+", "Devices sold"],
                ["4.9★", "Store rating"],
                ["2", "Showrooms"],
              ].map(([a, b]) => (
                <div key={b} className="rounded-xl bg-secondary/60 py-2">
                  <p className="font-display text-sm font-bold text-primary">{a}</p>
                  <p className="text-[10px] text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
