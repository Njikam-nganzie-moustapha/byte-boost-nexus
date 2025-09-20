// src/pages/Gallery.tsx
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "@/data/products";

// Import des icônes Lucide
import {
  Image as ImageIcon,
  X,
  Folder,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ImageWithMeta {
  url: string;
  category: string;
  naturalWidth: number;
  naturalHeight: number;
  displayWidth: number;
  displayHeight: number;
  rowIndex: number;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; category: string } | null>(null);
  const [rows, setRows] = useState<ImageWithMeta[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadImageMetadata = async () => {
      const loadedImages: ImageWithMeta[] = [];

      for (const product of productsData) {
        if (typeof product.image !== 'string' || !product.image.trim()) continue;

        const img = new Image();
        img.src = product.image;

        await new Promise<void>((resolve) => {
          img.onload = () => {
            loadedImages.push({
              url: product.image,
              category: product.category,
              naturalWidth: img.naturalWidth,
              naturalHeight: img.naturalHeight,
              displayWidth: img.naturalWidth,
              displayHeight: img.naturalHeight,
              rowIndex: 0,
            });
            resolve();
          };
          img.onerror = () => {
            loadedImages.push({
              url: product.image,
              category: product.category,
              naturalWidth: 800,
              naturalHeight: 600,
              displayWidth: 800,
              displayHeight: 600,
              rowIndex: 0,
            });
            resolve();
          };
        });
      }

      // 🔥 ALGORITHME JUSTIFIED ROWS — zéro espace, remplissage parfait
      const TARGET_HEIGHT = 300;
      const gutter = 0;
      let currentRow: ImageWithMeta[] = [];
      let currentRowWidth = 0;
      let rowIndex = 0;
      const finalRows: ImageWithMeta[][] = [];

      for (let i = 0; i < loadedImages.length; i++) {
        const img = loadedImages[i];
        const ratio = img.naturalWidth / img.naturalHeight;
        const scaledWidth = TARGET_HEIGHT * ratio;

        const containerWidth = containerRef.current?.clientWidth || window.innerWidth - 32;

        if (currentRowWidth + scaledWidth > containerWidth && currentRow.length > 0) {
          const totalScaledWidth = currentRowWidth;
          const scaleFactor = containerWidth / totalScaledWidth;

          currentRow = currentRow.map(item => ({
            ...item,
            displayWidth: item.displayWidth * scaleFactor,
            displayHeight: TARGET_HEIGHT * scaleFactor,
            rowIndex,
          }));

          finalRows.push([...currentRow]);
          rowIndex++;
          currentRow = [];
          currentRowWidth = 0;
        }

        img.displayWidth = scaledWidth;
        img.displayHeight = TARGET_HEIGHT;
        currentRow.push(img);
        currentRowWidth += scaledWidth;
      }

      if (currentRow.length > 0) {
        const containerWidth = containerRef.current?.clientWidth || window.innerWidth - 32;
        const totalScaledWidth = currentRowWidth;
        const scaleFactor = containerWidth / totalScaledWidth;

        currentRow = currentRow.map(item => ({
          ...item,
          displayWidth: item.displayWidth * scaleFactor,
          displayHeight: TARGET_HEIGHT * scaleFactor,
          rowIndex,
        }));

        finalRows.push([...currentRow]);
      }

      setRows(finalRows);
    };

    loadImageMetadata();

    const handleResize = () => {};
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ MODAL AMÉLIORÉ avec icône Lucide + animations
  const ImageViewerModal: React.FC<{
    image: string;
    category: string;
    onClose: () => void;
  }> = ({ image, category, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Bouton fermer stylisé */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 hover:text-emerald-400 transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Fermer"
            >
              <X size={28} />
            </button>

            <img
              src={image}
              alt={category}
              className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Badge catégorie en bas à gauche */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
              <Folder size={16} />
              {category}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">

          {/* ✅ EN-TÊTE ANIMÉE STYLE CONTACT */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-8 bg-gradient-to-r from-violet-600/30 to-fuchsia-700/30 text-violet-200 border-violet-500/40 backdrop-blur-sm flex items-center gap-3 w-fit mx-auto animate-pulse shadow-lg">
              <ImageIcon size={18} />
              Galerie Visuelle
            </Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight"
            >
              Mes Créations 🎨
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Explorez mes projets — chaque image raconte une histoire de design, de code et de passion.
            </motion.p>
          </motion.div>

          {/* 🧱 CONTENEUR PRINCIPAL — RESPONSIVE, SANS ESPACE */}
          <div ref={containerRef} className="w-full overflow-hidden">

            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-row w-full"
                style={{ gap: 0 }}
              >
                {row.map((item, index) => (
                  <motion.div
                    key={`${rowIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.03, duration: 0.4 }}
                    className="group cursor-pointer relative bg-slate-900 overflow-hidden will-change-transform rounded-sm border border-slate-800/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
                    style={{
                      width: `${item.displayWidth}px`,
                      height: `${item.displayHeight}px`,
                      flexShrink: 0,
                    }}
                    onClick={() => setSelectedImage({ url: item.url, category: item.category })}
                  >
                    <img
                      src={item.url}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ transformOrigin: 'center center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3 pointer-events-none">
                      <span className="text-white text-xs font-medium bg-black/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                        <Folder size={12} />
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}

          </div>

          {/* ✅ TEXTE DE FIN ANIMÉ */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-slate-500 text-lg italic">
              Fin du voyage visuel 🌌 — Faites défiler pour revivre la magie.
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </motion.div>

          {/* ✅ SECTION CTA RÉSEAUX SOCIAUX — Identique à Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-24 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <ImageIcon size={28} />
              Aimé ce que vous voyez ?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              Suivez mon quotidien, mes projets en cours, et mes inspirations sur les réseaux.
              <br />
              <strong>Rejoignez une communauté de passionnés 🌍</strong>
            </p>

            {/* Icônes sociales — copiées depuis Contact */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "GitHub", url: "https://github.com/Njikam-nganzie-moustapha", icon: Github },
                { name: "LinkedIn", url: "https://linkedin.com/in/ton-profil", icon: Linkedin }, // 🔁 Remplace par ton lien
                { name: "Facebook", url: "https://www.facebook.com/moustapha.njikam.492670", icon: Facebook },
                { 
                  name: "TikTok", 
                  url: "https://www.tiktok.com/@moustapha_1", 
                  icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FE2C55">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  )
                },
                { name: "Instagram", url: "https://www.instagram.com/mercleo2", icon: Instagram },
                { name: "Twitter", url: "https://twitter.com/ton-profil", icon: Twitter }, // 🔁 Remplace par ton lien
                { 
                  name: "WhatsApp", 
                  url: "https://wa.me/237693109528", 
                  icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.002 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  )
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="group relative flex flex-col items-center p-6 bg-card/60 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-card/80 transition-all duration-500 cursor-pointer min-w-32"
                  >
                    <div className="mb-2 group-hover:scale-125 transition-transform">
                      {typeof Icon === 'function' ? (
                        <Icon />
                      ) : (
                        <Icon size={28} className="text-white group-hover:text-indigo-300" />
                      )}
                    </div>
                    <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <ImageViewerModal
            image={selectedImage.url}
            category={selectedImage.category}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;