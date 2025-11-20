import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { X, ChevronLeft, ChevronRight, Download, Share2, ZoomIn } from 'lucide-react';

const Lightbox = ({ isOpen, photo, photos, currentIndex, onClose, onNext, onPrevious }) => {
  // Gestion des touches clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Bloquer le scroll du body quand le lightbox est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!photo) return null;

  const handleDownload = () => {
    // TODO: Implémenter le téléchargement
    console.log('Download:', photo.src);
  };

  const handleShare = () => {
    // TODO: Implémenter le partage
    console.log('Share:', photo.src);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Bouton Fermer */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Fermer"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Navigation Précédent */}
          {photos && photos.length > 1 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </motion.button>
          )}

          {/* Navigation Suivant */}
          {photos && photos.length > 1 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </motion.button>
          )}

          {/* Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 z-50">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Partager"
            >
              <Share2 className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Télécharger"
            >
              <Download className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Zoomer"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Compteur de photos */}
          {photos && photos.length > 1 && (
            <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm z-50">
              {currentIndex + 1} / {photos.length}
            </div>
          )}

          {/* Image principale */}
          <motion.div
            className="relative max-w-7xl max-h-[90vh] mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.alt || photo.title || 'Photo'}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <div className="w-96 h-96 flex items-center justify-center bg-primary-900 rounded-lg">
                <span className="text-accent-500">Image non disponible</span>
              </div>
            )}

            {/* Info photo */}
            {(photo.title || photo.description) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {photo.title && (
                  <h2 className="text-2xl font-bold text-white mb-2">{photo.title}</h2>
                )}
                {photo.description && (
                  <p className="text-accent-300">{photo.description}</p>
                )}
                {photo.tags && photo.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {photo.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Hint - Instructions clavier */}
          <div className="absolute bottom-4 left-4 text-sm text-accent-400 z-50">
            <p>← → pour naviguer • ESC pour fermer</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Lightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  photos: PropTypes.array,
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default Lightbox;
