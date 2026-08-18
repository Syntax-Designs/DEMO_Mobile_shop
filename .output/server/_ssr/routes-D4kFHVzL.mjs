import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as ArrowRight, D as Check, E as ChevronDown, M as ArrowLeftRight, O as Calculator, S as HardDrive, T as Cpu, _ as MemoryStick, f as RefreshCcw, i as Truck, k as BatteryFull, l as ShieldCheck, p as Plus, s as Star, w as CreditCard } from "../_libs/lucide-react.mjs";
import { a as brands, c as metrics, d as products, f as useCart, i as Header, l as phone_iphone_default, n as BottomNav, o as comparable, r as Footer, s as lkr, t as AnnouncementBar, u as phone_samsung_default } from "./Footer-Bttx9B3v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4kFHVzL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden px-4 pb-10 pt-10 sm:pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					opacity: [
						.35,
						.65,
						.35
					],
					scale: [
						1,
						1.12,
						1
					]
				},
				transition: {
					duration: 7,
					repeat: Infinity
				},
				className: "absolute -left-24 top-0 size-72 rounded-full bg-primary/25 blur-[90px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					opacity: [
						.5,
						.25,
						.5
					],
					scale: [
						1.1,
						1,
						1.1
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity
				},
				className: "absolute -right-16 top-40 size-80 rounded-full bg-accent/30 blur-[100px]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " Official Sri Lanka Warranty"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl",
						children: [
							"Next-Gen Tech,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Unbeatable Prices."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "Official Sri Lanka Warranty | Same-Day Delivery | Easy Installment Plans"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							whileHover: { scale: 1.03 },
							whileTap: { scale: .97 },
							href: "#flagships",
							className: "pulse-neon inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-neon)] px-6 font-semibold text-primary-foreground",
							children: ["Explore Flagships ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							whileHover: { scale: 1.03 },
							whileTap: { scale: .97 },
							href: "#compare",
							className: "glass inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold text-foreground/90 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-4" }), " Trade-In Calculator"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4 text-primary" }), " Island-wide express"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-primary" }), " 0% installments"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .92
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					delay: .15
				},
				className: "relative",
				style: { perspective: "1200px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: {
						rotateX: -6,
						rotateY: 8,
						scale: 1.03
					},
					animate: { y: [
						0,
						-14,
						0
					] },
					transition: { y: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					} },
					className: "glass-strong relative rounded-3xl p-5",
					style: {
						boxShadow: "var(--shadow-float), var(--shadow-violet)",
						transformStyle: "preserve-3d"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold",
								children: "Top Flagships"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary",
								children: "LIVE STOCK"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-3",
							children: [{
								img: phone_iphone_default,
								n: "iPhone 15 Pro Max",
								p: "LKR 429,900"
							}, {
								img: phone_samsung_default,
								n: "Galaxy S24 Ultra",
								p: "LKR 399,900"
							}].map((d, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								animate: { y: [
									0,
									idx === 0 ? -8 : -12,
									0
								] },
								transition: {
									duration: 5 + idx,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "glass rounded-2xl p-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: d.img,
										alt: d.n,
										width: 900,
										height: 1100,
										className: "mx-auto h-32 w-auto object-contain drop-shadow-[0_18px_30px_oklch(0_0_0/0.6)] sm:h-44"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 truncate text-xs font-semibold",
										children: d.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "gradient-text text-xs font-bold",
										children: d.p
									})
								]
							}, d.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-3 gap-2 text-center",
							children: [
								["12K+", "Devices sold"],
								["4.9★", "Store rating"],
								["2", "Showrooms"]
							].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-secondary/60 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-bold text-primary",
									children: a
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: b
								})]
							}, b))
						})
					]
				})
			})]
		})]
	});
}
function BrandPills({ active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "brands",
		className: "px-4 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-2",
				children: brands.map((b) => {
					const on = b === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						onClick: () => onChange(b),
						whileTap: { scale: .88 },
						transition: {
							type: "spring",
							stiffness: 500,
							damping: 14
						},
						className: `min-h-12 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors ${on ? "bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow" : "glass text-muted-foreground hover:text-primary"}`,
						children: b
					}, b);
				})
			})
		})
	});
}
function ProductCard({ p, onAdd }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [added, setAdded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: { duration: .45 },
		className: "glass group relative overflow-hidden rounded-2xl p-3 transition-transform duration-300 hover:scale-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((v) => !v),
			className: "relative block w-full overflow-hidden rounded-xl bg-secondary/40",
			"aria-label": `Show specs for ${p.name}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute left-2 top-2 z-10 rounded-full bg-destructive px-2 py-0.5 text-[10px] font-bold text-destructive-foreground",
					children: [
						"-",
						p.discount,
						"%"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					width: 900,
					height: 1100,
					loading: "lazy",
					className: "mx-auto h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-110 sm:h-44"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 20
					},
					className: "glass-strong absolute inset-0 grid grid-cols-2 content-center gap-2 p-3 text-left",
					children: [
						[
							MemoryStick,
							"RAM",
							p.specs.ram
						],
						[
							HardDrive,
							"Storage",
							p.specs.storage
						],
						[
							BatteryFull,
							"Battery",
							p.specs.battery
						],
						[
							Cpu,
							"Chipset",
							p.specs.chipset
						]
					].map(([Icon, label, val]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-[10px] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3 text-primary" }),
									" ",
									label
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs font-semibold",
								children: val
							})]
						}, label);
					})
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1 text-[11px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-primary text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: p.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"(",
							p.reviews,
							")"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium ${p.stock <= 3 ? "text-destructive" : "text-success"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }),
						"In Stock — Only ",
						p.stock,
						" Left"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-end justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gradient-text truncate font-display text-sm font-bold",
							children: lkr(p.lkr)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] text-muted-foreground",
							children: ["≈ $", p.usd]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						whileTap: { scale: .82 },
						transition: {
							type: "spring",
							stiffness: 520,
							damping: 12
						},
						onClick: () => {
							onAdd(p.id);
							setAdded(true);
							setTimeout(() => setAdded(false), 1200);
						},
						"aria-label": `Add ${p.name} to cart`,
						className: "grid size-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow",
						children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
					})]
				})
			]
		})]
	});
}
function ProductGrid({ products, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "flagships",
		className: "px-4 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "deals",
					className: "text-2xl font-bold sm:text-3xl",
					children: ["Hot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "Deals"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Tap a device for quick specs"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					p,
					onAdd
				}, p.id))
			})]
		})
	});
}
var rows = [
	{
		key: "camera",
		label: "Camera"
	},
	{
		key: "battery",
		label: "Battery"
	},
	{
		key: "display",
		label: "Display"
	},
	{
		key: "performance",
		label: "Performance"
	}
];
function Bar({ v, violet }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 w-full overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { width: 0 },
			animate: { width: `${v}%` },
			transition: {
				duration: .7,
				ease: "easeOut"
			},
			className: "h-full rounded-full",
			style: { background: violet ? "linear-gradient(90deg, var(--violet), var(--neon))" : "var(--gradient-neon)" }
		}, v)
	});
}
function Picker({ value, onChange, exclude, align }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			"aria-label": "Choose device to compare",
			value,
			onChange: (e) => onChange(e.target.value),
			className: `h-12 w-full appearance-none rounded-xl bg-secondary px-3 pr-9 text-xs font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary ${align === "right" ? "text-right" : ""}`,
			children: comparable.filter((p) => p.id !== exclude).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: p.id,
				children: p.name
			}, p.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-primary" })]
	});
}
function Comparison() {
	const [a, setA] = (0, import_react.useState)("ip15pm");
	const [b, setB] = (0, import_react.useState)("s24u");
	const left = comparable.find((p) => p.id === a) ?? comparable[0];
	const right = comparable.find((p) => p.id === b) ?? comparable[1];
	const ma = metrics[left.id];
	const mb = metrics[right.id];
	const swap = () => {
		setA(right.id);
		setB(left.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "compare",
		className: "px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong mx-auto max-w-6xl rounded-3xl p-5 sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: ["Head to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Head"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Pick any two devices and compare them instantly"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: swap,
						className: "flex min-h-12 items-center gap-2 rounded-xl bg-secondary px-4 text-xs font-semibold transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-4 text-primary" }), " Swap"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
						value: left.id,
						onChange: setA,
						exclude: right.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
						value: right.id,
						onChange: setB,
						exclude: left.id,
						align: "right"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-3",
					children: [left, right].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								initial: {
									opacity: 0,
									scale: .94
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: { duration: .35 },
								src: d.image,
								alt: d.name,
								width: 900,
								height: 1100,
								loading: "lazy",
								className: "mx-auto h-28 w-auto object-contain sm:h-36"
							}, d.image),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 truncate text-xs font-semibold sm:text-sm",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "gradient-text text-xs font-bold",
								children: lkr(d.lkr)
							})
						]
					}, d.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5",
					children: rows.map((r) => {
						const [la, sa] = ma[r.key];
						const [lb, sb] = mb[r.key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `truncate text-xs font-medium ${sa >= sb ? "text-primary" : ""}`,
									children: la
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { v: sa })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `truncate text-xs font-medium ${sb >= sa ? "text-primary" : ""}`,
									children: lb
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										v: sb,
										violet: true
									})
								})]
							})]
						})] }, r.key);
					})
				})
			]
		})
	});
}
var perks = [
	{
		icon: ShieldCheck,
		title: "1-Year Company Warranty",
		desc: "Authorised local warranty on every device."
	},
	{
		icon: Truck,
		title: "Express Island-wide Delivery",
		desc: "Same-day in Colombo, next-day nationwide."
	},
	{
		icon: RefreshCcw,
		title: "7-Day Exchange Policy",
		desc: "Changed your mind? Swap it, no drama."
	},
	{
		icon: CreditCard,
		title: "0% Credit Card Installments",
		desc: "Up to 24 months with all major banks."
	}
];
function Perks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "support",
		className: "px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-bold sm:text-3xl",
				children: ["Why buy at ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text",
					children: "Apex"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4",
				children: perks.map((p, i) => {
					const Icon = p.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 26
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .3
						},
						transition: {
							duration: .45,
							delay: i * .08
						},
						whileHover: { y: -6 },
						className: "glass rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-xl bg-secondary text-primary neon-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold leading-snug",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] leading-relaxed text-muted-foreground",
								children: p.desc
							})
						]
					}, p.title);
				})
			})]
		})
	});
}
function Index() {
	const [brand, setBrand] = (0, import_react.useState)("All Brands");
	const { add } = useCart();
	const filtered = (0, import_react.useMemo)(() => brand === "All Brands" ? products : products.filter((p) => p.brand === brand), [brand]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPills, {
					active: brand,
					onChange: setBrand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: filtered,
					onAdd: add
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perks, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { Index as component };
