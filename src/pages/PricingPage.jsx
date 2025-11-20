import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Camera, Heart, Users, Briefcase, Image as ImageIcon, CheckCircle, AlertCircle, Printer } from 'lucide-react';

const PricingTier = ({ tier, onSelect }) => {
  return (
    <motion.div
      className={`relative p-8 rounded-xl border ${
        tier.popular
          ? 'border-accent-600/50 bg-accent-800/30'
          : 'border-accent-700/30 bg-accent-900/30'
      } backdrop-blur-sm`}
      whileHover={{ scale: 1.03, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {tier.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Plus Populaire
        </motion.div>
      )}

      <div className="flex justify-between items-start mb-6">
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-white to-accent-300 text-transparent bg-clip-text"
          whileHover={{ x: 5 }}
        >
          {tier.name}
        </motion.h3>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <tier.icon className="w-6 h-6 text-accent-400" />
        </motion.div>
      </div>

      <p className="text-accent-300 mb-8 min-h-[3rem]">{tier.description}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold text-white">{tier.price}€</span>
        {tier.priceNote && (
          <span className="text-accent-400 text-sm ml-2">{tier.priceNote}</span>
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
            className="flex items-start gap-3 text-accent-300"
            variants={{
              hover: { x: 10 }
            }}
          >
            <CheckCircle className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        onClick={onSelect}
        className={`w-full px-6 py-3 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2 ${
          tier.popular
            ? 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white'
            : 'border border-accent-700 hover:border-accent-500/50 text-accent-200 hover:text-white'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const handleBooking = (packageName) => {
    setMessageContent(`Demande de réservation pour "${packageName}" en cours...`);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
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
      description: "Book professionnel complet avec accessoires",
      icon: ImageIcon,
      features: [
        "1-1h30 de shoot",
        "Robe et accessoires",
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
        "Robe et accessoires",
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
          <span className="bg-gradient-to-r from-white via-accent-200 to-white text-transparent bg-clip-text">
            Grille Tarifaire Complète
          </span>
        </h1>
        <p className="text-xl text-accent-300 max-w-2xl mx-auto">
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Options Supplémentaires
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {optionsSupplementaires.map((option, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-accent-900/30 border border-accent-700/30 hover:border-accent-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-accent-800/50">
                  <option.icon className="w-4 h-4 text-accent-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm mb-1">{option.name}</p>
                  <p className="text-accent-400 text-xs font-semibold">{option.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ce qui est inclus */}
      <motion.div
        className="mb-20 p-8 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-accent-700/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
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
                <item.icon className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-accent-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Informations pratiques */}
      <motion.div
        className="text-center text-accent-400 space-y-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm">📸 Toutes les photos sont livrées en haute résolution sur clé USB</p>
        <p className="text-sm">✨ Retouches professionnelles incluses dans tous les forfaits</p>
        <p className="text-sm">📅 Réservation conseillée à l&apos;avance pour garantir votre date</p>
        <p className="text-sm">
          Des questions ? <a href="/contact" className="text-accent-300 hover:text-white underline">Contactez-moi</a> pour plus d&apos;informations
        </p>
      </motion.div>

      {/* Success Notification */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed bottom-8 right-8 bg-accent-900/95 border border-accent-500/30 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm z-50"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-accent-400" />
              <span className="font-medium">{messageContent}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingPage;
