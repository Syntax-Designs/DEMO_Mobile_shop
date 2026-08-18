import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Star, Cpu, HardDrive, BatteryFull, MemoryStick, Check } from "lucide-react";
import { lkr, type Product } from "./data";

function ProductCard({ p, onAdd }: { p: Product; onAdd: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="glass group relative overflow-hidden rounded-2xl p-3 transition-transform duration-300 hover:scale-105"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative block w-full overflow-hidden rounded-xl bg-secondary/40"
        aria-label={`Show specs for ${p.name}`}
      >
        <span className="absolute left-2 top-2 z-10 rounded-full bg-destructive px-2 py-0.5 text-[10px] font-bold text-destructive-foreground">
          -{p.discount}%
        </span>
        <img
          src={p.image}
          alt={p.name}
          width={900}
          height={1100}
          loading="lazy"
          className="mx-auto h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-110 sm:h-44"
        />

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-strong absolute inset-0 grid grid-cols-2 content-center gap-2 p-3 text-left"
            >
              {[
                [MemoryStick, "RAM", p.specs.ram],
                [HardDrive, "Storage", p.specs.storage],
                [BatteryFull, "Battery", p.specs.battery],
                [Cpu, "Chipset", p.specs.chipset],
              ].map(([Icon, label, val]) => {
                const I = Icon as typeof Cpu;
                return (
                  <div key={label as string} className="min-w-0">
                    <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <I className="size-3 text-primary" /> {label as string}
                    </p>
                    <p className="truncate text-xs font-semibold">{val as string}</p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div className="mt-3">
        <p className="truncate text-sm font-semibold">{p.name}</p>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
          <Star className="size-3 fill-primary text-primary" />
          <span className="font-semibold text-foreground">{p.rating}</span>
          <span>({p.reviews})</span>
        </div>
        <p
          className={`mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium ${
            p.stock <= 3 ? "text-destructive" : "text-success"
          }`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          In Stock — Only {p.stock} Left
        </p>
        <div className="mt-2 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="gradient-text truncate font-display text-sm font-bold">{lkr(p.lkr)}</p>
            <p className="text-[10px] text-muted-foreground">≈ ${p.usd}</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.82 }}
            transition={{ type: "spring", stiffness: 520, damping: 12 }}
            onClick={() => {
              onAdd(p.id);
              setAdded(true);
              setTimeout(() => setAdded(false), 1200);
            }}
            aria-label={`Add ${p.name} to cart`}
            className="grid size-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow"
          >
            {added ? <Check className="size-5" /> : <Plus className="size-5" />}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductGrid({
  products,
  onAdd,
}: {
  products: Product[];
  onAdd: (id: string) => void;
}) {
  return (
    <section id="flagships" className="px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 id="deals" className="text-2xl font-bold sm:text-3xl">
            Hot <span className="gradient-text">Deals</span>
          </h2>
          <p className="text-xs text-muted-foreground">Tap a device for quick specs</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
