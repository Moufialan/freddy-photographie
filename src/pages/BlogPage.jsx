import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Articles de blog (à terme, ces données pourraient venir d'un fichier séparé ou d'un CMS)
const blogPosts = [
  {
    id: 1,
    title: "10 Conseils pour Réussir vos Photos de Mariage",
    excerpt: "Découvrez mes meilleurs conseils pour capturer les moments magiques d'un mariage, de la préparation à la première danse.",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Conseils",
    image: "/blog/mariage-tips.jpg",
    slug: "conseils-photos-mariage"
  },
  {
    id: 2,
    title: "Les Meilleures Heures pour Photographier en Extérieur",
    excerpt: "Apprenez à maîtriser la lumière naturelle et découvrez pourquoi l'heure dorée est si prisée par les photographes.",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Technique",
    image: "/blog/golden-hour.jpg",
    slug: "meilleures-heures-photo-exterieur"
  },
  {
    id: 3,
    title: "Comment Préparer une Séance Photo Portrait",
    excerpt: "Guide complet pour vous préparer à votre séance portrait : tenue, maquillage, poses naturelles et plus encore.",
    date: "2024-01-05",
    readTime: "6 min",
    category: "Portraits",
    image: "/blog/portrait-prep.jpg",
    slug: "preparer-seance-photo-portrait"
  },
  {
    id: 4,
    title: "Mes Destinations Préférées pour la Photo de Paysage",
    excerpt: "Exploration de lieux magiques à travers le monde qui offrent des opportunités photographiques exceptionnelles.",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Voyage",
    image: "/blog/paysages.jpg",
    slug: "destinations-photo-paysage"
  }
];

const BlogCard = ({ post }) => {
  return (
    <motion.article
      className="group rounded-xl overflow-hidden border border-accent-700/30 bg-accent-900/30 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary-900 to-accent-900 relative">
        {/* Placeholder - remplacer par vraie image */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-accent-500/30 text-sm">Image à venir</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-accent-900/80 backdrop-blur-sm border border-accent-700/50 text-accent-300 text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-accent-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
          {post.title}
        </h3>

        <p className="text-accent-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors group/link"
        >
          Lire la suite
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

const BlogPage = () => {
  const categories = ['Tous', 'Conseils', 'Technique', 'Portraits', 'Voyage'];

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
          <span className="bg-gradient-to-r from-white via-accent-200 to-white text-transparent bg-clip-text">
            Blog
          </span>
        </h1>
        <p className="text-xl text-accent-300 max-w-2xl mx-auto">
          Conseils, inspirations et histoires derrière l&apos;objectif
        </p>
      </motion.div>

      {/* Categories Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full border transition-all ${
              index === 0
                ? 'bg-accent-700/50 border-accent-600 text-white'
                : 'border-accent-700/30 text-accent-400 hover:border-accent-600 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {category}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        className="mt-20 p-8 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-accent-700/30 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Restez Informé
        </h2>
        <p className="text-accent-300 mb-6">
          Recevez mes derniers articles et conseils photo directement dans votre boîte mail
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Votre email"
            className="flex-1 px-4 py-3 rounded-lg bg-accent-900/50 border border-accent-700/50 text-white placeholder-accent-500 focus:border-accent-500 focus:outline-none"
          />
          <motion.button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:from-primary-500 hover:to-accent-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            S&apos;inscrire
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPage;
