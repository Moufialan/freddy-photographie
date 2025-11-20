import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Camera, Heart, Users, Briefcase, Image as ImageIcon, CheckCircle, AlertCircle, Printer } from 'lucide-react';

const PricingTier = ({ tier, onSelect }) => {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl border-2 ${
        tier.popular
          ? 'border-[#D4A574] bg-gradient-to-br from-cream-300 to-cream-200 shadow-soft-lg'
          : 'border-[#E8DDD5] bg-cream-50 shadow-soft'
      } backdrop-blur-sm hover:shadow-elegant transition-all duration-400`}
      whileHover={{ scale: 1.04, y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {tier.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-gradient text-cream-50 px-6 py-2 rounded-full text-xs font-subheading font-semibold tracking-wide uppercase shadow-soft-lg"
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          ⭐ Plus Populaire
        </motion.div>
      )}

      <div className="flex justify-between items-start mb-6">
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-[#7D6B5A] to-[#A89080] text-transparent bg-clip-text"
          whileHover={{ x: 5 }}
        >
          {tier.name}
        </motion.h3>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <tier.icon className="w-6 h-6 text-[#8F7A65]" />
        </motion.div>
      </div>

      <p className="text-[#A89080] mb-8 min-h-[3rem]">{tier.description}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold text-[#8F7A65]">{tier.price}€</span>
        {tier.priceNote && (
          <span className="text-[#8F7A65] text-sm ml-2">{tier.priceNote}</span>
        )}
      </div>

      <motion.ul
        className="space-y-4 mb-8"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {tier.features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3 text-[#A89080]"
            variants={{
              hover: { x: 10 }
            }}
          >
            <CheckCircle className="w-5 h-5 text-[#8F7A65] shrink-0 mt-0.5" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        onClick={onSelect}
        className={`w-full px-8 py-4 rounded-xl font-subheading font-semibold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
          tier.popular
            ? 'bg-gold-gradient text-cream-50 shadow-soft hover:shadow-soft-lg'
            : 'border-2 border-[#A89080] hover:border-[#D4A574] text-[#8B7355] hover:text-[#7D6B5A] hover:bg-cream-200'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Réserver Maintenant
      </motion.button>
    </motion.div>
  );
};

