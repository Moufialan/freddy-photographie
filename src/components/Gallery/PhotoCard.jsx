import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Eye, Download, Heart, Camera } from 'lucide-react';

const PhotoCard = ({ photo, onClick, index = 0 }) => {
  const handleDownload = (e) => {
    e.stopPropagation();
    // TODO: Implémenter le téléchargement
    console.log('Download:', photo.src);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    // TODO: Implémenter les favoris
    console.log('Like:', photo.id);
  };

  return (
    <motion.div
      className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-900 to-secondary-900 cursor-pointer masonry-item"
      onClick={() => onClick && onClick(photo)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image - Placeholder si pas de src */}
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt || photo.title || 'Photo'}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Camera className="w-16 h-16 text-accent-500/30" />
        </div>
      )}

      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Titre & Description */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {photo.title && (
            <h3 className="text-white font-semibold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {photo.title}
            </h3>
          )}
          {photo.description && (
            <p className="text-accent-300 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {photo.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <motion.button
            onClick={handleLike}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Like"
          >
            <Heart className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button
            onClick={handleDownload}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Download"
          >
            <Download className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        {/* Icône d'agrandissement */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
            <Eye className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Tags */}
        {photo.tags && photo.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {photo.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Badge "Featured" si applicable */}
      {photo.featured && (
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-gold-600/90 backdrop-blur-sm text-white text-xs font-semibold z-10">
          Featured
        </div>
      )}
    </motion.div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

export default PhotoCard;
