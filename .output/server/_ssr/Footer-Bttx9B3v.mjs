import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { C as Facebook, b as Instagram, c as ShoppingBag, d as Search, g as Menu, h as MessageCircle, n as Youtube, o as Tag, r as X, t as Zap, u as Send, v as MapPin, x as House, y as Layers } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-Bttx9B3v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var messages = [
	"🔥 Flash Deal: iPhone 15 Pro Max in Stock",
	"0% Installment Plans Available",
	"⚡ Same-Day Delivery in Colombo & Kandy"
];
function AnnouncementBar() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % messages.length), 3200);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-3 pt-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass mx-auto flex h-11 max-w-6xl items-center justify-center gap-2 overflow-hidden rounded-full px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-5 min-w-0 flex-1 overflow-hidden text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							y: 16,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						exit: {
							y: -16,
							opacity: 0
						},
						transition: { duration: .35 },
						className: "truncate text-xs font-medium tracking-wide text-foreground/90 sm:text-sm",
						children: messages[i]
					}, i)
				})
			})]
		})
	});
}
var phone_iphone_default = "/assets/phone-iphone-CJUFxaK3.png";
var phone_samsung_default = "/assets/phone-samsung-BoACUvfc.png";
var phone_pixel_default = "/assets/phone-pixel-D36zCFYd.png";
var accessory_earbuds_default = "/assets/accessory-earbuds-CD_4WL3y.png";
var brands = [
	"All Brands",
	"Apple",
	"Samsung",
	"Xiaomi",
	"Google Pixel",
	"OnePlus",
	"Accessories"
];
var products = [
	{
		id: "ip15pm",
		name: "iPhone 15 Pro Max",
		brand: "Apple",
		image: phone_iphone_default,
		lkr: 429900,
		usd: 1349,
		discount: 15,
		rating: 4.9,
		reviews: 214,
		stock: 3,
		specs: {
			ram: "8GB",
			storage: "256GB",
			battery: "4441mAh",
			chipset: "A17 Pro"
		}
	},
	{
		id: "s24u",
		name: "Galaxy S24 Ultra",
		brand: "Samsung",
		image: phone_samsung_default,
		lkr: 399900,
		usd: 1259,
		discount: 12,
		rating: 4.8,
		reviews: 187,
		stock: 6,
		specs: {
			ram: "12GB",
			storage: "512GB",
			battery: "5000mAh",
			chipset: "SD 8 Gen 3"
		}
	},
	{
		id: "pixel8",
		name: "Pixel 8 Pro",
		brand: "Google Pixel",
		image: phone_pixel_default,
		lkr: 289900,
		usd: 899,
		discount: 18,
		rating: 4.7,
		reviews: 96,
		stock: 2,
		specs: {
			ram: "12GB",
			storage: "256GB",
			battery: "5050mAh",
			chipset: "Tensor G3"
		}
	},
	{
		id: "x14u",
		name: "Xiaomi 14 Ultra",
		brand: "Xiaomi",
		image: phone_samsung_default,
		lkr: 259900,
		usd: 819,
		discount: 20,
		rating: 4.6,
		reviews: 74,
		stock: 9,
		specs: {
			ram: "16GB",
			storage: "512GB",
			battery: "5300mAh",
			chipset: "SD 8 Gen 3"
		}
	},
	{
		id: "op12",
		name: "OnePlus 12",
		brand: "OnePlus",
		image: phone_pixel_default,
		lkr: 219900,
		usd: 689,
		discount: 10,
		rating: 4.5,
		reviews: 61,
		stock: 4,
		specs: {
			ram: "12GB",
			storage: "256GB",
			battery: "5400mAh",
			chipset: "SD 8 Gen 3"
		}
	},
	{
		id: "apods",
		name: "AirPods Pro 2",
		brand: "Accessories",
		image: accessory_earbuds_default,
		lkr: 74900,
		usd: 239,
		discount: 15,
		rating: 4.8,
		reviews: 312,
		stock: 12,
		specs: {
			ram: "—",
			storage: "—",
			battery: "30h Case",
			chipset: "H2"
		}
	},
	{
		id: "ip15",
		name: "iPhone 15",
		brand: "Apple",
		image: phone_iphone_default,
		lkr: 289900,
		usd: 909,
		discount: 8,
		rating: 4.7,
		reviews: 148,
		stock: 5,
		specs: {
			ram: "6GB",
			storage: "128GB",
			battery: "3349mAh",
			chipset: "A16 Bionic"
		}
	},
	{
		id: "buds3",
		name: "Galaxy Buds 3 Pro",
		brand: "Accessories",
		image: accessory_earbuds_default,
		lkr: 54900,
		usd: 179,
		discount: 22,
		rating: 4.4,
		reviews: 88,
		stock: 15,
		specs: {
			ram: "—",
			storage: "—",
			battery: "26h Case",
			chipset: "Seamless Codec"
		}
	}
];
var lkr = (n) => `LKR ${n.toLocaleString("en-US")}`;
var metrics = {
	ip15pm: {
		camera: ["48MP Triple", 92],
		battery: ["4441 mAh", 86],
		display: ["6.7\" LTPO 120Hz", 94],
		performance: ["A17 Pro", 98]
	},
	s24u: {
		camera: ["200MP Quad", 96],
		battery: ["5000 mAh", 94],
		display: ["6.8\" QHD+ 120Hz", 97],
		performance: ["SD 8 Gen 3", 93]
	},
	pixel8: {
		camera: ["50MP Triple", 95],
		battery: ["5050 mAh", 95],
		display: ["6.7\" LTPO 120Hz", 92],
		performance: ["Tensor G3", 85]
	},
	x14u: {
		camera: ["50MP Leica Quad", 97],
		battery: ["5300 mAh", 96],
		display: ["6.73\" AMOLED 120Hz", 95],
		performance: ["SD 8 Gen 3", 93]
	},
	op12: {
		camera: ["50MP Hasselblad", 90],
		battery: ["5400 mAh", 97],
		display: ["6.82\" QHD+ 120Hz", 93],
		performance: ["SD 8 Gen 3", 92]
	},
	ip15: {
		camera: ["48MP Dual", 88],
		battery: ["3349 mAh", 72],
		display: ["6.1\" OLED 60Hz", 80],
		performance: ["A16 Bionic", 90]
	}
};
var comparable = products.filter((p) => metrics[p.id]);
var KEY = "apex-cart";
var initial = [{
	id: "ip15pm",
	qty: 1
}, {
	id: "apods",
	qty: 1
}];
var listeners = /* @__PURE__ */ new Set();
var lines = initial;
var hydrated = false;
function read() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return initial;
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((l) => l && typeof l.id === "string") : initial;
	} catch {
		return initial;
	}
}
function publish(next) {
	lines = next;
	try {
		localStorage.setItem(KEY, JSON.stringify(next));
	} catch {}
	listeners.forEach((l) => l(next));
}
function useCart() {
	const [state, setState] = (0, import_react.useState)(lines);
	(0, import_react.useEffect)(() => {
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
	const add = (0, import_react.useCallback)((id) => {
		publish(lines.find((l) => l.id === id) ? lines.map((l) => l.id === id ? {
			...l,
			qty: l.qty + 1
		} : l) : [...lines, {
			id,
			qty: 1
		}]);
	}, []);
	const setQty = (0, import_react.useCallback)((id, qty) => {
		publish(qty <= 0 ? lines.filter((l) => l.id !== id) : lines.map((l) => l.id === id ? {
			...l,
			qty
		} : l));
	}, []);
	const remove = (0, import_react.useCallback)((id) => publish(lines.filter((l) => l.id !== id)), []);
	const clear = (0, import_react.useCallback)(() => publish([]), []);
	const items = state.map((l) => {
		const product = products.find((p) => p.id === l.id);
		return product ? {
			product,
			qty: l.qty
		} : null;
	}).filter(Boolean);
	return {
		items,
		count: items.reduce((n, i) => n + i.qty, 0),
		subtotal: items.reduce((n, i) => n + i.product.lkr * i.qty, 0),
		add,
		setQty,
		remove,
		clear
	};
}
var links = [
	"Flagships",
	"Brands",
	"Deals",
	"Compare",
	"Support"
];
function Header() {
	const { count } = useCart();
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 px-3 pt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-neon)] font-display text-base font-black text-primary-foreground",
					children: "A"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate font-display text-lg font-bold tracking-tight",
					children: ["Apex", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "Mobiles"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mr-2 hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/#${l.toLowerCase()}`,
							className: "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: l
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Search",
						onClick: () => setSearch(true),
						className: "grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						"aria-label": "Cart",
						className: "relative grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-1.5 top-1.5 grid min-w-5 place-items-center rounded-full bg-[image:var(--gradient-neon)] px-1 text-[10px] font-bold text-primary-foreground",
							children: count
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Menu",
						onClick: () => setMenu((v) => !v),
						className: "grid size-12 place-items-center rounded-xl text-foreground/80 transition-colors hover:bg-secondary hover:text-primary lg:hidden",
						children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 lg:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `/#${l.toLowerCase()}`,
				onClick: () => setMenu(false),
				className: "flex min-h-12 items-center rounded-xl px-4 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary",
				children: l
			}, l))
		}) })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 flex items-start justify-center bg-background/80 p-4 pt-24 backdrop-blur-md",
		onClick: () => setSearch(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				y: -12
			},
			animate: {
				scale: 1,
				y: 0
			},
			exit: {
				scale: .95,
				y: -12
			},
			onClick: (e) => e.stopPropagation(),
			className: "glass-strong w-full max-w-lg rounded-2xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-xl bg-secondary px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					placeholder: "Search iPhone, Galaxy, Pixel…",
					className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					"iPhone 15 Pro Max",
					"S24 Ultra",
					"AirPods Pro",
					"Pixel 8"
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-full border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary",
					children: s
				}, s))
			})]
		})
	}) })] });
}
var items = [
	{
		id: "home",
		label: "Home",
		icon: House,
		href: "/"
	},
	{
		id: "search",
		label: "Search",
		icon: Search,
		href: "/#flagships"
	},
	{
		id: "brands",
		label: "Brands",
		icon: Layers,
		href: "/#brands"
	},
	{
		id: "deals",
		label: "Deals",
		icon: Tag,
		href: "/#deals"
	},
	{
		id: "cart",
		label: "Cart",
		icon: ShoppingBag,
		href: "/cart"
	}
];
function BottomNav() {
	const { count } = useCart();
	const [active, setActive] = (0, import_react.useState)("home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong mx-auto flex max-w-md items-center justify-between rounded-2xl px-2 py-1.5",
			children: items.map((it) => {
				const Icon = it.icon;
				const on = active === it.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: it.href,
					onClick: () => setActive(it.id),
					className: "relative flex min-h-12 min-w-12 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5",
					children: [
						on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-glow",
							className: "absolute inset-0 rounded-xl bg-secondary neon-glow",
							transition: {
								type: "spring",
								stiffness: 400,
								damping: 32
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-5 transition-colors ${on ? "text-primary" : "text-muted-foreground"}` }), it.id === "cart" && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-2 -top-1.5 grid min-w-4 place-items-center rounded-full bg-[image:var(--gradient-neon)] px-1 text-[9px] font-bold text-primary-foreground",
								children: count
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `relative text-[10px] font-medium transition-colors ${on ? "text-primary" : "text-muted-foreground"}`,
							children: it.label
						})
					]
				}, it.id);
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-4 px-4 pb-28 md:pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong mx-auto max-w-6xl rounded-3xl p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl font-bold",
							children: ["Apex", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Mobiles"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: "Premium mobile phones & electronics, with official Sri Lanka warranty."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex gap-2",
							children: [
								Instagram,
								Facebook,
								Youtube
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								"aria-label": "Social link",
								className: "grid size-12 place-items-center rounded-xl bg-secondary text-foreground/80 transition-colors hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}, i))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Showrooms"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "142 Galle Road, Colombo 03 — Open 9am–8pm" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "28 Peradeniya Road, Kandy — Open 9am–7pm" })]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "cart",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Get deal alerts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => e.preventDefault(),
								className: "mt-3 flex items-center gap-2 rounded-xl bg-secondary p-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									placeholder: "you@email.com",
									className: "h-10 w-full min-w-0 bg-transparent px-2 text-xs outline-none placeholder:text-muted-foreground"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileTap: { scale: .9 },
									className: "grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-neon)] text-primary-foreground",
									"aria-label": "Subscribe",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] text-muted-foreground",
								children: "Flash deals & restocks. No spam, ever."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 border-t border-border pt-5 text-center text-[11px] text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Apex Mobiles. All rights reserved."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
			href: "https://wa.me/94770000000",
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "Chat on WhatsApp",
			whileHover: { scale: 1.08 },
			whileTap: { scale: .94 },
			animate: { y: [
				0,
				-6,
				0
			] },
			transition: { y: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut"
			} },
			className: "fixed bottom-24 right-4 z-40 grid size-14 place-items-center rounded-2xl bg-[image:var(--gradient-neon)] text-primary-foreground neon-glow md:bottom-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
		})]
	});
}
//#endregion
export { brands as a, metrics as c, products as d, useCart as f, Header as i, phone_iphone_default as l, BottomNav as n, comparable as o, Footer as r, lkr as s, AnnouncementBar as t, phone_samsung_default as u };
