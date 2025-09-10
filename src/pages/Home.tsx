import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg pt-32">
        {/* Animated Earth Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="globe-container relative w-96 h-96 animate-spin" style={{ animationDuration: '30s' }}>
            {/* Earth-like globe dots with continents pattern */}
            {Array.from({ length: 200 }).map((_, i) => {
              const phi = Math.acos(-1 + (2 * i) / 200);
              const theta = Math.sqrt(200 * Math.PI) * phi;
              const x = Math.cos(theta) * Math.sin(phi);
              const y = Math.sin(theta) * Math.sin(phi);
              const z = Math.cos(phi);
              
              // Create continent-like patterns
              const isLand = (
                (x > -0.3 && x < 0.8 && y > -0.4 && y < 0.6) || // Africa/Europe
                (x > -0.8 && x < -0.2 && y > -0.2 && y < 0.8) || // Americas  
                (x > 0.2 && x < 0.9 && y > -0.8 && y < -0.2)    // Asia
              );
              
              const dotColor = isLand ? 'bg-primary' : 'bg-primary/40';
              const dotSize = isLand ? 'w-1.5 h-1.5' : 'w-1 h-1';
              
              return (
                <div
                  key={i}
                  className={`absolute ${dotColor} ${dotSize} rounded-full floating-dot`}
                  style={{
                    left: `${50 + x * 45}%`,
                    top: `${50 + y * 45}%`,
                    opacity: z > 0 ? z * 0.8 : 0.2,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `scale(${z > 0 ? 1 : 0.5})`
                  }}
                />
              );
            })}
            {/* Globe grid lines */}
            <div className="absolute inset-0 rounded-full border border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: 'rotateY(45deg)' }}></div>
            <div className="absolute inset-0 rounded-full border border-primary/10" style={{ transform: 'rotateY(90deg)' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Développeur Full Stack & Consultant Digital
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Njikam Nganzie
              <span className="block text-primary">Moustapha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Web, Design, Maintenance, Marketing Digital
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Développeur full stack passionné, j'accompagne les entreprises et entrepreneurs dans leur transformation digitale : 
              création de sites et applications web performants, identité visuelle impactante, maintenance fiable et stratégies marketing innovantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="btn-hero">
                Découvrir mes services
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Voir mes projets
              </Button>
            </div>

            <Button className="btn-cv mb-16">
              📄 Télécharger mon CV
            </Button>

            <div className="text-muted-foreground">
              <p className="mb-2">📍 Douala, Cameroun</p>
              <p>📧 njikammoustapha67@gmail.com | 📱 +237 693 109 528</p>
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
              { title: "Développement Web", desc: "Sites et applications React, Laravel, WordPress" },
              { title: "Design & Identité", desc: "Logos, flyers, affiches, branding complet" },
              { title: "Marketing Digital", desc: "Stratégie réseaux sociaux, community management" },
              { title: "Maintenance", desc: "Support technique, mises à jour, sécurité" }
            ].map((service, index) => (
              <Card key={index} className="glass-card p-6 card-hover">
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Galerie de Mes Créations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Logos Modernistes", 
                desc: "Identités visuelles créatives et impactantes",
                category: "Design"
              },
              { 
                title: "Applications Web", 
                desc: "Interfaces utilisateur modernes et responsives",
                category: "Développement"
              },
              { 
                title: "Flyers Événementiels", 
                desc: "Designs promotionnels accrocheurs",
                category: "Design"
              },
              { 
                title: "Systèmes de Gestion", 
                desc: "Solutions full-stack avec Laravel et React",
                category: "Développement"
              },
              { 
                title: "Affiches Personnalisées", 
                desc: "Créations sur-mesure pour tous événements",
                category: "Design"
              },
              { 
                title: "Stratégies Marketing", 
                desc: "Campagnes digitales performantes",
                category: "Marketing"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-0 card-hover group overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <Badge className="absolute top-3 left-3 bg-primary/30 text-primary border-primary/50">
                    {item.category}
                  </Badge>
                  {/* Bande transparente fine en bas - 1/4 de la hauteur */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background/90 via-background/60 to-transparent backdrop-blur-sm">
                    <div className="absolute bottom-2 left-3 right-3">
                      <h3 className="text-lg font-semibold text-primary mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Button className="btn-view w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Voir plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projets GitHub</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "portfolio_NJIKAM",
                desc: "Portfolio personnel développé en TypeScript avec React",
                tech: "TypeScript",
                stars: "⭐ 5"
              },
              {
                name: "inventory-management-system",
                desc: "Système de gestion d'inventaire full-stack",
                tech: "React + Laravel",
                stars: "⭐ 12"
              },
              {
                name: "login-new",
                desc: "Système d'authentification moderne",
                tech: "JavaScript",
                stars: "⭐ 8"
              },
              {
                name: "BANQUE-CC",
                desc: "Application bancaire en Java",
                tech: "Java",
                stars: "⭐ 6"
              },
              {
                name: "TODO",
                desc: "Application de gestion de tâches",
                tech: "CSS + JS",
                stars: "⭐ 4"
              },
              {
                name: "facialproject",
                desc: "Projet de reconnaissance faciale",
                tech: "Python",
                stars: "⭐ 15"
              }
            ].map((project, index) => (
              <Card key={index} className="glass-card p-6 card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.stars}</span>
                </div>
                <p className="text-muted-foreground mb-3">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.tech}
                  </Badge>
                  <Button className="btn-view opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="btn-hero">
              🔗 Voir tous mes projets sur GitHub
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
            <Card className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Développement Rapide</h3>
              <p className="text-muted-foreground">Livraison dans les délais avec qualité garantie</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Design Moderne</h3>
              <p className="text-muted-foreground">Interfaces attrayantes et expérience utilisateur optimale</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Support 24/7</h3>
              <p className="text-muted-foreground">Accompagnement continu et maintenance assurée</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="btn-hero text-lg px-8 py-4">
              💬 Discutons de votre projet
            </Button>
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4">
              📱 WhatsApp: +237 693 109 528
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/Njikam-nganzie-moustapha" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://wa.me/237693109528" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
            <a href="https://t.me/+237693109528" className="hover:text-primary transition-colors">
              Telegram
            </a>
            <a href="https://www.facebook.com/moustapha.njikam.492670" className="hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;