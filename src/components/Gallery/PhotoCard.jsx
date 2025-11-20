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
      className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cream-300 to-cream-100 cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-400"
      onClick={() => onClick && onClick(photo)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      {/* Image - Placeholder si pas de src */}
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt || photo.title || 'Photo'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-300 to-cream-100 transition-transform duration-500 group-hover:scale-110">
          <Camera className="w-16 h-16 text-[#A89080]/40" />
        </div>
      )}

      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7D6B5A]/95 via-[#7D6B5A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* Titre & Description */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {photo.title && (
            <h3 className="text-cream-50 font-heading font-semibold text-lg mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
              {photo.title}
            </h3>
          )}
          {photo.description && (
            <p className="text-cream-100 font-body text-sm transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 delay-75">
              {photo.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100">
          <motion.button
            onClick={handleLike}
            className="p-2.5 rounded-full bg-cream-50/25 backdrop-blur-md hover:bg-cream-50/40 transition-all shadow-soft"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Like"
          >
            <Heart className="w-4 h-4 text-cream-50" />
          </motion.button>
          <motion.button
            onClick={handleDownload}
            className="p-2.5 rounded-full bg-cream-50/25 backdrop-blur-md hover:bg-cream-50/40 transition-all shadow-soft"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Download"
          >
            <Download className="w-4 h-4 text-cream-50" />
          </motion.button>
        </div>

        {/* Icône d'agrandissement */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:scale-110">
          <div className="p-5 rounded-full bg-cream-50/30 backdrop-blur-md shadow-soft-lg">
            <Eye className="w-8 h-8 text-cream-50" />
          </div>
        </div>

        {/* Tags */}
        {photo.tags && photo.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100">
            {photo.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs rounded-full bg-cream-50/25 backdrop-blur-md text-cream-50 font-subheading font-medium shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Badge "Featured" si applicable */}
      {photo.featured && (
        <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-gold-gradient backdrop-blur-md text-cream-50 text-xs font-subheading font-semibold z-10 shadow-soft-lg">
          ⭐ Featured
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
