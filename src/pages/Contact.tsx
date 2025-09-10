import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+237 693 109 528",
      link: "https://wa.me/237693109528"
    },
    {
      icon: "📧",
      title: "Email",
      value: "njikammoustapha67@gmail.com",
      link: "mailto:njikammoustapha67@gmail.com"
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "Douala, Cameroun",
      link: null
    },
    {
      icon: "💬",
      title: "Telegram",
      value: "@moustapha_dev",
      link: "https://t.me/+237693109528"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Njikam-nganzie-moustapha",
      icon: "🔗"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/moustapha.njikam.492670",
      icon: "📘"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@moustapha_1",
      icon: "🎵"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mercleo2",
      icon: "📷"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Contactez-moi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prêt à transformer votre vision digitale ? Contactez-moi pour discuter de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Informations de Contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass-card p-6 card-hover">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-primary">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Cards */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Mes Services</h2>
              <div className="space-y-6">
                <Card className="glass-card p-6 text-center">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Développement Rapide</h3>
                  <p className="text-muted-foreground mb-4">Livraison dans les délais avec qualité garantie</p>
                  <Button className="btn-hero w-full">Demander un devis</Button>
                </Card>
                
                <Card className="glass-card p-6 text-center">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Design Moderne</h3>
                  <p className="text-muted-foreground mb-4">Interfaces attrayantes et expérience utilisateur optimale</p>
                  <Button className="btn-hero w-full">Voir portfolio</Button>
                </Card>
                
                <Card className="glass-card p-6 text-center">
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Support 24/7</h3>
                  <p className="text-muted-foreground mb-4">Accompagnement continu et maintenance assurée</p>
                  <Button className="btn-hero w-full">Me contacter</Button>
                </Card>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Suivez-moi sur les réseaux sociaux</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.icon} {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="btn-hero text-lg px-8 py-4">
              💬 Commencer notre collaboration
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;