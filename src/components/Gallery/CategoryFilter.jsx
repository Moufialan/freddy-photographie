import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {/* Filtre "Toutes" */}
      <motion.button
        onClick={() => onCategoryChange('all')}
        className={`px-8 py-3.5 rounded-xl font-subheading font-semibold text-sm tracking-wide uppercase transition-all ${
          activeCategory === 'all'
            ? 'bg-gold-gradient text-cream-50 shadow-soft-lg'
            : 'border-2 border-[#E8DDD5] text-[#8B7355] hover:border-[#D4A574] hover:bg-cream-200 hover:text-[#7D6B5A] shadow-soft'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
            className={`px-8 py-3.5 rounded-xl font-subheading font-semibold text-sm tracking-wide uppercase transition-all inline-flex items-center gap-2.5 ${
              isActive
                ? 'bg-gold-gradient text-cream-50 shadow-soft-lg'
                : 'border-2 border-[#E8DDD5] text-[#8B7355] hover:border-[#D4A574] hover:bg-cream-200 hover:text-[#7D6B5A] shadow-soft'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{category.title}</span>
            {category.photoCount > 0 && (
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  isActive
                    ? 'bg-cream-50/25 text-cream-50'
                    : 'bg-[#E8DDD5] text-[#8B7355]'
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
