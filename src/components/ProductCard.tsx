// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { 
  Palette, 
  Code2, 
  TrendingUp, 
  Image as ImageIcon, 
  Database,
  Megaphone,
  Eye,
  ExternalLink,
  Smartphone,
  Globe
} from 'lucide-react';
import { motion } from "framer-motion";

// 🎨 NE CHANGE JAMAIS → Couleurs originales strictement conservées
const getCategoryIcon = (category, size = 16) => {
  const icons = {
    'Design': Palette,
    'Développement': Code2,
    'Marketing': TrendingUp,
    'Graphisme': ImageIcon,
    'Database': Database,
    'Promotion': Megaphone,
    'Web': Globe,
    'Mobile': Smartphone
  };
  const Icon = icons[category] || ImageIcon;
  return <Icon size={size} />;
};

// 🎨 NE CHANGE JAMAIS → Mapping couleur inchangé
const getCategoryColor = (category) => {
  const colors = {
    'Design': 'text-pink-500',
    'Développement': 'text-blue-500', 
    'Marketing': 'text-green-500',
    'Graphisme': 'text-pink-500',
    'Database': 'text-orange-500',
    'Promotion': 'text-green-500',
    'Web': 'text-blue-500',
    'Mobile': 'text-orange-500'
  };
  return colors[category] || 'text-blue-500';
};

// ✅ ProductCard — Clic partout = modal. Bouton “Galerie” = redirection configurable.
// 🎨 UTILISE UNIQUEMENT tes couleurs d'origine
// 🔗 Prêt pour React Router — accepte `onNavigateToGallery`
const ProductCard = ({ item, onViewMore, onNavigateToGallery }) => {
  const categoryColorClass = getCategoryColor(item.category);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (onViewMore) onViewMore(item);
  };

  const handleGoToGallery = (e) => {
    e.stopPropagation(); // Empêche d'ouvrir le modal
    if (onNavigateToGallery) {
      onNavigateToGallery();
    } else {
      // Fallback si pas de gestion de route : redirection classique
      window.location.href = '/gallery';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group cursor-pointer relative bg-slate-900 overflow-hidden will-change-transform rounded-lg"
      style={{
        width: `${item.displayWidth}px`,
        height: `${item.displayHeight}px`,
        flexShrink: 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* IMAGE PRINCIPALE */}
      <img
        src={item.url || item.image}
        alt={item.title || item.category}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ transformOrigin: 'center center' }}
      />

      {/* OVERLAY HOVER */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 z-10 pointer-events-none">
          
          {/* 🔹 BADGE CATÉGORIE — Couleur originale appliquée */}
          <div className="absolute top-2 left-2">
            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-black/70 ${categoryColorClass} backdrop-blur-sm border border-current/30`}>
              {getCategoryIcon(item.category, 12)}
              {item.category}
            </span>
          </div>

          <h3 className="text-white text-sm md:text-base font-bold mb-2 drop-shadow-sm line-clamp-1">
            {item.title || item.category}
          </h3>

          <div className="flex flex-col sm:flex-row gap-2 pointer-events-auto">
            {/* OPTIONNEL : Tu peux supprimer ce bouton — car clic partout = voir */}
            <button
              onClick={handleCardClick}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white text-xs py-1.5 px-3 rounded-md backdrop-blur-sm flex items-center justify-center gap-1.5 transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              <Eye size={14} />
              <span className="hidden sm:inline">Voir</span>
            </button>

            {/* 🔷 BOUTON “GALERIE” — Utilise onNavigateToGallery si fourni */}
            <button
              onClick={handleGoToGallery}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Galerie</span>
            </button>
          </div>
        </div>
      )}

      {/* ❗ SI PAS D'IMAGE → Fond unicolore avec icône, dans la couleur de la catégorie */}
      {!item.url && !item.image && (
        <div className={`absolute inset-0 flex items-center justify-center ${categoryColorClass} bg-black/20`}>
          {getCategoryIcon(item.category, 60)}
        </div>
      )}
    </motion.div>
  );
};

// ✅ ProductGallery — inchangé, compatible justified rows + respect total des couleurs
// 🔗 Ajoute `onNavigateToGallery` pour que les cartes puissent rediriger proprement
const ProductGallery = ({ products, title = "Galerie de Mes Créations", onNavigateToGallery }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rows, setRows] = useState([]);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const loadImageMetadata = async () => {
      const loadedImages = [];

      for (const product of products) {
        if (!product.image && !product.url) continue;

        const img = new Image();
        img.src = product.image || product.url;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push({
              ...product,
              url: product.image || product.url,
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
              ...product,
              url: product.image || product.url,
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

      const TARGET_HEIGHT = 250;
      let currentRow = [];
      let currentRowWidth = 0;
      let rowIndex = 0;
      const finalRows = [];

      for (let i = 0; i < loadedImages.length; i++) {
        const img = loadedImages[i];
        const ratio = img.naturalWidth / img.naturalHeight;
        const scaledWidth = TARGET_HEIGHT * ratio;

        const containerWidth = containerRef.current?.clientWidth || window.innerWidth - 32;

        if (currentRowWidth + scaledWidth > containerWidth && currentRow.length > 0) {
          const scaleFactor = containerWidth / currentRowWidth;
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
        const scaleFactor = containerWidth / currentRowWidth;
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
  }, [products]);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-20 px-6 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {title}
          </h2>

          <div ref={containerRef} className="w-full space-y-1">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-row w-full" style={{ gap: 0 }}>
                {row.map((item, index) => (
                  <ProductCard
                    key={`${rowIndex}-${index}`}
                    item={item}
                    onViewMore={handleViewMore}
                    onNavigateToGallery={onNavigateToGallery} // ← Injecté depuis parent (ex: GalleryPage)
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL — Applique aussi la couleur de catégorie si pas d'image */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 text-white hover:text-gray-300 text-3xl transition-colors"
            aria-label="Fermer"
          >
            ✕
          </button>
          <div className="w-full h-full flex items-center justify-center max-w-6xl" onClick={e => e.stopPropagation()}>
            {selectedProduct.url ? (
              <img 
                src={selectedProduct.url} 
                alt={selectedProduct.title || selectedProduct.category}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            ) : (
              <div className={`flex items-center justify-center ${getCategoryColor(selectedProduct.category)} p-8`}>
                {getCategoryIcon(selectedProduct.category, 200)}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
export { ProductGallery };