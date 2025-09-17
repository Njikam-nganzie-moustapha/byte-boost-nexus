// src/pages/Gallery.tsx
import React from "react";
import Header from "@/components/Header";
import { ProductGallery } from "@/components/ProductCard";
import { productsData } from "@/data/products";

const GalleryPage: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <ProductGallery products={productsData} title="Galerie - Mes Créations" />
    </main>
  </div>
);

export default GalleryPage;
