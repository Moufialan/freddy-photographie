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
      {/* Hero Section */}
      <motion.section
        className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-accent-200 to-white text-transparent bg-clip-text">
              Capturez L'Instant
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Photographe professionnel passionné, spécialisé dans l'art de capturer
            les émotions authentiques et les moments précieux qui racontent votre histoire.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/galeries">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-medium text-lg hover:from-primary-500 hover:to-accent-500 transition-all flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes Galeries
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 border border-accent-700 rounded-lg font-medium text-lg hover:border-accent-500 hover:bg-accent-900/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me Contacter
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent-500 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-accent-900/30 border border-accent-700/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-accent-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Photos Section */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-accent-300 text-transparent bg-clip-text">
              Sélection Best-Of
            </span>
          </h2>
          <p className="text-accent-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes clichés favoris à travers différentes catégories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary-900 to-accent-900 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder - remplacer par vraie photo */}
              <div className="w-full h-full flex items-center justify-center">
                <Camera className="w-16 h-16 text-accent-500/30" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{photo.category}</h3>
                  <div className="flex items-center gap-2 text-accent-300">
                    <span className="text-sm">Voir la galerie</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
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
          <Link to="/galeries">
            <motion.button
              className="px-8 py-3 border border-accent-700 rounded-lg font-medium hover:border-accent-500 hover:bg-accent-900/50 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir Toutes les Galeries
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Services CTA Section */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-12 rounded-2xl bg-gradient-to-br from-primary-900/50 to-accent-900/50 border border-accent-700/30 backdrop-blur-sm text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Immortaliser vos Moments ?
          </h2>
          <p className="text-accent-300 text-lg mb-8 max-w-2xl mx-auto">
            Que ce soit pour un mariage, un portrait, ou tout autre événement,
            je serais ravi de capturer vos souvenirs précieux.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tarifs">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-medium hover:from-primary-500 hover:to-accent-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les Tarifs
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 border border-accent-600 rounded-lg font-medium hover:bg-accent-800/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un Devis
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Teaser */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-accent-300 text-transparent bg-clip-text">
              Ce que Disent mes Clients
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sophie & Marc", text: "Des photos absolument magnifiques qui capturent parfaitement l'émotion de notre mariage !" },
            { name: "Famille Martin", text: "Professionnel, créatif et à l'écoute. Les photos de famille sont extraordinaires." },
            { name: "Léa B.", text: "Un vrai artiste ! Mes photos de portrait sont au-delà de mes attentes." },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-accent-900/30 border border-accent-700/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ borderColor: "rgba(148, 163, 184, 0.5)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-accent-300 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-white font-semibold">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/temoignages">
            <motion.button
              className="text-accent-400 hover:text-accent-300 transition-colors inline-flex items-center gap-2"
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
