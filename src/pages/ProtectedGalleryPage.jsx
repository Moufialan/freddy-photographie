import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Eye, Download, Share2, AlertCircle } from 'lucide-react';

const ProtectedGalleryPage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  // Codes d'accès fictifs - en production, ceci devrait être géré côté serveur
  const validCodes = {
    'MARIAGE2024': {
      title: 'Mariage Sophie & Marc',
      date: '15 Juillet 2024',
      photos: 120,
      category: 'mariage'
    },
    'FAMILLE2024': {
      title: 'Séance Famille Martin',
      date: '10 Octobre 2024',
      photos: 45,
      category: 'famille'
    }
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    const upperCode = code.toUpperCase();

    if (validCodes[upperCode]) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Code incorrect. Veuillez vérifier votre code d\'accès.');
    }
  };

  // Placeholder photos pour la démo
  const demoPhotos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    thumbnail: `/protected/photo-${i + 1}.jpg`,
    full: `/protected/photo-${i + 1}-full.jpg`
  }));

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#7D6B5A] via-[#A89080] to-[#7D6B5A] text-transparent bg-clip-text">
            Galerie Privée
          </span>
        </h1>
        <p className="text-xl text-[#A89080] max-w-2xl mx-auto">
          Espace sécurisé pour accéder à vos photos
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* Login Form */
          <motion.div
            key="login"
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="p-8 rounded-xl bg-accent-900/30 border border-[#A89080]700/30 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-accent-800/50 border border-[#A89080]700/50">
                  <Lock className="w-12 h-12 text-[#8F7A65]" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#8F7A65] text-center mb-2">
                Accès Sécurisé
              </h2>
              <p className="text-[#8F7A65] text-center mb-8">
                Entrez le code d&apos;accès fourni par email
              </p>

              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#A89080] mb-2">
                    Code d&apos;Accès
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError('');
                    }}
                    placeholder="Ex: MARIAGE2024"
                    className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50 text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:outline-none uppercase tracking-wider text-center text-lg"
                    autoFocus
                  />
                </div>

                {error && (
                  <motion.div
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-[#8F7A65] font-medium hover:from-primary-500 hover:to-accent-500 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Unlock className="w-5 h-5" />
                  Déverrouiller la Galerie
                </motion.button>
              </form>

              <div className="mt-6 p-4 rounded-lg bg-accent-800/30 border border-[#A89080]700/30">
                <p className="text-sm text-[#8F7A65] text-center mb-2">
                  💡 Pour tester cette démo, utilisez:
                </p>
                <p className="text-xs text-[#8B7355] text-center font-mono">
                  MARIAGE2024 ou FAMILLE2024
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 p-6 rounded-xl bg-accent-900/20 border border-[#A89080]700/20">
              <h3 className="font-semibold text-[#8F7A65] mb-3">Comment ça marche ?</h3>
              <ul className="space-y-2 text-sm text-[#A89080]">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7355]">•</span>
                  <span>Vous avez reçu un code unique par email après votre séance photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7355]">•</span>
                  <span>Entrez ce code pour accéder à votre galerie privée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7355]">•</span>
                  <span>Téléchargez vos photos en haute résolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7355]">•</span>
                  <span>Les galeries restent accessibles pendant 90 jours</span>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : (
          /* Gallery View */
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Gallery Header */}
            <div className="mb-8 p-6 rounded-xl bg-accent-900/30 border border-[#A89080]700/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#8F7A65] mb-1">
                    {validCodes[code.toUpperCase()].title}
                  </h2>
                  <p className="text-[#8F7A65]">
                    {validCodes[code.toUpperCase()].date} • {validCodes[code.toUpperCase()].photos} photos
                  </p>
                </div>
                <motion.button
                  onClick={() => setIsUnlocked(false)}
                  className="px-4 py-2 rounded-lg border border-[#A89080]700/50 text-[#A89080] hover:border-[#A89080]600 hover:text-[#8F7A65] transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <Lock className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  className="px-4 py-2 rounded-lg bg-accent-800/50 border border-[#A89080]700/50 text-[#A89080] hover:border-[#A89080]600 hover:text-[#8F7A65] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Download className="w-4 h-4" />
                  Tout Télécharger
                </motion.button>
                <motion.button
                  className="px-4 py-2 rounded-lg bg-accent-800/50 border border-[#A89080]700/50 text-[#A89080] hover:border-[#A89080]600 hover:text-[#8F7A65] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Share2 className="w-4 h-4" />
                  Partager
                </motion.button>
                <motion.button
                  className="px-4 py-2 rounded-lg bg-accent-800/50 border border-[#A89080]700/50 text-[#A89080] hover:border-[#A89080]600 hover:text-[#8F7A65] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Eye className="w-4 h-4" />
                  Diaporama
                </motion.button>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {demoPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-900 to-accent-900 border border-[#A89080]700/30 cursor-pointer group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Placeholder - remplacer par vraies photos */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#8B7355]/30 text-xs">Photo {photo.id}</span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <motion.button
                      className="p-2 rounded-full bg-cream-50/20 backdrop-blur-sm hover:bg-cream-50/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Eye className="w-5 h-5 text-[#8F7A65]" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-cream-50/20 backdrop-blur-sm hover:bg-cream-50/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Download className="w-5 h-5 text-[#8F7A65]" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Info */}
            <div className="mt-8 p-4 rounded-lg bg-accent-900/20 border border-[#A89080]700/20 text-center">
              <p className="text-sm text-[#8F7A65]">
                💾 Les photos sont disponibles en haute résolution (300 DPI) pour l&apos;impression
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProtectedGalleryPage;
