import { useState } from "react";
import { motion } from "motion/react";
import { Home, Search, Layers, Tag, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCart } from "./useCart";

const items = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "search", label: "Search", icon: Search, href: "/#flagships" },
  { id: "brands", label: "Brands", icon: Layers, href: "/#brands" },
  { id: "deals", label: "Deals", icon: Tag, href: "/#deals" },
  { id: "cart", label: "Cart", icon: ShoppingBag, href: "/cart" },
];

export function BottomNav() {
  const { count } = useCart();
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden">
      <div className="glass-strong mx-auto flex max-w-md items-center justify-between rounded-2xl px-2 py-1.5">
        {items.map((it) => {
          const Icon = it.icon;
          const on = active === it.id;
          return (
            <Link
              key={it.id}
              to={it.href}
              onClick={() => setActive(it.id)}
              className="relative flex min-h-12 min-w-12 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5"
            >
              {on && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 rounded-xl bg-secondary neon-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">
                <Icon
                  className={`size-5 transition-colors ${on ? "text-primary" : "text-muted-foreground"}`}
                />
                {it.id === "cart" && count > 0 && (
                  <span className="absolute -right-2 -top-1.5 grid min-w-4 place-items-center rounded-full bg-[image:var(--gradient-neon)] px-1 text-[9px] font-bold text-primary-foreground">
                    {count}
                  </span>
                )}
              </span>
              <span
                className={`relative text-[10px] font-medium transition-colors ${on ? "text-primary" : "text-muted-foreground"}`}
              >
                {it.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
