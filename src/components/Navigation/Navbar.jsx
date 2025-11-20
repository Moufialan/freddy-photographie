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
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full backdrop-blur-lg z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/98 shadow-elegant border-b border-[#E8DDD5]'
            : 'bg-cream-50/90 border-b border-[#E8DDD5]/50'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/"
                className="flex items-center gap-4"
                onClick={closeMobileMenu}
              >
                <img
                  src="/logo_freddy_photography.avif"
                  alt="Freddy Photographie Logo"
                  className="h-16 w-auto"
                />
                <span className="text-xl font-heading font-semibold hidden sm:inline tracking-wide" style={{ color: '#7D6B5A' }}>
                  Freddy Photographie
                </span>
              </Link>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-10 items-center">
              {menuItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={item.path}
                    className="text-xs font-subheading font-semibold transition-all duration-300 tracking-extra-wide uppercase py-2 px-1"
                    style={{ color: '#8B7355' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#6B5D52';
                      e.currentTarget.style.letterSpacing = '0.25em';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#8B7355';
                      e.currentTarget.style.letterSpacing = '0.2em';
                    }}
                  >
                    {item.label}
                  </Link>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#D4A574] to-[#A89080]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bouton Hamburger Mobile */}
            <motion.button
              className="md:hidden transition-colors p-2"
              style={{ color: '#8B7355' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6B5D52'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8B7355'}
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
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(125, 107, 90, 0.6)' }}
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 right-4 left-4 bg-cream-50/98 backdrop-blur-lg rounded-xl shadow-elegant overflow-hidden"
              style={{ borderColor: '#E8DDD5', borderWidth: '1px' }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <nav className="flex flex-col p-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-6 py-4 text-sm font-subheading font-medium rounded-lg transition-all tracking-extra-wide uppercase"
                      style={{ color: '#8B7355' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#6B5D52';
                        e.currentTarget.style.backgroundColor = '#F5EDE0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#8B7355';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
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