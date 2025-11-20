import { motion } from "framer-motion";
import { Camera, ArrowRight, Star, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Best-of photos (placeholder - à remplacer par vraies photos)
  const featuredPhotos = [
    { id: 1, category: "Mariage", image: "/featured/wedding.jpg" },
    { id: 2, category: "Portrait", image: "/featured/portrait.jpg" },
    { id: 3, category: "Paysage", image: "/featured/landscape.jpg" },
    { id: 4, category: "Événement", image: "/featured/event.jpg" },
  ];

  const stats = [
    { icon: Camera, value: "500+", label: "Projets réalisés" },
    { icon: Heart, value: "250+", label: "Clients satisfaits" },
    { icon: Award, value: "10+", label: "Années d'expérience" },
    { icon: Star, value: "5.0", label: "Note moyenne" },
  ];

  return (
    <>
      {/* Hero Section - Design Lumineux et Élégant */}
      <motion.section
        className="min-h-[85vh] flex flex-col justify-center items-center text-center mb-40 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background subtil avec photo en opacity très basse (optionnel) */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-gold-100 to-nude-100" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="space-y-8"
        >
          {/* Titre principal - Élégant avec Playfair Display */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-semibold text-[#7D6B5A] mb-6 leading-tight">
            Capturez L'Instant
          </h1>

          {/* Sous-titre - Lettres espacées */}
          <p className="text-sm md:text-base font-subheading font-light text-[#A89080] tracking-ultra-wide uppercase mb-8">
            Photographe de Moments Lumineux et Sincères
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl font-body text-[#8F7A65] max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Photographe professionnel passionné, je capture l'authenticité de vos émotions
            et la beauté de vos instants précieux avec sensibilité et créativité.
          </p>

          {/* CTA Buttons - Sophistiqués et élégants */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/galeries">
              <motion.button
                className="px-12 py-4 bg-gold-gradient text-cream-50 rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase shadow-soft-lg hover:shadow-elegant transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Découvrir mes Galeries
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-12 py-4 border-2 border-[#A89080] text-[#8B7355] rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase hover:border-[#D4A574] hover:bg-cream-200 hover:text-[#7D6B5A] transition-all duration-300 shadow-soft"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Me Contacter
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Subtil */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-5 h-9 border border-[#A89080] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-400 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section - Élégante et aérée */}
      <motion.section
        className="mb-40 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-gold-400 stroke-[1.5]" />
              <div className="text-5xl font-heading font-semibold text-[#7D6B5A] mb-2">{stat.value}</div>
              <div className="text-sm font-subheading text-[#8F7A65] tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Photos Section */}
      <motion.section
        className="mb-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#7D6B5A] mb-6">
            Sélection Best-Of
          </h2>
          <p className="text-base font-body text-[#8F7A65] max-w-2xl mx-auto leading-relaxed">
            Découvrez quelques-uns de mes clichés favoris à travers différentes catégories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-400 cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-400"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Placeholder - remplacer par vraie photo */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-300 to-cream-100 transition-transform duration-500 group-hover:scale-110">
                <Camera className="w-20 h-20 text-[#A89080] stroke-[1]" />
              </div>

              {/* Overlay - Subtil et élégant */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7D6B5A]/90 via-[#7D6B5A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-heading font-semibold text-cream-50 mb-3">{photo.category}</h3>
                  <div className="flex items-center gap-2 text-cream-100 font-subheading text-sm tracking-wide">
                    <span>Voir la galerie</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/galeries">
            <motion.button
              className="px-12 py-4 border-2 border-[#A89080] text-[#8B7355] rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase hover:border-[#D4A574] hover:bg-cream-200 hover:text-[#7D6B5A] transition-all duration-300 inline-flex items-center gap-3 shadow-soft"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Voir Toutes les Galeries
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Services CTA Section - Élégant et spacieux */}
      <motion.section
        className="mb-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="py-20 px-8 md:px-16 rounded-2xl bg-gradient-to-br from-cream-200 to-cream-100 text-center shadow-soft-lg border border-[#E8DDD5]">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[#7D6B5A] mb-6">
            Prêt à Immortaliser vos Moments ?
          </h2>
          <p className="text-lg font-body text-[#A89080] mb-10 max-w-2xl mx-auto leading-relaxed">
            Que ce soit pour un mariage, un portrait, ou tout autre événement,
            je serais ravi de capturer vos souvenirs précieux.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/tarifs">
              <motion.button
                className="px-12 py-4 bg-gold-gradient text-cream-50 rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase shadow-soft-lg hover:shadow-elegant transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Voir les Tarifs
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-12 py-4 border-2 border-[#A89080] text-[#8B7355] rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase hover:border-[#D4A574] hover:bg-cream-200 hover:text-[#7D6B5A] transition-all duration-300 shadow-soft"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Demander un Devis
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Teaser - Élégant */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#7D6B5A] mb-6">
            Ce que Disent mes Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sophie & Marc", text: "Des photos absolument magnifiques qui capturent parfaitement l'émotion de notre mariage !" },
            { name: "Famille Martin", text: "Professionnel, créatif et à l'écoute. Les photos de famille sont extraordinaires." },
            { name: "Léa B.", text: "Un vrai artiste ! Mes photos de portrait sont au-delà de mes attentes." },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-cream-50 border border-[#E8DDD5] shadow-soft hover:shadow-soft-lg transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-[#A89080] font-body italic mb-6 leading-relaxed text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-[#7D6B5A] font-subheading font-semibold text-sm tracking-wide">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/temoignages">
            <motion.button
              className="text-gold-400 hover:text-gold-500 font-subheading font-medium text-sm tracking-wide transition-colors inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Voir tous les témoignages
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HomePage;
