import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Smartphone,
  Palette,
  TrendingUp,
  Wrench,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  YoutubeIcon as TikTokIcon // TikTok n'existe pas dans Lucide, on utilise temporairement YoutubeIcon ou remplace par SVG plus bas
} from 'lucide-react';
import { Link } from "react-router-dom";

// Icône WhatsApp custom
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.002 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Icône TikTok personnalisée (Lucide ne l'a pas encore)
const TikTokIconCustom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 7.21a10.63 10.63 0 01-5.48 1.47 10.73 10.73 0 01-9.88-6.93v.57a12.49 12.49 0 0010.04 13.71 12.44 12.44 0 008.88-3.36 8.74 8.74 0 01-3.56-6.4z"/>
  </svg>
);

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Applications ultra-rapides, React, Laravel, architecture scalable.",
      features: ["React & TypeScript", "Laravel API REST", "WordPress personnalisé", "Optimisation SEO"],
      price: "À partir de 500€",
      icon: Smartphone,
      color: "from-indigo-600 to-violet-700",
      hoverColor: "hover:from-indigo-700 hover:to-violet-800",
      textColor: "text-indigo-300"
    },
    {
      title: "Design & Identité Visuelle",
      description: "UI/UX centré conversion, identité visuelle mémorable.",
      features: ["Logos & branding", "Flyers & affiches", "Adobe Photoshop", "Canva professionnel"],
      price: "À partir de 150€",
      icon: Palette,
      color: "from-violet-600 to-fuchsia-700",
      hoverColor: "hover:from-violet-700 hover:to-fuchsia-800",
      textColor: "text-violet-300"
    },
    {
      title: "Marketing Digital",
      description: "Funnel optimisés, automatisation, analytics avancés.",
      features: ["Stratégie réseaux sociaux", "Community management", "Campagnes sponsorisées", "Rédaction web"],
      price: "À partir de 300€/mois",
      icon: TrendingUp,
      color: "from-emerald-600 to-teal-700",
      hoverColor: "hover:from-emerald-700 hover:to-teal-800",
      textColor: "text-emerald-300"
    },
    {
      title: "Maintenance & Support",
      description: "Monitoring 24/7, sécurité renforcée, évolutivité garantie.",
      features: ["Résolution bugs", "Mises à jour", "Optimisation", "Support 24/7"],
      price: "À partir de 100€/mois",
      icon: Wrench,
      color: "from-rose-600 to-pink-700",
      hoverColor: "hover:from-rose-700 hover:to-pink-800",
      textColor: "text-rose-300"
    }
  ];

  const socialLinks = {
    facebook: "https://facebook.com/ton-profil",
    tiktok: "https://tiktok.com/@ton-profil",
    github: "https://github.com/ton-profil",
    linkedin: "https://linkedin.com/in/ton-profil",
    instagram: "https://instagram.com/ton-profil",
    twitter: "https://twitter.com/ton-profil",
    whatsapp: "https://wa.me/237693109528"
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* En-tête animé */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <Badge className="mb-8 bg-gradient-to-r from-indigo-600/30 to-violet-700/30 text-indigo-200 border-indigo-500/40 backdrop-blur-sm flex items-center gap-3 w-fit mx-auto animate-pulse shadow-lg">
              <Wrench size={18} />
              Services Professionnels
            </Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight tracking-tight"
            >
              Mes Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Des solutions conçues pour vous démarquer — pas pour vous ressembler aux autres.
            </motion.p>
          </motion.div>

          {/* Grille de services animée */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group"
                >
                  <Card className="glass-card p-8 card-hover border border-slate-700/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl">
                    {/* Icône + Titre */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={28} />
                      </div>
                      <h3 className={`text-2xl font-bold ${service.textColor} group-hover:text-white transition-colors`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 ${service.color.replace('from-', 'bg-').split(' ')[0]} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Prix + Bouton */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/40">
                      <span className={`font-bold text-lg ${service.textColor}`}>
                        {service.price}
                      </span>
                      <Button 
                        asChild 
                        className={`bg-gradient-to-r ${service.color} ${service.hoverColor} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group`}
                      >
                        <a href={`https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20souhaite%20un%20devis%20pour%20le%20service%20${encodeURIComponent(service.title)}`}>
                          <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                          Devis rapide
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Final — WhatsApp Cinématographique */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center relative z-10 mb-24"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg"
            >
              Chaque service est 100% personnalisé à vos besoins. Parlons-en — je réponds en moins de 2 heures.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20veux%20discuter%20de%20mon%20projet%20immédiatement"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-10 bg-card/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl hover:bg-card/80 hover:border-emerald-500/40 transition-all duration-500 cursor-pointer min-w-80 mx-auto shadow-2xl"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <WhatsAppIcon />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Discutons sur WhatsApp</h4>
              <p className="text-base text-gray-300">Réponse express • Disponible 7j/7</p>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Satisfaction Garantie
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Paiement Sécurisé
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                Support Prioritaire
              </div>
            </motion.div>
          </motion.div>

          {/* Section Réseaux Sociaux */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center py-12 border-t border-slate-800/50 mt-16"
          >
            <h3 className="text-xl font-medium text-slate-400 mb-8">Suivez-moi sur les réseaux</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {Object.entries(socialLinks).map(([platform, url]) => {
                let Icon;
                switch(platform) {
                  case 'facebook': Icon = Facebook; break;
                  case 'instagram': Icon = Instagram; break;
                  case 'twitter': Icon = Twitter; break;
                  case 'linkedin': Icon = Linkedin; break;
                  case 'github': Icon = Github; break;
                  case 'tiktok': Icon = TikTokIconCustom; break;
                  case 'whatsapp': Icon = WhatsAppIcon; break;
                  default: Icon = MessageCircle;
                }

                const colors = {
                  facebook: 'hover:text-blue-500',
                  instagram: 'hover:text-pink-500',
                  twitter: 'hover:text-sky-400',
                  linkedin: 'hover:text-blue-700',
                  github: 'hover:text-gray-400',
                  tiktok: 'hover:text-black',
                  whatsapp: 'hover:text-emerald-500'
                };

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-500 hover:scale-110 transition-all duration-300 ${colors[platform as keyof typeof colors]}`}
                    whileHover={{ rotate: 12, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={28} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-slate-600 text-sm mt-8">
              Connectons-nous — chaque like, partage ou message compte.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Services;