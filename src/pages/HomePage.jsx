import { motion } from "framer-motion";
import { Camera, ArrowRight, Star, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import PhotoCarousel from "../components/UI/PhotoCarousel";

const HomePage = () => {
  // Photos du carousel - Les meilleures photos de La Réunion
  const carouselPhotos = [
    {
      src: "/galleries/Acceuil/paille en queue 5.png",
      alt: "Paille-en-queue en vol - Île de La Réunion",
      title: "Paille-en-Queue",
      description: "L'oiseau emblématique de La Réunion capturé en plein vol"
    },
    {
      src: "/galleries/Acceuil/baleine doréebcouchée de soleil .png",
      alt: "Baleine à bosse au coucher de soleil",
      title: "Ballet des Baleines",
      description: "Magie d'un coucher de soleil avec les baleines à bosse"
    },
    {
      src: "/galleries/Acceuil/Un rorqual à bosse  coucher de soleil.png",
      alt: "Rorqual à bosse dans les eaux réunionnaises",
      title: "Rorqual à Bosse",
      description: "Rencontre privilégiée avec les géants des mers"
    },
    {
      src: "/galleries/Acceuil/coucher de soleil au volcan.png",
      alt: "Coucher de soleil sur le Piton de la Fournaise",
      title: "Volcan en Lumière",
      description: "Le Piton de la Fournaise sous les couleurs du couchant"
    },
    {
      src: "/galleries/Acceuil/VOLCAN 2.png",
      alt: "Le volcan actif de La Réunion",
      title: "Terre de Feu",
      description: "La puissance du Piton de la Fournaise"
    },
    {
      src: "/galleries/Acceuil/volcan.png",
      alt: "Paysage volcanique réunionnais",
      title: "Paysages Volcaniques",
      description: "L'île intense et ses merveilles naturelles"
    }
  ];

  // Photos de mariages pour la section galerie
  const weddingPhotos = [
    {
      id: 1,
      src: "/galleries/mariages/vsf-8894.jpg",
      alt: "Mariage à La Réunion",
      category: "Mariages"
    },
    {
      id: 2,
      src: "/galleries/mariages/vsf-8895.jpg",
      alt: "Cérémonie de mariage",
      category: "Mariages"
    },
    {
      id: 3,
      src: "/galleries/mariages/vsf-8899.jpg",
      alt: "Photos de couple",
      category: "Mariages"
    },
    {
      id: 4,
      src: "/galleries/mariages/vsf-8902.jpg",
      alt: "Moments précieux",
      category: "Mariages"
    }
  ];

  const stats = [
    { icon: Camera, value: "500+", label: "Projets réalisés" },
    { icon: Heart, value: "250+", label: "Clients satisfaits" },
    { icon: Award, value: "10+", label: "Années d'expérience" },
    { icon: Star, value: "5.0", label: "Note moyenne" },
  ];

  return (
    <>
      {/* Hero Section - Plein écran avec photo immersive */}
      <div className="relative -mt-32 -mx-6 lg:-mx-12">
        <motion.section
          className="relative min-h-screen flex items-center justify-center mb-20 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background Image - Paille en queue */}
          <div className="absolute inset-0">
            <img
              src="/galleries/Acceuil/paille en queue 5.png"
              alt="Paille-en-queue - Oiseau emblématique de La Réunion"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="space-y-8"
          >
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Capturez L'Instant
            </h1>

            {/* Sous-titre */}
            <p className="text-sm md:text-base font-subheading font-light text-cream-100 tracking-ultra-wide uppercase mb-8 drop-shadow-lg">
              Photographe à l'Île de La Réunion
            </p>

            {/* Description */}
            <p className="text-lg md:text-2xl font-body text-white max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
              Passionné de photographie, je capture l'authenticité de vos émotions<br className="hidden md:block" />
              et la beauté des merveilles de l'île intense
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center items-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/galeries">
                <motion.button
                  className="px-12 py-4 bg-gold-gradient text-white rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase shadow-elegant hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Découvrir mes Galeries
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-12 py-4 border-2 border-white/80 backdrop-blur-sm text-white rounded-xl font-subheading font-semibold text-sm tracking-extra-wide uppercase hover:bg-white hover:text-[#7D6B5A] transition-all duration-300 shadow-soft"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Me Contacter
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-5 h-9 border-2 border-white/80 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </div>
        </motion.section>
      </div>

      {/* Stats Section */}
      <motion.section
        className="mb-32 py-12"
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

      {/* Carousel Section - Meilleures Photos */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#7D6B5A] mb-6">
            Best-Of : L'Île Intense
          </h2>
          <p className="text-base font-body text-[#8F7A65] max-w-2xl mx-auto leading-relaxed">
            Découvrez les merveilles de La Réunion à travers mon objectif
          </p>
        </div>

        <PhotoCarousel photos={carouselPhotos} autoPlayInterval={6000} />
      </motion.section>

      {/* Galerie Mariages Preview */}
      <motion.section
        className="mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#7D6B5A] mb-6">
            Mariages & Événements
          </h2>
          <p className="text-base font-body text-[#8F7A65] max-w-2xl mx-auto leading-relaxed">
            Immortalisez vos moments les plus précieux
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {weddingPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-400"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
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

      {/* Services CTA Section */}
      <motion.section
        className="mb-32"
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

      {/* Testimonials Section */}
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
