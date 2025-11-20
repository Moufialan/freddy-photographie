import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: 'Galeries', path: '/galeries' },
    { label: 'Tarifs', path: '/tarifs' },
    { label: 'Blog', path: '/blog' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full border-b border-primary-500/30 backdrop-blur-sm z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary-950/90 shadow-lg shadow-primary-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={closeMobileMenu}
              >
                <img
                  src="/logo_freddy_photography.avif"
                  alt="Freddy Photographie Logo"
                  className="h-20 w-auto"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-accent-200 to-accent-400 text-transparent bg-clip-text hidden sm:inline">
                  Freddy Photographie
                </span>
              </Link>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="text-accent-300 hover:text-accent-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-200 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bouton Hamburger Mobile */}
            <motion.button
              className="md:hidden text-accent-300 hover:text-accent-100 transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 right-4 left-4 bg-primary-900/95 backdrop-blur-md rounded-2xl border border-accent-500/20 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <nav className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-6 py-4 text-lg text-accent-300 hover:text-accent-100 hover:bg-accent-500/10 rounded-xl transition-all"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;