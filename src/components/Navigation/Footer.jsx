import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/freddyphotographie971', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/freddyphotographie971', label: 'Facebook' },
    { icon: Mail, href: 'mailto:freddyphotographie71@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Galeries', path: '/galeries' },
    { label: 'Tarifs', path: '/tarifs' },
    { label: 'Blog', path: '/blog' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'Galerie Privée', path: '/galerie-privee' }
  ];

  return (
    <motion.footer
      className="w-full border-t border-accent-700/30 bg-accent-950/90 backdrop-blur-sm py-12 mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo_freddy_photography.avif"
                alt="Freddy Photographie Logo"
                className="h-24 w-auto"
              />
              <h3 className="text-xl font-bold text-white">Freddy Photographie</h3>
            </div>
            <p className="text-accent-400 text-sm mb-4">
              Photographe passionné basé à La Réunion, spécialisé dans les événements personnels et professionnels.
            </p>
            <div className="space-y-2 text-sm text-accent-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Île de La Réunion
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                06 92 30 37 47
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                freddyphotographie71@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-accent-400 hover:text-accent-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Suivez-moi</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-accent-700/50 bg-accent-900/50 hover:border-accent-500 hover:bg-accent-800/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-accent-400 text-sm">
              Retrouvez mes derniers travaux et coulisses sur Instagram
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-800/50 text-center">
          <p className="flex items-center justify-center gap-2 text-accent-400 text-sm">
            Fait avec <Heart className="w-4 h-4 text-accent-500" /> par{" "}
            <span className="text-accent-300">Freddy</span>
          </p>
          <p className="mt-2 text-accent-500 text-sm">
            © {new Date().getFullYear()} Freddy Photographie - Tous droits réservés.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;