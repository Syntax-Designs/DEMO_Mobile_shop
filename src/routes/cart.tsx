import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Minus, Plus, ShieldCheck, Trash2, Truck } from "lucide-react";
import { AnnouncementBar } from "@/components/apex/AnnouncementBar";
import { Header } from "@/components/apex/Header";
import { BottomNav } from "@/components/apex/BottomNav";
import { Footer } from "@/components/apex/Footer";
import { useCart } from "@/components/apex/useCart";
import { lkr } from "@/components/apex/data";

const title = "Your Cart | Apex Mobiles";
const description =
  "Review your Apex Mobiles cart — premium smartphones and electronics with official Sri Lanka warranty and free islandwide delivery.";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, count, subtotal, setQty, remove } = useCart();
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Continue shopping
          </Link>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Your <span className="gradient-text">Cart</span>
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">
            {count} {count === 1 ? "item" : "items"} ready to checkout
          </p>

          {items.length === 0 ? (
            <div className="glass-strong mt-6 rounded-3xl p-8 text-center">
              <p className="text-sm font-semibold">Your cart is empty</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Explore the latest flagships and grab a deal.
              </p>
              <Link
                to="/"
                className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-[image:var(--gradient-neon)] px-6 text-sm font-bold text-primary-foreground neon-glow"
              >
                Browse devices
              </Link>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
              <div className="space-y-3">
                {items.map(({ product, qty }) => (
                  <motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass flex gap-3 rounded-2xl p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="h-24 w-16 shrink-0 rounded-xl bg-secondary/40 object-contain sm:h-28 sm:w-20"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{product.name}</p>
                      <p className="text-[11px] text-muted-foreground">{product.brand}</p>
                      <p className="gradient-text mt-1 font-display text-sm font-bold">
                        {lkr(product.lkr * qty)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          aria-label={`Decrease ${product.name} quantity`}
                          onClick={() => setQty(product.id, qty - 1)}
                          className="grid size-12 place-items-center rounded-xl bg-secondary transition-colors hover:text-primary"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">{qty}</span>
                        <button
                          aria-label={`Increase ${product.name} quantity`}
                          onClick={() => setQty(product.id, qty + 1)}
                          className="grid size-12 place-items-center rounded-xl bg-secondary transition-colors hover:text-primary"
                        >
                          <Plus className="size-4" />
                        </button>
                        <button
                          aria-label={`Remove ${product.name}`}
                          onClick={() => remove(product.id)}
                          className="ml-auto grid size-12 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <aside className="glass-strong h-fit rounded-3xl p-5 lg:sticky lg:top-24">
                <p className="text-sm font-semibold">Order summary</p>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Subtotal</dt>
                    <dd className="font-semibold">{lkr(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Delivery</dt>
                    <dd className="font-semibold text-success">Free</dd>
                  </div>
                </dl>
                <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Total</span>
                  <span className="gradient-text font-display text-xl font-bold">{lkr(total)}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="mt-5 h-14 w-full rounded-xl bg-[image:var(--gradient-neon)] text-sm font-bold text-primary-foreground neon-glow"
                >
                  Checkout Securely
                </motion.button>
                <ul className="mt-4 space-y-2 text-[11px] text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" /> Official Sri Lanka warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="size-4 text-primary" /> Same-day delivery in Colombo & Kandy
                  </li>
                </ul>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
