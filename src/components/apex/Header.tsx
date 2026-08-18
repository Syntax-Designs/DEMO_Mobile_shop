import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCart } from "./useCart";

const links = ["Flagships", "Brands", "Deals", "Compare", "Support"];

export function Header() {
  const { count } = useCart();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3">
        <div className="glass-strong mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-neon)] font-display text-base font-black text-primary-foreground">
              A
            </span>
            <span className="truncate font-display text-lg font-bold tracking-tight">
              Apex<span className="gradient-text">Mobiles</span>
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <nav className="mr-2 hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <a
                  key={l}
                  href={`/#${l.toLowerCase()}`}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l}
                </a>
              ))}
            </nav>
            <button
              aria-label="Search"
              onClick={() => setSearch(true)}
              className="grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              <Search className="size-5" />
            </button>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute right-1.5 top-1.5 grid min-w-5 place-items-center rounded-full bg-[image:var(--gradient-neon)] px-1 text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setMenu((v) => !v)}
              className="grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary lg:hidden"
            >
              {menu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 lg:hidden"
            >
              {links.map((l) => (
                <a
                  key={l}
                  href={`/#${l.toLowerCase()}`}
                  onClick={() => setMenu(false)}
                  className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 p-4 pt-24 backdrop-blur-md"
            onClick={() => setSearch(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -12 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-full max-w-lg rounded-2xl p-4"
            >
              <div className="flex items-center gap-3 rounded-xl bg-secondary px-4">
                <Search className="size-5 shrink-0 text-primary" />
                <input
                  autoFocus
                  placeholder="Search iPhone, Galaxy, Pixel…"
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["iPhone 15 Pro Max", "S24 Ultra", "AirPods Pro", "Pixel 8"].map((s) => (
                  <button
                    key={s}
                    className="rounded-full border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
