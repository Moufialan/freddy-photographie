import { motion } from 'framer-motion';
import { Camera, Award, Heart, MapPin } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Camera, label: 'Projets réalisés', value: '500+' },
    { icon: Award, label: "Années d'expérience", value: '10+' },
    { icon: Heart, label: 'Clients satisfaits', value: '250+' },
    { icon: MapPin, label: 'Pays visités', value: '25+' }
  ];

  const equipment = [
    { category: 'Boîtiers', items: ['Canon EOS R5', 'Sony A7R IV'] },
    { category: 'Objectifs', items: ['Canon RF 24-70mm f/2.8', 'Sony FE 85mm f/1.4', 'Canon RF 70-200mm f/2.8'] },
    { category: 'Éclairage', items: ['Profoto B10', 'Godox AD600', 'Réflecteurs'] },
    { category: 'Accessoires', items: ['DJI Ronin', 'Trépied Manfrotto', 'Filtres ND'] }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-accent-200 to-white text-transparent bg-clip-text">
            À Propos
          </span>
        </h1>
        <p className="text-xl text-accent-300 max-w-3xl mx-auto">
          Photographe professionnel passionné par la capture d&apos;émotions et de moments authentiques
        </p>
      </motion.div>

      {/* Photo & Bio Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="aspect-[3/4] rounded-xl overflow-hidden border border-accent-700/50 bg-accent-900/50">
            <img
              src="/photo_freddy.avif"
              alt="Freddy - Photographe professionnel"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white">Freddy</h2>
          <div className="space-y-4 text-accent-300 leading-relaxed">
            <p>
              Bonjour ! Je suis Freddy, photographe basé à l&apos;Île de La Réunion.
            </p>
            <p>
              Je suis d&apos;abord un passionné de la photographie et ce depuis plusieurs années maintenant.
              Je propose donc des prestations photographiques diverses et variées et adaptées à chaque besoin.
            </p>
            <p>
              Je peux vous offrir un large éventail de services de prises de vue destinées à mettre en valeur
              vos événements personnels ou professionnels.
            </p>
            <p>
              Vous souhaitez immortaliser votre grossesse ou le plus beau jour de votre vie ou tout simplement
              vous faire des souvenirs ? N&apos;hésitez pas à me contacter pour en savoir plus.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-xl bg-accent-900/30 border border-accent-700/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: 'rgba(148, 163, 184, 0.5)' }}
          >
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-accent-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Equipment Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Mon Équipement
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-accent-900/30 border border-accent-700/30 backdrop-blur-sm"
              whileHover={{ y: -5, borderColor: 'rgba(148, 163, 184, 0.5)' }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-accent-700/50 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-accent-300 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="mt-20 p-8 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-accent-700/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Ma Démarche Créative
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Discussion pour comprendre vos besoins et vos attentes' },
            { step: '02', title: 'Création', desc: 'Séance photo avec direction artistique personnalisée' },
            { step: '03', title: 'Livraison', desc: 'Retouches professionnelles et galerie en ligne privée' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-accent-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
