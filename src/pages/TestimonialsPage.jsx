import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sophie & Marc Dubois",
    event: "Mariage",
    date: "Juillet 2023",
    rating: 5,
    text: "Un immense merci pour avoir immortalisé notre journée de mariage avec tant de talent et de sensibilité. Les photos sont absolument magnifiques et capturent parfaitement l'émotion de chaque moment. Nous recommandons vivement !",
    image: "/testimonials/couple1.jpg"
  },
  {
    id: 2,
    name: "Entreprise TechCorp",
    event: "Photographie Corporate",
    date: "Septembre 2023",
    rating: 5,
    text: "Professionnel, créatif et à l'écoute. Les photos de notre équipe et de nos bureaux sont d'une qualité exceptionnelle. Le travail a été livré dans les délais et a dépassé nos attentes.",
    image: "/testimonials/corporate.jpg"
  },
  {
    id: 3,
    name: "Famille Martin",
    event: "Séance Famille",
    date: "Octobre 2023",
    rating: 5,
    text: "Une expérience merveilleuse ! Notre photographe a su mettre nos enfants à l'aise et capturer leur personnalité unique. Les photos sont naturelles, joyeuses et nous les chérirons toute notre vie.",
    image: "/testimonials/family.jpg"
  },
  {
    id: 4,
    name: "Léa Bernard",
    event: "Portrait Personnel",
    date: "Novembre 2023",
    rating: 5,
    text: "J'avais besoin de nouvelles photos professionnelles et le résultat est au-delà de mes espérances. Direction artistique impeccable, retouches subtiles et photos qui reflètent vraiment ma personnalité.",
    image: "/testimonials/portrait.jpg"
  },
  {
    id: 5,
    name: "Antoine & Claire",
    event: "Séance de Fiançailles",
    date: "Décembre 2023",
    rating: 5,
    text: "Photos romantiques et authentiques qui racontent notre histoire d'amour. L'ambiance pendant la séance était détendue et les résultats sont simplement époustouflants. Merci infiniment !",
    image: "/testimonials/couple2.jpg"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`p-8 rounded-xl border backdrop-blur-sm transition-all ${
        isActive
          ? 'border-accent-600/50 bg-accent-800/30'
          : 'border-accent-700/30 bg-accent-900/30'
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-700 to-accent-700 flex items-center justify-center shrink-0">
          <Heart className="w-8 h-8 text-white/70" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
          <p className="text-accent-400 text-sm mb-2">{testimonial.event} • {testimonial.date}</p>

          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>

        <Quote className="w-10 h-10 text-accent-700/30" />
      </div>

      <p className="text-accent-200 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool
};

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate which testimonials to show (current + next 2)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

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
            Témoignages
          </span>
        </h1>
        <p className="text-xl text-accent-300 max-w-2xl mx-auto">
          Ce que mes clients disent de leur expérience
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {[
          { label: 'Clients satisfaits', value: '250+' },
          { label: 'Note moyenne', value: '5.0/5' },
          { label: 'Projets réalisés', value: '500+' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-xl bg-accent-900/30 border border-accent-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-accent-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Carousel - Desktop */}
      <div className="hidden md:block mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === 0}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Testimonials Carousel - Mobile */}
      <div className="md:hidden mb-12">
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={testimonials[currentIndex].id}
            testimonial={testimonials[currentIndex]}
            isActive={true}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <motion.button
          onClick={prevTestimonial}
          className="p-3 rounded-full border border-accent-700/50 bg-accent-900/50 hover:border-accent-600 hover:bg-accent-800/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-accent-300" />
        </motion.button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-accent-500'
                  : 'w-2 bg-accent-700'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextTestimonial}
          className="p-3 rounded-full border border-accent-700/50 bg-accent-900/50 hover:border-accent-600 hover:bg-accent-800/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-accent-300" />
        </motion.button>
      </div>

      {/* CTA Section */}
      <motion.div
        className="p-8 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-accent-700/30 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Prêt à Créer vos Souvenirs ?
        </h2>
        <p className="text-accent-300 mb-6">
          Rejoignez mes clients satisfaits et immortalisez vos moments précieux
        </p>
        <motion.button
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:from-primary-500 hover:to-accent-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Réserver une Séance
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsPage;
