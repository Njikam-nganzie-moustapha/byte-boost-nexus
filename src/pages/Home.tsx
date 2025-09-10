import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg">
        <div className="container mx-auto px-6 text-center">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-hero">
                Découvrir mes services
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Voir mes projets
              </Button>
            </div>

            <div className="mt-16 text-muted-foreground">
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
    </div>
  );
};

export default Home;