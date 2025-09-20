// src/data/products.js
// Génère automatiquement une liste d'images avec catégorie = nom du dossier
// Compatible JavaScript pur — pas de "interface", pas de type

const imageModules = import.meta.glob('/public/assets/**/*.{jpg,jpeg,png,webp,gif,svg}', {
  eager: true,
});

export const productsData = Object.keys(imageModules)
  .map((path, index) => {
    const parts = path.split('/');
    const folderName = parts[parts.length - 2]; // ← nom du dossier = catégorie
    const fileName = parts[parts.length - 1];

    return {
      id: index + 1,
      title: fileName.replace(/\.[^/.]+$/, ""), // retire l'extension
      image: path.replace(/^\/public/, ''),     // chemin public utilisable
      category: folderName,
    };
  })
  .sort(() => Math.random() - 0.5); // optionnel : ordre aléatoire