PricingTier.propTypes = {
  tier: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    priceNote: PropTypes.string,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    popular: PropTypes.bool,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

const PricingPage = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const handleBooking = (packageName) => {
    // Rediriger vers la page de contact
    navigate('/contact', { state: { selectedPackage: packageName } });
  };

  // 1. SHOOTING PERSONNEL
  const shootingPersonnel = [
    {
      name: "Solo",
      price: 110,
      priceNote: "/la séance",
      description: "Séance photo individuelle pour capturer votre personnalité",
      icon: Camera,
      features: [
        "1h de shoot",
        "Sélection photos",
        "Retouches photo",
        "10 photos sur USB"
      ]
    },
    {
      name: "Duo/Couple - Forfait 1",
      price: 130,
      priceNote: "/la séance",
      description: "Séance photo en duo pour immortaliser vos moments à deux",
      icon: Heart,
      popular: true,
      features: [
        "1h de shoot",
        "Sélection photos",
        "Retouches photo",
        "10 photos sur USB"
      ]
    },
    {
      name: "Duo/Couple - Forfait 2",
      price: 180,
      priceNote: "/la séance",
      description: "Séance photo en duo étendue avec plus de photos",
      icon: Heart,
      features: [
        "1-1h30 de shoot",
        "Sélection photos",
        "Retouches photos",
        "15 photos sur USB"
      ]
    }
  ];

  // 2. SHOOTING PRO
  const shootingPro = [
    {
      name: "CV",
      price: 50,
      priceNote: "/la séance",
      description: "Mini séance professionnelle pour votre CV",
      icon: Briefcase,
      features: [
        "Mini séance",
        "Intérieur ou extérieur",
        "Retouches photo",
        "4 photos sur USB"
      ]
    },
    {
      name: "Book - Forfait 1",
      price: 180,
      priceNote: "/la séance",
      description: "Book professionnel complet",
      icon: ImageIcon,
      features: [
        "1-1h30 de shoot",
        "Retouches photos",
        "15 photos sur USB"
      ]
    },
    {
      name: "Book - Forfait 2",
      price: 220,
      priceNote: "/la séance",
      description: "Book professionnel premium avec plus de photos",
      icon: ImageIcon,
      popular: true,
      features: [
        "1-1h30 de shoot",
        "Retouches photos",
        "20 photos sur USB"
      ]
    }
  ];

  // 3. ÉVÈNEMENT - MARIAGE / RENOUVELLEMENT DE VŒUX
  const mariages = [
    {
      name: "MAIRIE",
      price: 600,
      description: "Couverture de votre cérémonie civile",
      icon: Users,
      features: [
        "2 heures de prises de vue",
        "Cérémonie civile",
        "Séance photo des mariés",
        "Photo avec les invités"
      ]
    },
    {
      name: "CÉRÉMONIE",
      price: 800,
      description: "Couverture complète de votre cérémonie",
      icon: Users,
      popular: true,
      features: [
        "3 heures de prises de vue",
        "Cérémonie civile/religieuse",
        "Séance photo des mariés",
        "Photo avec les invités"
      ]
    },
    {
      name: "COMPLÈTE",
      price: 1200,
      description: "Couverture totale de votre journée de mariage",
      icon: Users,
      features: [
        "5 heures de prises de vue",
        "Cérémonie civile/religieuse",
        "Séance photo des mariés",
        "Photo avec les invités",
        "Début de soirée"
      ]
    }
  ];

  // OPTIONS SUPPLÉMENTAIRES
  const optionsSupplementaires = [
    { name: "Livre photo", price: "à partir de 150€", icon: ImageIcon },
    { name: "Tirage papier 10x15", price: "1,80€", icon: Printer },
    { name: "Tirage papier 13x18", price: "3,00€", icon: Printer },
    { name: "Tirage papier 15x15", price: "5,00€", icon: Printer },
    { name: "Tirage papier 18x24", price: "10,00€", icon: Printer },
    { name: "Tirage papier 20x20", price: "8,00€", icon: Printer },
    { name: "Refus de cession de droits d'image", price: "20€", icon: AlertCircle }
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#7D6B5A] via-[#A89080] to-[#7D6B5A] text-transparent bg-clip-text">
            Grille Tarifaire Complète
          </span>
        </h1>
        <p className="text-xl text-[#A89080] max-w-2xl mx-auto">
          Des prestations photographiques adaptées à tous vos besoins
        </p>
      </motion.div>

      {/* SHOOTING PERSONNEL */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-[#8F7A65] mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
            1. Shooting Personnel
          </span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {shootingPersonnel.map((tier, index) => (
            <PricingTier
              key={index}
              tier={tier}
              onSelect={() => handleBooking(tier.name)}
            />
          ))}
        </div>
      </motion.div>

      {/* SHOOTING PRO */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-[#8F7A65] mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
            2. Shooting Pro
          </span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {shootingPro.map((tier, index) => (
            <PricingTier
              key={index}
              tier={tier}
              onSelect={() => handleBooking(tier.name)}
            />
          ))}
        </div>
      </motion.div>

      {/* ÉVÈNEMENT - MARIAGE */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-[#8F7A65] mb-8 text-center">
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
            3. Évènement - Mariage / Renouvellement de Vœux
          </span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {mariages.map((tier, index) => (
            <PricingTier
              key={index}
              tier={tier}
              onSelect={() => handleBooking(tier.name)}
            />
          ))}
        </div>
      </motion.div>

      {/* OPTIONS SUPPLÉMENTAIRES */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-[#8F7A65] text-center mb-8">
          Options Supplémentaires
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {optionsSupplementaires.map((option, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-accent-900/30 border border-[#A89080]700/30 hover:border-[#A89080]600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-accent-800/50">
                  <option.icon className="w-4 h-4 text-[#8F7A65]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#8F7A65] text-sm mb-1">{option.name}</p>
                  <p className="text-[#8F7A65] text-xs font-semibold">{option.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ce qui est inclus */}
      <motion.div
        className="mb-20 p-8 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-[#A89080]700/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[#8F7A65] mb-6 text-center">
          Toutes les Prestations Incluent
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Camera, title: 'Équipement Professionnel', desc: 'Matériel photo haute qualité pour des résultats exceptionnels' },
            { icon: ImageIcon, title: 'Retouches Professionnelles', desc: 'Correction colorimétrique et retouches soignées' },
            { icon: Heart, title: 'Accompagnement Personnalisé', desc: 'Conseils et guidance tout au long de la séance' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent-800/50 mb-4">
                <item.icon className="w-6 h-6 text-[#8F7A65]" />
              </div>
              <h3 className="text-lg font-semibold text-[#8F7A65] mb-2">{item.title}</h3>
              <p className="text-[#8F7A65] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Informations pratiques */}
      <motion.div
        className="text-center text-[#8F7A65] space-y-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm">📸 Toutes les photos sont livrées en haute résolution sur clé USB</p>
        <p className="text-sm">✨ Retouches professionnelles incluses dans tous les forfaits</p>
        <p className="text-sm">📅 Réservation conseillée à l&apos;avance pour garantir votre date</p>
        <p className="text-sm">
          Des questions ? <a href="/contact" className="text-[#A89080] hover:text-[#8F7A65] underline">Contactez-moi</a> pour plus d&apos;informations
        </p>
      </motion.div>

      {/* Success Notification */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed bottom-8 right-8 bg-accent-900/95 border border-[#A89080]500/30 text-[#8F7A65] p-4 rounded-lg shadow-lg backdrop-blur-sm z-50"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#8F7A65]" />
              <span className="font-medium">{messageContent}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingPage;
