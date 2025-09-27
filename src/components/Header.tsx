// src/components/Header.tsx
import React, { useState, useCallback, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projets" },
    { name: "Services", href: "/services" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" }
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r from-indigo-500 to-violet-500 after:transition-all after:duration-300 hover:after:w-full ${
      isActive
        ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 font-semibold"
        : "text-foreground hover:text-primary"
    }`;

  // Animation pour le menu mobile
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Barre de navigation principale — Effet glass */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto px-6 py-4 backdrop-blur-xl bg-background/80 border-b border-border shadow-lg"
      >
        <div className="flex items-center justify-between">
          {/* Logo animé — COULEUR PRÉSERVÉE ✅ */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              aria-label="Accueil - NJIKAM.DEV"
            >
              NJIKAM.DEV
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink to={item.href} className={navLinkClass}>
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Bouton CTA Hero — Harmonisé avec Services */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="hidden md:block bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">Commencer</Link>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary hover:bg-background/40 transition-colors backdrop-blur-sm"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation — Animée */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block py-3 text-lg font-medium text-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow font-semibold"
                            : "text-foreground hover:text-primary hover:bg-background/30"
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={closeMenu}
                >
                  <Link to="/contact">Commencer</Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default memo(Header);