import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ProductGallery } from "@/components/ProductCard";
import { productsData } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icônes Lucide
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

// Icône WhatsApp custom
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.002 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Icône Facebook custom
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Icône TikTok OFFICIELLE (version 2024)
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6,0H1.7C0.8,0,0,0.8,0,1.7v14.9c0,0.9,0.8,1.7,1.7,1.7h4.4v-5.2h-2V8.8h2V5.8 c0-2.5,2-4.5,4.5-4.5h4.6v4.9h-3.3c-0.6,0-1.1,0.5-1.1,1.1v2.2h4.4l-0.6,5.2H8.5v8.5h8.1c0.9,0,1.7-0.8,1.7-1.7V1.7 C18.3,0.8,17.5,0,16.6,0z"/>
  </svg>
);

interface GitHubProject {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
}

const Projets = () => {
  const [githubProjects, setGithubProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Remplace par ton username GitHub
  const GITHUB_USERNAME = "Njikam-nganzie-moustapha";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error("Failed to fetch repos");
        const data: GitHubProject[] = await response.json();
        setGithubProjects(data);
      } catch (error) {
        console.error("Erreur lors du chargement des projets GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* En-tête */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mes réalisations en développement, design et stratégie digitale.
            </p>
          </div>

          {/* SECTION 1 : GitHub Projects */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Projets Open Source</h2>
              <Button variant="outline" asChild>
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  Voir tous sur GitHub →
                </a>
              </Button>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="glass-card p-6 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-muted rounded w-full mb-3"></div>
                    <div className="h-3 bg-muted rounded w-2/3 mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-muted rounded w-1/4"></div>
                      <div className="h-8 bg-muted rounded w-16"></div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubProjects.map((project) => (
                  <Card
                    key={project.name}
                    className="glass-card p-6 card-hover group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <h3 className="text-lg font-semibold text-primary line-clamp-1">
                          {project.name}
                        </h3>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ⭐ {project.stargazers_count}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {project.description || "Aucune description disponible."}
                    </p>
                    <div className="flex items-center justify-between">
                      {project.language && (
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {project.language}
                        </Badge>
                      )}
                      <Button asChild size="sm" className="btn-view opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          Voir le code
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* SECTION 2 : Design Projects via ProductGallery */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Créations Design & Produits</h2>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <Link to="/galerie">Explorer toute la galerie →</Link>
              </Button>
            </div>

            {/* Galerie dynamique réutilisée */}
            <ProductGallery 
              products={productsData} 
              title="" 
              showViewAll={false} 
            />

            {/* CTA Final — WhatsApp Animé */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Chaque projet est conçu pour impressionner, convertir, et faire grandir votre marque.
                <br />
                <strong>Discutons de votre prochaine création — réponse en moins de 2h.</strong>
              </p>

              <motion.a
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20suis%20intéressé%20par%20un%20projet%20design%20ou%20développement"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center p-8 bg-card/60 backdrop-blur-lg border border-emerald-500/20 rounded-3xl hover:bg-card/80 hover:border-emerald-500/40 transition-all duration-500 cursor-pointer min-w-64 mx-auto"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <WhatsAppIcon />
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">Discuter sur WhatsApp</h4>
                <p className="text-sm text-gray-400">Réponse garantie en moins de 2h</p>
              </motion.a>
            </motion.div>
          </section>

          {/* SECTION 3 : CTA Global — Explorer Tous Projets */}
          <div className="text-center mt-16 pt-8 border-t border-border/30">
            <p className="text-muted-foreground mb-6">
              Envie de plonger dans tout mon univers ?
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                🔍 Explorer tous mes dépôts GitHub
              </a>
            </Button>
          </div>

          {/* ✅ SECTION SOCIAUX — SUIVEZ-MOI */}
          <section className="pt-16 mt-16 border-t border-border/20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Suivez mon univers créatif</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Retrouvez mes inspirations, projets en cours, et coulisses sur les réseaux.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <a href="https://www.facebook.com/moustapha.njikam.492670" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <Instagram size={28} />
              </a>
              <a href="https://github.com/Njikam-nganzie-moustapha" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
                <Twitter size={28} />
              </a>
              <a href="https://tiktok.com/@ton-profil" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-black transition-all duration-300 transform hover:scale-110">
                <TikTokIcon />
              </a>
              <a href="https://wa.me/237693109528" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                <WhatsAppIcon />
              </a>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projets;