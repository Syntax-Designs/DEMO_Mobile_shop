import iphone from "@/assets/phone-iphone.png";
import samsung from "@/assets/phone-samsung.png";
import pixel from "@/assets/phone-pixel.png";
import earbuds from "@/assets/accessory-earbuds.png";

export type Product = {
  id: string;
  name: string;
  brand: string;
  image: string;
  lkr: number;
  usd: number;
  discount: number;
  rating: number;
  reviews: number;
  stock: number;
  specs: { ram: string; storage: string; battery: string; chipset: string };
};

export const brands = [
  "All Brands",
  "Apple",
  "Samsung",
  "Xiaomi",
  "Google Pixel",
  "OnePlus",
  "Accessories",
];

export const products: Product[] = [
  {
    id: "ip15pm",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: iphone,
    lkr: 429900,
    usd: 1349,
    discount: 15,
    rating: 4.9,
    reviews: 214,
    stock: 3,
    specs: { ram: "8GB", storage: "256GB", battery: "4441mAh", chipset: "A17 Pro" },
  },
  {
    id: "s24u",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    image: samsung,
    lkr: 399900,
    usd: 1259,
    discount: 12,
    rating: 4.8,
    reviews: 187,
    stock: 6,
    specs: { ram: "12GB", storage: "512GB", battery: "5000mAh", chipset: "SD 8 Gen 3" },
  },
  {
    id: "pixel8",
    name: "Pixel 8 Pro",
    brand: "Google Pixel",
    image: pixel,
    lkr: 289900,
    usd: 899,
    discount: 18,
    rating: 4.7,
    reviews: 96,
    stock: 2,
    specs: { ram: "12GB", storage: "256GB", battery: "5050mAh", chipset: "Tensor G3" },
  },
  {
    id: "x14u",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    image: samsung,
    lkr: 259900,
    usd: 819,
    discount: 20,
    rating: 4.6,
    reviews: 74,
    stock: 9,
    specs: { ram: "16GB", storage: "512GB", battery: "5300mAh", chipset: "SD 8 Gen 3" },
  },
  {
    id: "op12",
    name: "OnePlus 12",
    brand: "OnePlus",
    image: pixel,
    lkr: 219900,
    usd: 689,
    discount: 10,
    rating: 4.5,
    reviews: 61,
    stock: 4,
    specs: { ram: "12GB", storage: "256GB", battery: "5400mAh", chipset: "SD 8 Gen 3" },
  },
  {
    id: "apods",
    name: "AirPods Pro 2",
    brand: "Accessories",
    image: earbuds,
    lkr: 74900,
    usd: 239,
    discount: 15,
    rating: 4.8,
    reviews: 312,
    stock: 12,
    specs: { ram: "—", storage: "—", battery: "30h Case", chipset: "H2" },
  },
  {
    id: "ip15",
    name: "iPhone 15",
    brand: "Apple",
    image: iphone,
    lkr: 289900,
    usd: 909,
    discount: 8,
    rating: 4.7,
    reviews: 148,
    stock: 5,
    specs: { ram: "6GB", storage: "128GB", battery: "3349mAh", chipset: "A16 Bionic" },
  },
  {
    id: "buds3",
    name: "Galaxy Buds 3 Pro",
    brand: "Accessories",
    image: earbuds,
    lkr: 54900,
    usd: 179,
    discount: 22,
    rating: 4.4,
    reviews: 88,
    stock: 15,
    specs: { ram: "—", storage: "—", battery: "26h Case", chipset: "Seamless Codec" },
  },
];

export const lkr = (n: number) => `LKR ${n.toLocaleString("en-US")}`;

export type Metric = [label: string, score: number];
export type Metrics = {
  camera: Metric;
  battery: Metric;
  display: Metric;
  performance: Metric;
};

export const metrics: Record<string, Metrics> = {
  ip15pm: {
    camera: ["48MP Triple", 92],
    battery: ["4441 mAh", 86],
    display: ['6.7" LTPO 120Hz', 94],
    performance: ["A17 Pro", 98],
  },
  s24u: {
    camera: ["200MP Quad", 96],
    battery: ["5000 mAh", 94],
    display: ['6.8" QHD+ 120Hz', 97],
    performance: ["SD 8 Gen 3", 93],
  },
  pixel8: {
    camera: ["50MP Triple", 95],
    battery: ["5050 mAh", 95],
    display: ['6.7" LTPO 120Hz', 92],
    performance: ["Tensor G3", 85],
  },
  x14u: {
    camera: ["50MP Leica Quad", 97],
    battery: ["5300 mAh", 96],
    display: ['6.73" AMOLED 120Hz', 95],
    performance: ["SD 8 Gen 3", 93],
  },
  op12: {
    camera: ["50MP Hasselblad", 90],
    battery: ["5400 mAh", 97],
    display: ['6.82" QHD+ 120Hz', 93],
    performance: ["SD 8 Gen 3", 92],
  },
  ip15: {
    camera: ["48MP Dual", 88],
    battery: ["3349 mAh", 72],
    display: ['6.1" OLED 60Hz', 80],
    performance: ["A16 Bionic", 90],
  },
};

export const comparable = products.filter((p) => metrics[p.id]);
