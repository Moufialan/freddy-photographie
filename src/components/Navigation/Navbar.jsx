import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          <div className="hidden md:flex gap-6">
            {[
              { label: 'Galeries', path: '/galeries' },
              { label: 'Tarifs', path: '/tarifs' },
              { label: 'Blog', path: '/blog' },
              { label: 'À Propos', path: '/a-propos' },
              { label: 'Contact', path: '/contact' }
            ].map((item) => (
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;