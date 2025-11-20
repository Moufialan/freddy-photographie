import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {/* Filtre "Toutes" */}
      <motion.button
        onClick={() => onCategoryChange('all')}
        className={`px-6 py-3 rounded-lg font-medium transition-all ${
          activeCategory === 'all'
            ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
            : 'bg-accent-900/30 border border-accent-700/30 text-accent-300 hover:border-accent-600 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Toutes les Photos
        {activeCategory === 'all' && (
          <motion.span
            className="ml-2 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            ✓
          </motion.span>
        )}
      </motion.button>

      {/* Filtres par catégorie */}
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;

        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
              isActive
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                : 'bg-accent-900/30 border border-accent-700/30 text-accent-300 hover:border-accent-600 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {Icon && <Icon className="w-4 h-4" />}
            <span>{category.title}</span>
            {category.photoCount > 0 && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-white/20'
                    : 'bg-accent-800/50'
                }`}
              >
                {category.photoCount}
              </span>
            )}
            {isActive && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                ✓
              </motion.span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      photoCount: PropTypes.number,
    })
  ).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
