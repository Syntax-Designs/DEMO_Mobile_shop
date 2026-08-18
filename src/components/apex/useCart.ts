import { useCallback, useEffect, useState } from "react";
import { products, type Product } from "./data";

export type CartLine = { id: string; qty: number };
export type CartItem = { product: Product; qty: number };

const KEY = "apex-cart";
const initial: CartLine[] = [
  { id: "ip15pm", qty: 1 },
  { id: "apods", qty: 1 },
];

const listeners = new Set<(lines: CartLine[]) => void>();
let lines: CartLine[] = initial;
let hydrated = false;

function read(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    const parsed = JSON.parse(raw) as CartLine[];
    return Array.isArray(parsed) ? parsed.filter((l) => l && typeof l.id === "string") : initial;
  } catch {
    return initial;
  }
}

function publish(next: CartLine[]) {
  lines = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l(next));
}

export function useCart() {
  const [state, setState] = useState<CartLine[]>(lines);

  useEffect(() => {
    if (!hydrated) {
      hydrated = true;
      lines = read();
    }
    setState(lines);
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  const add = useCallback((id: string) => {
    const found = lines.find((l) => l.id === id);
    publish(
      found
        ? lines.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
        : [...lines, { id, qty: 1 }],
    );
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    publish(qty <= 0 ? lines.filter((l) => l.id !== id) : lines.map((l) => (l.id === id ? { ...l, qty } : l)));
  }, []);

  const remove = useCallback((id: string) => publish(lines.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => publish([]), []);

  const items: CartItem[] = state
    .map((l) => {
      const product = products.find((p) => p.id === l.id);
      return product ? { product, qty: l.qty } : null;
    })
    .filter(Boolean) as CartItem[];

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.product.lkr * i.qty, 0);

  return { items, count, subtotal, add, setQty, remove, clear };
}
