import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import CategoryFilter from '../components/Gallery/CategoryFilter';
import PhotoCard from '../components/Gallery/PhotoCard';
import Lightbox from '../components/Gallery/Lightbox';
import { galleries } from '../data/galleries';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Photos de démonstration (à remplacer par vos vraies photos)
  const demoPhotos = [
    // Mariages
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `mariage-${i + 1}`,
      src: '', // À remplacer par le vrai chemin
      alt: `Photo de mariage ${i + 1}`,
      title: `Mariage ${i + 1}`,
      description: 'Moments magiques capturés',
      category: 'mariages',
      tags: ['mariage', 'couple', 'cérémonie'],
      featured: i === 0,
    })),
    // Portraits
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `portrait-${i + 1}`,
      src: '',
      alt: `Portrait ${i + 1}`,
      title: `Portrait ${i + 1}`,
      description: 'Portrait professionnel',
      category: 'portraits',
      tags: ['portrait', 'studio'],
      featured: false,
    })),
    // Paysages
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `paysage-${i + 1}`,
      src: '',
      alt: `Paysage ${i + 1}`,
      title: `Paysage ${i + 1}`,
      description: 'Beautés naturelles',
      category: 'paysages',
      tags: ['paysage', 'nature'],
      featured: false,
    })),
    // Événements
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `event-${i + 1}`,
      src: '',
      alt: `Événement ${i + 1}`,
      title: `Événement ${i + 1}`,
      description: 'Reportage événementiel',
      category: 'evenements',
      tags: ['événement', 'corporate'],
      featured: false,
    })),
  ];

  // Filtrer les photos selon la catégorie active
  const filteredPhotos = activeCategory === 'all'
    ? demoPhotos
    : demoPhotos.filter(photo => photo.category === activeCategory);

  // Gestion du lightbox
  const openLightbox = (photo) => {
    const index = filteredPhotos.findIndex(p => p.id === photo.id);
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const previousPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  // Préparer les catégories pour le filtre
  const categoriesForFilter = galleries.map(gallery => ({
    id: gallery.id,
    title: gallery.title,
    icon: gallery.icon,
    photoCount: demoPhotos.filter(p => p.category === gallery.id).length,
  }));

  return (
    <motion.div
      className="max-w-7xl mx-auto"
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
            Galeries Photo
          </span>
        </h1>
        <p className="text-xl text-accent-300 max-w-2xl mx-auto">
          Explorez mes travaux à travers différentes catégories photographiques
        </p>
      </motion.div>

      {/* Filtres par catégorie */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <CategoryFilter
          categories={categoriesForFilter}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </motion.div>

      {/* Nombre de photos affichées */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-accent-400">
          {filteredPhotos.length} photo{filteredPhotos.length > 1 ? 's' : ''}
          {activeCategory !== 'all' && (
            <span>
              {' '}dans la catégorie{' '}
              <span className="text-accent-300 font-semibold">
                {galleries.find(g => g.id === activeCategory)?.title}
              </span>
            </span>
          )}
        </p>
      </motion.div>

      {/* Grille de photos */}
      {filteredPhotos.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </motion.div>
      ) : (
        // Message si aucune photo
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Camera className="w-16 h-16 mx-auto mb-4 text-accent-500/50" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Aucune photo dans cette catégorie
          </h3>
          <p className="text-accent-400">
            Les photos seront bientôt disponibles
          </p>
        </motion.div>
      )}

      {/* Info - Comment ajouter des photos */}
      <motion.div
        className="mt-20 p-8 rounded-xl bg-accent-900/20 border border-accent-700/20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-white mb-3">
          📸 Comment ajouter vos photos ?
        </h3>
        <p className="text-accent-400 text-sm max-w-2xl mx-auto">
          Placez vos images dans le dossier <code className="px-2 py-1 bg-accent-900/50 rounded text-accent-300">/public/galleries/</code>
          {' '}correspondant à leur catégorie, puis mettez à jour le fichier{' '}
          <code className="px-2 py-1 bg-accent-900/50 rounded text-accent-300">galleries.js</code>.
          Consultez le fichier <code className="px-2 py-1 bg-accent-900/50 rounded text-accent-300">README.md</code>
          {' '}dans le dossier galleries pour plus d&apos;instructions.
        </p>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        photo={filteredPhotos[currentPhotoIndex]}
        photos={filteredPhotos}
        currentIndex={currentPhotoIndex}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrevious={previousPhoto}
      />
    </motion.div>
  );
};

export default GalleryPage;
