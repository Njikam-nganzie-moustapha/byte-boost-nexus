// src/data/products.ts

export const productsData = Array.from({ length: 2 }, (_, i) => ({
  id: i + 1,
  title: `Produit ${i + 1}`,
  description: "Exemple de description",
  category: "Test",
  image: "/assets/graphicimage/1bcedfed2293b1a41f64d05182f5a694.webp", // <-- chemin absolu depuis public/
}));
