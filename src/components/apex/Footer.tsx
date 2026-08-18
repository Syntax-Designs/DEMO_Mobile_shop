import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, MapPin, Send, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-4 px-4 pb-28 md:pb-10">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">
              Apex<span className="gradient-text">Mobiles</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Premium mobile phones & electronics, with official Sri Lanka warranty.
            </p>
            <div className="mt-4 flex gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="grid size-12 place-items-center rounded-xl bg-secondary text-foreground/80 transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Showrooms</p>
            <ul className="mt-3 space-y-3 text-xs text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>142 Galle Road, Colombo 03 — Open 9am–8pm</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>28 Peradeniya Road, Kandy — Open 9am–7pm</span>
              </li>
            </ul>
          </div>

          <div id="cart">
            <p className="text-sm font-semibold">Get deal alerts</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2 rounded-xl bg-secondary p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="h-10 w-full min-w-0 bg-transparent px-2 text-xs outline-none placeholder:text-muted-foreground"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-neon)] text-primary-foreground"
                aria-label="Subscribe"
              >
                <Send className="size-4" />
              </motion.button>
            </form>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Flash deals & restocks. No spam, ever.
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-border pt-5 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Apex Mobiles. All rights reserved.
        </p>
      </div>

      <motion.a
        href="https://wa.me/94770000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        className="fixed bottom-24 right-4 z-40 grid size-14 place-items-center rounded-2xl bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow md:bottom-6"
      >
        <MessageCircle className="size-6" />
      </motion.a>
    </footer>
  );
}
