// src/pages/Index.tsx  (ou Home.tsx si tu préfères)
import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Star,
  Globe,
  Smartphone,
  Rocket,
  Palette,
  MessageCircle,
  Code2,
  TrendingUp,
  Wrench,
  Mail,
  Phone,
  MapPin,
  FileText,
  Heart
} from 'lucide-react';

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/ProductCard";
import { productsData } from "@/data/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg pt-32">
        {/* Animated Earth Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="globe-container relative w-[350px] h-[350px] md:w-[700px] md:h-[700px] animate-spin"
            style={{ animationDuration: '60s' }}>
            {Array.from({ length: 2000 }).map((_, i) => {
              const phi = Math.acos(-1 + (2 * i) / 2000);
              const theta = Math.sqrt(2000 * Math.PI) * phi;
              const x = Math.cos(theta) * Math.sin(phi);
              const y = Math.sin(theta) * Math.sin(phi);
              const z = Math.cos(phi);

              const isLand = (
                (x > -0.3 && x < 0.8 && y > -0.4 && y < 0.6) || 
                (x > -0.8 && x < -0.2 && y > -0.2 && y < 0.8) || 
                (x > 0.2 && x < 0.9 && y > -0.8 && y < -0.2)
              );

              const dotColor = isLand ? 'bg-primary' : 'bg-primary/40';
              const dotSize = isLand ? 'w-1 h-1' : 'w-0.5 h-0.5';

              return (
                <div
                  key={i}
                  className={`absolute ${dotColor} ${dotSize} rounded-full`}
                  style={{
                    left: `${50 + x * 48}%`,
                    top: `${50 + y * 48}%`,
                    opacity: z > 0 ? z * 0.9 : 0.2,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `scale(${z > 0 ? 1 : 0.5})`
                  }}
                />
              );
            })}
            <div className="absolute inset-0 rounded-full border border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: 'rotateY(45deg)' }}></div>
            <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: 'rotateY(90deg)' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 flex items-center gap-2 w-fit mx-auto">
              <Code2 size={16} />
              Développeur Full Stack & Consultant Digital
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Njikam Nganzie
              <span className="block text-primary">Moustapha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2"><Globe size={20} /> Web</span>
              <span className="flex items-center gap-2"><Palette size={20} /> Design</span>
              <span className="flex items-center gap-2"><Wrench size={20} /> Maintenance</span>
              <span className="flex items-center gap-2"><TrendingUp size={20} /> Marketing Digital</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Développeur full stack passionné, j'accompagne les entreprises et entrepreneurs dans leur transformation digitale : 
              création de sites et applications web performants, identité visuelle impactante, maintenance fiable et stratégies marketing innovantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild className="btn-hero flex items-center gap-2">
                <Link to="/services">
                  <Rocket size={18} />
                  Découvrir mes services
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 flex items-center gap-2">
                <Link to="/projets">
                  <ExternalLink size={18} />
                  Voir mes projets
                </Link>
              </Button>
            </div>

            <Button asChild className="btn-cv mb-16 flex items-center gap-2 mx-auto">
              <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={20} />
                Télécharger mon CV
              </a>
            </Button>

            <div className="text-muted-foreground space-y-2">
              <p className="flex items-center justify-center gap-2">
                <MapPin size={16} />
                Douala, Cameroun
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  njikammoustapha67@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={16} />
                  +237 693 109 528
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mes Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Développement Web", desc: "Sites et applications React, Laravel, WordPress", icon: Code2, color: "text-blue-500" },
              { title: "Design & Identité", desc: "Logos, flyers, affiches, branding complet", icon: Palette, color: "text-pink-500" },
              { title: "Marketing Digital", desc: "Stratégie réseaux sociaux, community management", icon: TrendingUp, color: "text-green-500" },
              { title: "Maintenance", desc: "Support technique, mises à jour, sécurité", icon: Wrench, color: "text-orange-500" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="glass-card p-6 card-hover">
                  <div className={`${service.color} mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ProductGallery products={productsData} title="Galerie de Mes Créations" />

      {/* GitHub Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Github size={40} />
            Projets GitHub
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "portfolio_NJIKAM", desc: "Portfolio personnel développé en TypeScript avec React", tech: "TypeScript", stars: 5, icon: Globe },
              { name: "inventory-management-system", desc: "Système de gestion d'inventaire full-stack", tech: "React + Laravel", stars: 12, icon: Code2 },
              { name: "login-new", desc: "Système d'authentification moderne", tech: "JavaScript", stars: 8, icon: Globe },
              { name: "BANQUE-CC", desc: "Application bancaire en Java", tech: "Java", stars: 6, icon: Smartphone },
              { name: "TODO", desc: "Application de gestion de tâches", tech: "CSS + JS", stars: 4, icon: Globe },
              { name: "facialproject", desc: "Projet de reconnaissance faciale", tech: "Python", stars: 15, icon: Code2 }
            ].map((project, index) => {
              const IconComponent = project.icon;
              const whatsappLink = `https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20suis%20intéressé%20par%20le%20projet%20${encodeURIComponent(project.name)}`;
              return (
                <Card key={index} className="glass-card p-6 card-hover group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star size={14} fill="currentColor" />
                      {project.stars}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/30 text-primary flex items-center gap-1">
                      <IconComponent size={14} />
                      {project.tech}
                    </Badge>
                    <Button asChild className="btn-view opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="btn-hero flex items-center gap-2 mx-auto">
              <a href="https://github.com/Njikam-nganzie-moustapha" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                Voir tous mes projets sur GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à Transformer Votre 
            <span className="text-primary block">Vision Digitale ?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Contactez-moi pour discuter de votre projet. Je vous accompagne de l'idée à la réalisation 
            avec des solutions sur-mesure, performantes et évolutives.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Rocket, title: "Développement Rapide", desc: "Livraison dans les délais avec qualité garantie", color: "text-blue-500" },
              { icon: Palette, title: "Design Moderne", desc: "Interfaces attrayantes et expérience utilisateur optimale", color: "text-pink-500" },
              { icon: MessageCircle, title: "Support 24/7", desc: "Accompagnement continu et maintenance assurée", color: "text-green-500" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="glass-card p-6 text-center">
                  <div className={`${feature.color} mb-4 flex justify-center`}>
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild className="btn-hero text-lg px-8 py-4 flex items-center gap-2">
              <a href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20souhaite%20discuter%20d%27un%20projet">
                <MessageCircle size={20} />
                Discutons de votre projet
              </a>
            </Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 flex items-center gap-2">
              <Phone size={20} />
              WhatsApp: +237 693 109 528
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/Njikam-nganzie-moustapha" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://wa.me/237693109528" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <Phone size={16} />
              WhatsApp
            </a>
            <a href="https://t.me/+237693109528" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              Telegram
            </a>
            <a href="https://www.facebook.com/moustapha.njikam.492670" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <Heart size={16} />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
