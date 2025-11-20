import { motion } from 'framer-motion';

const AboutPage = () => {
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
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          <span className="bg-gradient-to-r from-[#7D6B5A] via-[#A89080] to-[#7D6B5A] text-transparent bg-clip-text">
            À Propos
          </span>
        </h1>
        <p className="text-xl font-body text-[#A89080] max-w-3xl mx-auto">
          Photographe professionnel passionné par la capture d&apos;émotions et de moments authentiques
        </p>
      </motion.div>

      {/* Photo & Bio Section */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#E8DDD5] shadow-soft-lg">
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
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
        >
          <h2 className="text-4xl font-heading font-bold text-[#7D6B5A]">Freddy</h2>
          <div className="space-y-5 text-[#A89080] font-body leading-relaxed text-lg">
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

          {/* Informations professionnelles */}
          <div className="pt-4 mt-4 border-t border-[#E8DDD5] space-y-2">
            <p className="text-[#8B7355] font-subheading text-sm tracking-wide">
              📧 freddyphotographie71@gmail.com
            </p>
            <p className="text-[#A89080] font-body text-sm">
              SIRET : 98140827100014
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
