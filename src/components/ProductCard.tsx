// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { 
  Palette, 
  Code2, 
  TrendingUp, 
  Image, 
  Database,
  Megaphone,
  Eye,
  X,
  ExternalLink,
  Smartphone,
  Globe
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Fonction pour obtenir l'icône selon la catégorie
const getCategoryIcon = (category, size = 16) => {
  const icons = {
    'Design': Palette,
    'Développement': Code2,
    'Marketing': TrendingUp,
    'Graphisme': Image,
    'Database': Database,
    'Promotion': Megaphone,
    'Web': Globe,
    'Mobile': Smartphone
  };
  
  const Icon = icons[category] || Image;
  return <Icon size={size} />;
};

// Fonction pour obtenir la couleur selon la catégorie (même système que la page d'accueil)
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

// Composant ProductCard réutilisable
const ProductCard = ({ item, onViewMore }) => {
  const categoryColor = getCategoryColor(item.category);
  
  return (
    <Card className="glass-card card-hover group overflow-hidden rounded-xl shadow-md h-96 min-h-[384px] relative">
      {/* IMAGE EN ARRIÈRE-PLAN - VISIBLE SUR 100% DE LA CARTE */}
      <div className="absolute inset-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`flex items-center justify-center h-full bg-background/50 ${categoryColor}`}>
            {getCategoryIcon(item.category, 80)}
          </div>
        )}
      </div>

      {/* Badge catégorie */}
      <Badge className={`absolute top-3 left-3 bg-primary/20 ${categoryColor} border-primary/30 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1 z-20 shadow-lg`}>
        {getCategoryIcon(item.category)}
        {item.category}
      </Badge>

      {/* CONTENU EN OVERLAY - SEULEMENT 30-40% DU BAS AVEC DÉGRADÉ */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/100 via-black/90 to-transparent">
        <div className="p-4 space-y-2 h-full flex flex-col justify-end">
          <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg">
            {item.title}
          </h3>
          <p className="text-xs text-white/95 leading-relaxed line-clamp-2 drop-shadow-md">
            {item.description}
          </p>
          <Button
            className="w-full bg-primary/20 hover:bg-primary/30 text-primary border-primary/30 hover:border-primary/50 py-2 px-4 text-xs font-semibold rounded-lg border backdrop-blur-md flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl mt-2"
            onClick={() => onViewMore && onViewMore(item)}
          >
            <Eye size={14} />
            Voir l'image
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Composant principal de la galerie
const ProductGallery = ({ products, title = "Galerie de Mes Créations" }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-20 px-6 relative">
        {/* Overlay de fond */}
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <ProductCard 
                key={index} 
                item={item} 
                onViewMore={handleViewMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup - Full screen image only */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={closeModal}>
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 text-white hover:text-white hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <X size={28} />
          </Button>
          
          {/* Full screen image */}
          <div className="w-full h-full flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            {selectedProduct.image ? (
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className={`flex items-center justify-center ${getCategoryColor(selectedProduct.category)}`}>
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