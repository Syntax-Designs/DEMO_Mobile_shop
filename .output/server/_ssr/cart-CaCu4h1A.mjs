import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Trash2, i as Truck, j as ArrowLeft, l as ShieldCheck, m as Minus, p as Plus } from "../_libs/lucide-react.mjs";
import { f as useCart, i as Header, n as BottomNav, r as Footer, s as lkr, t as AnnouncementBar } from "./Footer-Bttx9B3v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CaCu4h1A.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, count, subtotal, setQty, remove } = useCart();
	const total = subtotal + 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "px-4 py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex min-h-12 items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Continue shopping"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 text-3xl font-bold sm:text-4xl",
							children: ["Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "Cart"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								count,
								" ",
								count === 1 ? "item" : "items",
								" ready to checkout"
							]
						}),
						items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong mt-6 rounded-3xl p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Your cart is empty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Explore the latest flagships and grab a deal."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "mt-5 inline-flex min-h-12 items-center rounded-xl bg-[image:var(--gradient-neon)] px-6 text-sm font-bold text-primary-foreground neon-glow",
									children: "Browse devices"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: items.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: "glass flex gap-3 rounded-2xl p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: product.image,
										alt: product.name,
										width: 900,
										height: 1100,
										loading: "lazy",
										className: "h-24 w-16 shrink-0 rounded-xl bg-secondary/40 object-contain sm:h-28 sm:w-20"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold",
												children: product.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: product.brand
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "gradient-text mt-1 font-display text-sm font-bold",
												children: lkr(product.lkr * qty)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														"aria-label": `Decrease ${product.name} quantity`,
														onClick: () => setQty(product.id, qty - 1),
														className: "grid size-12 place-items-center rounded-xl bg-secondary transition-colors hover:text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "min-w-6 text-center text-sm font-bold",
														children: qty
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														"aria-label": `Increase ${product.name} quantity`,
														onClick: () => setQty(product.id, qty + 1),
														className: "grid size-12 place-items-center rounded-xl bg-secondary transition-colors hover:text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														"aria-label": `Remove ${product.name}`,
														onClick: () => remove(product.id),
														className: "ml-auto grid size-12 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-destructive",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
													})
												]
											})
										]
									})]
								}, product.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "glass-strong h-fit rounded-3xl p-5 lg:sticky lg:top-24",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "Order summary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-4 space-y-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Subtotal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold",
												children: lkr(subtotal)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Delivery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold text-success",
												children: "Free"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-end justify-between border-t border-border pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Total"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gradient-text font-display text-xl font-bold",
											children: lkr(total)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										whileTap: { scale: .96 },
										className: "mt-5 h-14 w-full rounded-xl bg-[image:var(--gradient-neon)] text-sm font-bold text-primary-foreground neon-glow",
										children: "Checkout Securely"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-4 space-y-2 text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-primary" }), " Official Sri Lanka warranty"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4 text-primary" }), " Same-day delivery in Colombo & Kandy"]
										})]
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { CartPage as component };
