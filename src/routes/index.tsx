import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnnouncementBar } from "@/components/apex/AnnouncementBar";
import { Header } from "@/components/apex/Header";
import { BottomNav } from "@/components/apex/BottomNav";
import { Hero } from "@/components/apex/Hero";
import { BrandPills } from "@/components/apex/BrandPills";
import { ProductGrid } from "@/components/apex/ProductGrid";
import { Comparison } from "@/components/apex/Comparison";
import { Perks } from "@/components/apex/Perks";
import { Footer } from "@/components/apex/Footer";
import { products } from "@/components/apex/data";
import { useCart } from "@/components/apex/useCart";

const title = "Apex Mobiles | Premium Phones & Electronics in Sri Lanka";
const description =
  "Shop flagship smartphones and electronics at Apex Mobiles. Official Sri Lanka warranty, same-day delivery and 0% installment plans.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  const [brand, setBrand] = useState("All Brands");
  const { add } = useCart();

  const filtered = useMemo(
    () => (brand === "All Brands" ? products : products.filter((p) => p.brand === brand)),
    [brand],
  );

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <BrandPills active={brand} onChange={setBrand} />
        <ProductGrid products={filtered} onAdd={add} />
        <Comparison />
        <Perks />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
