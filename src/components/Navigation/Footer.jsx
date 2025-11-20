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
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <motion.footer
      className="w-full border-t border-[#E8DDD5] bg-cream-500 py-16 mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo_freddy_photography.avif"
                alt="Freddy Photographie Logo"
                className="h-16 w-auto"
              />
              <h3 className="text-lg font-heading font-semibold text-[#7D6B5A]">
                Freddy Photographie
              </h3>
            </div>
            <p className="text-[#8F7A65] font-body text-sm leading-relaxed mb-6">
              Photographe passionné basé à La Réunion, spécialisé dans les événements personnels et professionnels.
            </p>
            <div className="space-y-3 text-sm text-[#8F7A65] font-body">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-400" />
                Île de La Réunion
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400" />
                06 92 30 37 47
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400" />
                freddyphotographie71@gmail.com
              </p>
              <p className="text-xs text-[#A89080] mt-2">
                SIRET : 98140827100014
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-subheading font-semibold text-[#7D6B5A] tracking-wide uppercase mb-6">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#8F7A65] hover:text-gold-400 transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-subheading font-semibold text-[#7D6B5A] tracking-wide uppercase mb-6">
              Suivez-moi
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#A89080] hover:border-gold-400 hover:bg-gold-50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#8B7355]" />
                </motion.a>
              ))}
            </div>
            <p className="text-[#8F7A65] font-body text-sm leading-relaxed">
              Retrouvez mes derniers travaux et coulisses sur Instagram
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8DDD5] text-center">
          <p className="flex items-center justify-center gap-2 text-[#8F7A65] font-body text-sm mb-2">
            Fait avec <Heart className="w-4 h-4 text-gold-400 fill-gold-400" /> par{" "}
            <span className="text-[#7D6B5A] font-medium">Freddy</span>
          </p>
          <p className="text-[#A89080] font-body text-xs tracking-wide">
            © {new Date().getFullYear()} Freddy Photographie - Tous droits réservés.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
