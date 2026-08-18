import { motion } from "motion/react";
import { ShieldCheck, Truck, RefreshCcw, CreditCard } from "lucide-react";

const perks = [
  { icon: ShieldCheck, title: "1-Year Company Warranty", desc: "Authorised local warranty on every device." },
  { icon: Truck, title: "Express Island-wide Delivery", desc: "Same-day in Colombo, next-day nationwide." },
  { icon: RefreshCcw, title: "7-Day Exchange Policy", desc: "Changed your mind? Swap it, no drama." },
  { icon: CreditCard, title: "0% Credit Card Installments", desc: "Up to 24 months with all major banks." },
];

export function Perks() {
  return (
    <section id="support" className="px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Why buy at <span className="gradient-text">Apex</span>
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-4"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary neon-glow">
                  <Icon className="size-5" />
                </span>
                <p className="mt-3 text-sm font-semibold leading-snug">{p.title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
