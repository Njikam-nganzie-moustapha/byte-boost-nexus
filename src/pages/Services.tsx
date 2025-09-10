import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites et applications web modernes avec React, TypeScript, Laravel",
      features: ["React & TypeScript", "Laravel API REST", "WordPress personnalisé", "Optimisation SEO"],
      price: "À partir de 500€"
    },
    {
      title: "Design & Identité Visuelle",
      description: "Création d'identités visuelles complètes et supports graphiques",
      features: ["Logos & branding", "Flyers & affiches", "Adobe Photoshop", "Canva professionnel"],
      price: "À partir de 150€"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies digitales et gestion des réseaux sociaux",
      features: ["Stratégie réseaux sociaux", "Community management", "Campagnes sponsorisées", "Rédaction web"],
      price: "À partir de 300€/mois"
    },
    {
      title: "Maintenance & Support",
      description: "Maintenance technique et support continu de vos projets",
      features: ["Résolution bugs", "Mises à jour", "Optimisation", "Support 24/7"],
      price: "À partir de 100€/mois"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Services Professionnels
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Mes Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes pour votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-8 card-hover">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Button className="btn-hero">Demander un devis</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-hero text-lg px-8 py-4">
              💬 Discutons de votre projet
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;