import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const messages = [
  "🔥 Flash Deal: iPhone 15 Pro Max in Stock",
  "0% Installment Plans Available",
  "⚡ Same-Day Delivery in Colombo & Kandy",
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % messages.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="px-3 pt-3">
      <div className="glass mx-auto flex h-11 max-w-6xl items-center justify-center gap-2 overflow-hidden rounded-full px-4">
        <Zap className="size-4 shrink-0 text-primary" />
        <div className="relative h-5 min-w-0 flex-1 overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="truncate text-xs font-medium tracking-wide text-foreground/90 sm:text-sm"
            >
              {messages[i]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
