import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Importe uniquement les icônes Lucide nécessaires
import {
  Smartphone,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Palette,
  Users,
  Github,
  Facebook,
  Instagram,
  Send,
  Linkedin,
  Twitter
} from 'lucide-react';

// WhatsApp reste en SVG custom — car pas d’équivalent standard dans Lucide
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.002 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Icône TikTok custom (Lucide n'en a pas)
const TikTokIcon = ({ fill = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill={fill}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Smartphone,
      title: "WhatsApp",
      value: "+237 693 109 528",
      link: "https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20veux%20discuter%20de%20mon%20projet"
    },
    {
      icon: Mail,
      title: "Email Direct",
      value: "njikammoustapha67@gmail.com",
      link: "mailto:njikammoustapha67@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Douala, Cameroun — Disponible Monde Entier",
      link: null
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@moustapha_dev",
      link: "https://t.me/moustapha_dev"
    }
  ];

  // ✅ Tous les réseaux sociaux ajoutés ici
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Njikam-nganzie-moustapha", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/ton-profil", icon: Linkedin }, // 🔁 Remplace par ton vrai lien
    { name: "Facebook", url: "https://www.facebook.com/moustapha.njikam.492670", icon: Facebook },
    { name: "TikTok", url: "https://www.tiktok.com/@moustapha_1", icon: TikTokIcon },
    { name: "Instagram", url: "https://www.instagram.com/mercleo2", icon: Instagram },
    { name: "Twitter", url: "https://twitter.com/ton-profil", icon: Twitter }, // 🔁 Remplace par ton vrai lien
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* En-tête animé */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="mb-8 bg-gradient-to-r from-emerald-600/30 to-teal-700/30 text-emerald-200 border-emerald-500/40 backdrop-blur-sm flex items-center gap-3 w-fit mx-auto animate-pulse shadow-lg">
              <MessageCircle size={18} />
              Contact Immédiat
            </Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight"
            >
              Travaillons Ensemble
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Prêt à transformer votre vision ? Discutons-en — je réponds en moins de 2 heures.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Section Contact Info — 100% icônes Lucide */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Smartphone size={24} />
                Mes canaux de contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card p-6 card-hover border border-slate-700/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 group">
                        <div className="flex items-start gap-5">
                          <div className="mt-1 group-hover:scale-110 transition-transform text-emerald-400">
                            {info.title === "WhatsApp" ? (
                              <div className="w-6 h-6"><WhatsAppIcon /></div>
                            ) : (
                              <Icon size={24} />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-indigo-300 mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-emerald-400 transition-colors underline-offset-4 hover:underline block"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-slate-400">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Cards — 100% icônes Lucide */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Send size={24} />
                Pourquoi me choisir ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Rocket,
                    title: "Livraison Rapide",
                    desc: "Délais respectés, sans compromis sur la qualité.",
                    cta: "Demander un devis",
                    color: "from-indigo-600 to-violet-700",
                    link: "/services"
                  },
                  {
                    icon: Palette,
                    title: "Design Impactant",
                    desc: "Interfaces belles, intuitives, conçues pour convertir.",
                    cta: "Voir le portfolio",
                    color: "from-emerald-600 to-teal-700",
                    link: "/projets"
                  },
                  {
                    icon: Users,
                    title: "Partenariat Long Terme",
                    desc: "Je ne livre pas un projet — je construis une relation.",
                    cta: "Discutons ensemble",
                    color: "from-rose-600 to-pink-700",
                    link: "https://wa.me/237693109528"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="glass-card p-7 card-hover border border-slate-700/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 h-full group">
                        <div className="text-center">
                          <div className="mb-4 group-hover:scale-110 transition-transform inline-block text-indigo-400">
                            <Icon size={32} />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-slate-400 mb-5 leading-relaxed">
                            {item.desc}
                          </p>
                          <Button 
                            asChild 
                            className={`bg-gradient-to-r ${item.color} hover:opacity-90 text-white w-full py-5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group`}
                          >
                            <Link to={item.link}>
                              {item.cta}
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Réseaux sociaux — 100% icônes Lucide + TikTok custom */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
              <Github size={24} />
              Suivez mon univers
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
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
                        <Icon fill={social.name === "TikTok" ? "#FE2C55" : undefined} />
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

          {/* CTA FINAL — WhatsApp (SVG custom) + Lucide pour texte */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg"
            >
              Vous avez une idée ? Un projet urgent ? Une question brûlante ?
              <br />
              <strong>Je suis là — réponse garantie en moins de 2 heures.</strong>
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/237693109528?text=Bonjour%20Njikam%2C%20je%20veux%20démarrer%20mon%20projet%20immédiatement"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-10 bg-card/60 backdrop-blur-xl border border-emerald-500/20 rounded-3xl hover:bg-card/80 hover:border-emerald-500/40 transition-all duration-500 cursor-pointer min-w-80 mx-auto shadow-2xl"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <WhatsAppIcon />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Parlons dès maintenant</h4>
              <p className="text-base text-gray-300">Réponse express • Disponible 7j/7</p>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                100% Satisfaction Garantie
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Support Prioritaire
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                Sans Engagement
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;