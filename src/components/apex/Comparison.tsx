import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { comparable, lkr, metrics, type Metrics } from "./data";

const rows: { key: keyof Metrics; label: string }[] = [
  { key: "camera", label: "Camera" },
  { key: "battery", label: "Battery" },
  { key: "display", label: "Display" },
  { key: "performance", label: "Performance" },
];

function Bar({ v, violet }: { v: number; violet?: boolean }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        key={v}
        initial={{ width: 0 }}
        animate={{ width: `${v}%` }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: violet
            ? "linear-gradient(90deg, var(--violet), var(--neon))"
            : "var(--gradient-neon)",
        }}
      />
    </div>
  );
}

function Picker({
  value,
  onChange,
  exclude,
  align,
}: {
  value: string;
  onChange: (id: string) => void;
  exclude: string;
  align?: "right";
}) {
  return (
    <div className="relative">
      <select
        aria-label="Choose device to compare"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-12 w-full appearance-none rounded-xl bg-secondary px-3 pr-9 text-xs font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {comparable
          .filter((p) => p.id !== exclude)
          .map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-primary" />
    </div>
  );
}

export function Comparison() {
  const [a, setA] = useState("ip15pm");
  const [b, setB] = useState("s24u");

  const left = comparable.find((p) => p.id === a) ?? comparable[0]!;
  const right = comparable.find((p) => p.id === b) ?? comparable[1]!;
  const ma = metrics[left.id]!;
  const mb = metrics[right.id]!;

  const swap = () => {
    setA(right.id);
    setB(left.id);
  };

  return (
    <section id="compare" className="px-4 py-8">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Head to <span className="gradient-text">Head</span>
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Pick any two devices and compare them instantly
            </p>
          </div>
          <button
            onClick={swap}
            className="flex min-h-12 items-center gap-2 rounded-xl bg-secondary px-4 text-xs font-semibold transition-colors hover:text-primary"
          >
            <ArrowLeftRight className="size-4 text-primary" /> Swap
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Picker value={left.id} onChange={setA} exclude={right.id} />
          <Picker value={right.id} onChange={setB} exclude={left.id} align="right" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {[left, right].map((d) => (
            <div key={d.id} className="glass rounded-2xl p-3 text-center">
              <motion.img
                key={d.image}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={d.image}
                alt={d.name}
                width={900}
                height={1100}
                loading="lazy"
                className="mx-auto h-28 w-auto object-contain sm:h-36"
              />
              <p className="mt-2 truncate text-xs font-semibold sm:text-sm">{d.name}</p>
              <p className="gradient-text text-xs font-bold">{lkr(d.lkr)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          {rows.map((r) => {
            const [la, sa] = ma[r.key];
            const [lb, sb] = mb[r.key];
            return (
              <div key={r.key}>
                <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </p>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div className="min-w-0">
                    <p className={`truncate text-xs font-medium ${sa >= sb ? "text-primary" : ""}`}>
                      {la}
                    </p>
                    <div className="mt-1.5">
                      <Bar v={sa} />
                    </div>
                  </div>
                  <div className="min-w-0 text-right">
                    <p className={`truncate text-xs font-medium ${sb >= sa ? "text-primary" : ""}`}>
                      {lb}
                    </p>
                    <div className="mt-1.5">
                      <Bar v={sb} violet />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
