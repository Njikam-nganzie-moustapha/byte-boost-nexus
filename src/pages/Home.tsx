import React, { useEffect, useState } from 'react';
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
  Heart,
  Instagram,
  Terminal,
  Shield,
  Zap,
  Users,
  Briefcase,
  Award,
  Linkedin,
  Twitter,
} from 'lucide-react';

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/ProductCard";
import { productsData } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icône Facebook custom
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Icône WhatsApp custom
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.002 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Icône TikTok OFFICIELLE (version 2024)
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6,0H1.7C0.8,0,0,0.8,0,1.7v14.9c0,0.9,0.8,1.7,1.7,1.7h4.4v-5.2h-2V8.8h2V5.8 c0-2.5,2-4.5,4.5-4.5h4.6v4.9h-3.3c-0.6,0-1.1,0.5-1.1,1.1v2.2h4.4l-0.6,5.2H8.5v8.5h8.1c0.9,0,1.7-0.8,1.7-1.7V1.7 C18.3,0.8,17.5,0,16.6,0z"/>
  </svg>
);

// 🌌 TECH ORB HERO — VERSION CINÉMATOGRAPHIQUE & SOBRE
const TechOrbHero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          delay: Math.random() * 4,
          duration: 3 + Math.random() * 3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Halo Pulsant Central — Tons Sobres */}
      <motion.div
        className="w-56 h-56 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-full blur-3xl opacity-50 absolute"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 180],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orb Principal — Verre Noir Profond */}
      <motion.div
        className="w-44 h-44 bg-slate-950/40 backdrop-blur-2xl border border-slate-700/50 rounded-full absolute flex items-center justify-center shadow-2xl overflow-hidden"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-500/5 to-transparent animate-spin" style={{ animationDuration: "25s" }}></div>
        <div className="text-sm font-mono text-slate-200 tracking-wide uppercase relative z-10 font-bold">njikam.dev</div>
      </motion.div>

      {/* Particules Animées — Subtiles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-slate-300/30 rounded-full pointer-events-none"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rayons de Données — Élégants */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-24 bg-gradient-to-b from-slate-400/40 via-slate-500/20 to-transparent pointer-events-none"
          style={{
            transformOrigin: 'bottom center',
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 45}deg) translateY(-240px)`,
          }}
          animate={{
            scaleY: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ✨ SECTION D'IMPACT IMMÉDIAT — POURQUOI TOI ?
const WhyYouSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-20 md:py-28 px-6 bg-gradient-to-b from-slate-900/20 to-slate-800/10 relative overflow-hidden"
    >
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
        >
          Pourquoi moi — et personne d’autre ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-16 leading-relaxed"
        >
          Parce que je ne livre pas juste du code. Je livre des résultats tangibles, mesurables, et conçus pour vous démarquer — dans un monde où tout le monde se ressemble.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Approche Stratégique",
              desc: "Chaque ligne de code sert un objectif business. Pas de remplissage. Que de l’impact.",
            },
            {
              icon: Zap,
              title: "Performance Obsessionnelle",
              desc: "Vos utilisateurs ne patienteront pas. Votre site charge en <1s. Ou je le refais.",
            },
            {
              icon: Users,
              title: "Expérience Humaine",
              desc: "Je conçois pour des humains — pas pour des robots. Émotion, fluidité, désir d’agir.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group p-8 bg-card/40 backdrop-blur-md border border-slate-700/30 rounded-2xl hover:bg-card/60 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

// ✨ SECTION DE CONTACT IMMÉDIAT — APRÈS LE HERO — DESIGN WOW
const InstantContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-24 px-6 bg-gradient-to-b from-slate-900/30 to-slate-800/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
        >
          Parlons de votre projet — sans attendre
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Cliquez sur le canal qui vous convient — je réponds en moins de 2 heures.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {/* EMAIL */}
          <motion.a
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:njikammoustapha67@gmail.com"
            className="group relative flex flex-col items-center p-8 bg-card/60 backdrop-blur-lg border border-white/10 rounded-3xl hover:bg-card/80 transition-all duration-500 cursor-pointer w-52"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail size={32} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-1">Email Direct</h4>
            <p className="text-sm text-gray-400">njikammoustapha67@gmail.com</p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20veux%20discuter%20de%20mon%20projet%20immédiatement"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center p-8 bg-card/60 backdrop-blur-lg border border-white/10 rounded-3xl hover:bg-card/80 transition-all duration-500 cursor-pointer w-52"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <WhatsAppIcon />
            </div>
            <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
            <p className="text-sm text-gray-400">+237 693 109 528</p>
          </motion.a>

          {/* RÉSEAUX SOCIAUX — VERSION SIMPLIFIÉE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            className="group relative flex flex-col items-center p-8 bg-card/60 backdrop-blur-lg border border-white/10 rounded-3xl hover:bg-card/80 transition-all duration-500 cursor-pointer w-52"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-fuchsia-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart size={32} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-1">Suivez-moi</h4>
            <p className="text-sm text-gray-400 text-center">Instagram • LinkedIn • GitHub<br />et bien plus encore ↓</p>
          </motion.div>
        </div>

        {/* ✅ TOUS LES RÉSEAUX SOCIAUX — EN DEHORS DE LA CARTE, CENTRÉS ET AÉRÉS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-slate-700/40"
        >
          <a href="https://www.facebook.com/moustapha.njikam.492670" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
            <Instagram size={28} />
          </a>
          <a href="https://github.com/Njikam-nganzie-moustapha" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110">
            <Twitter size={28} />
          </a>
          <a href="https://tiktok.com/@ton-profil" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-black transition-all duration-300 transform hover:scale-110">
            <TikTokIcon />
          </a>
          <a href="https://wa.me/237693109528" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
            <WhatsAppIcon />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ✅ Composant GitHub Projects DYNAMIQUE
const GitHubProjectsSection = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Njikam-nganzie-moustapha/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Erreur lors du chargement des repos :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-muted/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">Chargement de mes projets open-source...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900/5 to-slate-800/5">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 flex items-center justify-center gap-4 text-foreground"
        >
          <Code2 size={48} className="text-slate-400" />
          Projets Open Source — Transparence & Excellence
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => {
            const IconComponent = repo.language === 'JavaScript' || repo.language === 'TypeScript' ? Terminal : 
                                  repo.language === 'Python' ? Smartphone : Globe;

            const whatsappLink = `https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20suis%20intéressé%20par%20le%20projet%20${encodeURIComponent(repo.name)}`;

            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="glass-card p-8 card-hover group border border-border/30 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <h3 className="text-xl font-semibold text-indigo-300">{repo.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      {repo.stargazers_count || 0}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-5 flex-grow text-gray-400">
                    {repo.description || "Aucune description disponible."}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 flex items-center gap-2">
                      <IconComponent size={16} />
                      {repo.language || "Inconnu"}
                    </Badge>
                    <Button asChild className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Demander le code
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button asChild className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group">
            <a href="https://github.com/Njikam-nganzie-moustapha" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="group-hover:rotate-12 transition-transform" />
              Explorer tous mes dépôts
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ MAIN COMPONENT — NAMED "Home"
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* 🌌 HERO ÉPIQUE — VERSION CINÉMATOGRAPHIQUE & SOBRE */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-32 overflow-hidden">
        
        {/* Animated Background Orb */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <TechOrbHero />
        </div>

        {/* Radial Glow Subtil */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.3), transparent 70%)',
            animation: 'pulse 6s infinite alternate',
          }}
        />

        {/* Content — Floating Above the Orb */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-indigo-600/30 to-violet-700/30 text-indigo-200 border-indigo-500/40 backdrop-blur-sm flex items-center gap-3 w-fit mx-auto animate-pulse shadow-lg">
              <Terminal size={18} />
              Architecte Digital & Ingénieur de Croissance
            </Badge>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight"
            >
              Njikam Nganzie
              <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-violet-500 to-fuchsia-500 bg-clip-text mt-2">
                Moustapha
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              Ingénieur Full Stack • Stratège Digital • Artisan de l’Expérience Utilisateur
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-base sm:text-lg text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Je construis des solutions digitales qui ne se contentent pas de fonctionner — elles captivent, convertissent, et élèvent votre marque au-dessus du bruit.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                <Link to="/services">
                  <Rocket size={22} className="group-hover:rotate-12 transition-transform" />
                  Explorer mes services
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-10 py-7 text-lg rounded-full flex items-center gap-3 hover:scale-105 transition-all duration-300">
                <Link to="/projets">
                  <ExternalLink size={22} />
                  Voir mes réalisations
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-slate-500 space-y-6"
            >
              <div className="flex items-center justify-center gap-8 flex-wrap text-base">
                <span className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-full border border-slate-700">
                  <Mail size={18} className="text-rose-400" />
                  njikammoustapha67@gmail.com
                </span>
                <span className="flex items-center gap-2 bg-slate-800/50 px-5 py-3 rounded-full border border-slate-700">
                  <Phone size={18} className="text-emerald-400" />
                  +237 693 109 528
                </span>
              </div>
              <p className="flex items-center justify-center gap-3 text-lg">
                <MapPin size={20} className="text-indigo-400" />
                <span>📍 Douala, Cameroun — Disponible Monde Entier</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-3 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </section>

      {/* 🎯 SECTION D'IMPACT — POURQUOI TOI ? */}
      <WhyYouSection />

      {/* 📞 CONTACT IMMÉDIAT */}
      <InstantContactSection />

      {/* 💼 SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
          >
            Mes Services — Conçus pour Vous Démarquer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Développement Web", 
                desc: "Applications ultra-rapides, React, Laravel, architecture scalable.", 
                icon: Code2, 
                color: "text-indigo-400",
                link: "/projets"
              },
              { 
                title: "Design Stratégique", 
                desc: "UI/UX centré conversion, identité visuelle mémorable.", 
                icon: Palette, 
                color: "text-violet-400" 
              },
              { 
                title: "Growth Engineering", 
                desc: "Funnel optimisés, automatisation, analytics avancés.", 
                icon: TrendingUp, 
                color: "text-emerald-400" 
              },
              { 
                title: "Maintenance Proactive", 
                desc: "Monitoring 24/7, sécurité renforcée, évolutivité garantie.", 
                icon: Shield, 
                color: "text-rose-400" 
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group"
                >
                  <Card className="glass-card p-8 card-hover border border-slate-700/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 h-full flex flex-col">
                    <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 flex-grow">{service.desc}</p>
                    <Button asChild variant="link" className="mt-4 self-start text-indigo-300 hover:text-indigo-200 p-0 h-auto">
                      <Link to={service.link || "/services"}>En savoir plus →</Link>
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🖼️ GALLERY */}
      <ProductGallery products={productsData} title="Mes Créations — Fonctionnelles, Belles, Impactantes" />

      {/* 🧩 GITHUB PROJECTS */}
      <GitHubProjectsSection />

      {/* 🏆 FINAL CTA — ULTIME APPEL */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 80 - 40, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="mb-10 inline-block"
          >
            <Badge className="bg-gradient-to-r from-amber-600 to-orange-700 text-black font-bold py-4 px-8 text-lg rounded-full shadow-2xl animate-bounce">
              ⚡ Seulement 3 créneaux disponibles ce mois-ci
            </Badge>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
          >
            Prêt à Transformer Votre Vision ?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed"
          >
            Réservez une consultation gratuite. Ensemble, nous bâtirons quelque chose d’exceptionnel — avant que vos concurrents ne le fassent.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white text-xl font-bold px-12 py-8 rounded-full shadow-3xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-4 group">
                <a href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20veux%20réserver%20mon%20créneau%20gratuit">
                  <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
                  Réserver mon créneau
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button asChild variant="outline" className="border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10 text-xl font-medium px-12 py-8 rounded-full flex items-center gap-4 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <a href="tel:+237693109528">
                  <Phone size={26} />
                  +237 693 109 528
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-10 mt-20 text-slate-400 text-lg"
          >
            <div className="flex items-center gap-3">
              <Award size={22} className="text-amber-400" />
              <span>5.0 ★ (27 avis clients)</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={22} className="text-emerald-400" />
              <span>100% Satisfaction Garantie</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={22} className="text-indigo-400" />
              <span>Partenariat Long Terme</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;