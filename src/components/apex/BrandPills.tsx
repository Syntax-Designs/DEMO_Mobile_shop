import { motion } from "motion/react";
import { brands } from "./data";

export function BrandPills({
  active,
  onChange,
}: {
  active: string;
  onChange: (b: string) => void;
}) {
  return (
    <div id="brands" className="px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-2">
          {brands.map((b) => {
            const on = b === active;
            return (
              <motion.button
                key={b}
                onClick={() => onChange(b)}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 500, damping: 14 }}
                className={`min-h-12 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors ${
                  on
                    ? "bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow"
                    : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {b}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
