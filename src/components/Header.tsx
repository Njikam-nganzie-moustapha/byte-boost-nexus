// src/components/Header.tsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projets" },
    { name: "Services", href: "/services" },
    { name: "Galerie", href: "/galerie" }, // points to the gallery page
    { name: "Contact", href: "/contact" }
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            aria-label="Accueil - NJIKAM.DEV"
          >
            NJIKAM.DEV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={navLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <Button className="hidden md:block btn-hero">Commencer</Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block py-2 text-lg w-full ${isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-4">
              <Button className="btn-hero w-full" onClick={() => setIsMenuOpen(false)}>
                Commencer
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
