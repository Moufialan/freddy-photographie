import { Heart, User, Mountain, PartyPopper } from 'lucide-react';

/**
 * Configuration des galeries photos
 *
 * Pour ajouter des photos :
 * 1. Placez vos images dans /public/galleries/{categorie}/
 * 2. Mettez à jour le photoCount ci-dessous
 * 3. Ajoutez une coverImage representative
 */

export const galleries = [
  {
    id: 'mariages',
    title: 'Mariages',
    slug: 'mariages',
    description: 'L\'émotion et la magie de votre jour spécial, capturés pour l\'éternité',
    icon: Heart,
    coverImage: '/galleries/mariages/cover.jpg', // À remplacer par votre photo
    photoCount: 0, // Mettez à jour avec le nombre réel de photos
    featured: true,
    order: 1,
    tags: ['mariage', 'couple', 'cérémonie', 'réception'],
  },
  {
    id: 'portraits',
    title: 'Portraits',
    slug: 'portraits',
    description: 'Des portraits authentiques qui révèlent votre personnalité unique',
    icon: User,
    coverImage: '/galleries/portraits/cover.jpg',
    photoCount: 0,
    featured: true,
    order: 2,
    tags: ['portrait', 'studio', 'individuel', 'professionnel'],
  },
  {
    id: 'paysages',
    title: 'Paysages',
    slug: 'paysages',
    description: 'La beauté de la nature capturée à travers l\'objectif',
    icon: Mountain,
    coverImage: '/galleries/paysages/cover.jpg',
    photoCount: 0,
    featured: true,
    order: 3,
    tags: ['paysage', 'nature', 'voyage', 'outdoor'],
  },
  {
    id: 'evenements',
    title: 'Événements',
    slug: 'evenements',
    description: 'Reportages photo pour tous vos événements professionnels et personnels',
    icon: PartyPopper,
    coverImage: '/galleries/evenements/cover.jpg',
    photoCount: 0,
    featured: false,
    order: 4,
    tags: ['événement', 'corporate', 'soirée', 'reportage'],
  },
];

/**
 * Photos individuelles (exemples)
 * En production, ces données pourraient venir d'un CMS ou être générées automatiquement
 */
export const samplePhotos = {
  mariages: [
    // Exemple de structure - à adapter selon vos besoins
    // {
    //   id: 1,
    //   src: '/galleries/mariages/photo-1.jpg',
    //   alt: 'Mariage Sophie & Marc - Cérémonie',
    //   title: 'Premier baiser',
    //   description: 'L\'émotion du premier baiser en tant que mariés',
    //   tags: ['cérémonie', 'couple'],
    //   featured: true,
    // },
  ],
  portraits: [],
  paysages: [],
  evenements: [],
};

/**
 * Obtenir une galerie par son ID
 */
export const getGalleryById = (id) => {
  return galleries.find(gallery => gallery.id === id);
};

/**
 * Obtenir toutes les galeries featured
 */
export const getFeaturedGalleries = () => {
  return galleries.filter(gallery => gallery.featured).sort((a, b) => a.order - b.order);
};

/**
 * Obtenir toutes les catégories (pour les filtres)
 */
export const getCategories = () => {
  return galleries.map(gallery => ({
    id: gallery.id,
    title: gallery.title,
    slug: gallery.slug,
  }));
};
