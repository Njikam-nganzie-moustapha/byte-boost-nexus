import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projets = () => {
  const projects = [
    {
      name: "portfolio_NJIKAM",
      desc: "Portfolio personnel développé en TypeScript avec React",
      tech: "TypeScript",
      stars: "⭐ 5",
      category: "Développement"
    },
    {
      name: "inventory-management-system",
      desc: "Système de gestion d'inventaire full-stack",
      tech: "React + Laravel",
      stars: "⭐ 12",
      category: "Développement"
    },
    {
      name: "login-new",
      desc: "Système d'authentification moderne",
      tech: "JavaScript",
      stars: "⭐ 8",
      category: "Développement"
    },
    {
      name: "BANQUE-CC",
      desc: "Application bancaire en Java",
      tech: "Java",
      stars: "⭐ 6",
      category: "Développement"
    },
    {
      name: "facialproject",
      desc: "Projet de reconnaissance faciale",
      tech: "Python",
      stars: "⭐ 15",
      category: "Développement"
    },
    {
      name: "TODO",
      desc: "Application de gestion de tâches",
      tech: "CSS + JS",
      stars: "⭐ 4",
      category: "Développement"
    }
  ];

  const designProjects = [
    {
      title: "Logos Modernistes",
      desc: "Identités visuelles créatives et impactantes",
      category: "Design"
    },
    {
      title: "Flyers Événementiels",
      desc: "Designs promotionnels accrocheurs",
      category: "Design"
    },
    {
      title: "Affiches Personnalisées",
      desc: "Créations sur-mesure pour tous événements",
      category: "Design"
    },
    {
      title: "Portraits Graphiques",
      desc: "Créations artistiques personnalisées",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mes réalisations en développement et design
            </p>
          </div>

          {/* GitHub Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Projets GitHub</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
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
          </section>

          {/* Design Projects */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Créations Design</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProjects.map((item, index) => (
                <Card key={index} className="glass-card p-0 card-hover group overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute inset-0 bg-pattern opacity-10"></div>
                    <Badge className="absolute top-3 left-3 bg-primary/30 text-primary border-primary/50">
                      {item.category}
                    </Badge>
                    {/* Bande transparente en bas avec texte */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-primary/20 p-4">
                      <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
          </section>

          <div className="text-center mt-16">
            <Button className="btn-hero text-lg px-8 py-4">
              🔗 Voir tous mes projets sur GitHub
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projets;