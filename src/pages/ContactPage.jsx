import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, Phone, MapPin, Instagram, Calendar } from 'lucide-react';

const ContactPage = () => {
  const location = useLocation();
  const selectedPackage = location.state?.selectedPackage;

  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'mariage',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  });

  // Pré-remplir le message si un forfait est sélectionné
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        message: `Bonjour, je suis intéressé(e) par le forfait "${selectedPackage}". `
      }));
    }
  }, [selectedPackage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuration EmailJS - À REMPLACER avec vos propres clés
    const SERVICE_ID = 'YOUR_SERVICE_ID'; // Ex: 'service_abc123'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Ex: 'template_xyz456'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Ex: 'user_abc123xyz'

    // Préparer les données pour EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.eventDate,
      location: formData.location,
      budget: formData.budget,
      message: formData.message,
      selected_package: selectedPackage || 'Non spécifié'
    };

    // Envoyer l'email via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: 'mariage',
          eventDate: '',
          location: '',
          budget: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'freddyphotographie71@gmail.com', href: 'mailto:freddyphotographie71@gmail.com' },
    { icon: Phone, label: 'Téléphone', value: '06 92 30 37 47', href: 'tel:+262692303747' },
    { icon: MapPin, label: 'Localisation', value: 'Île de La Réunion', href: null },
    { icon: Instagram, label: 'Instagram', value: '@freddyphotographie971', href: 'https://instagram.com/freddyphotographie971' }
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
          <span className="bg-gradient-to-r from-[#7D6B5A] via-[#A89080] to-[#7D6B5A] text-transparent bg-clip-text">
            Contactez-moi
          </span>
        </h1>
        <p className="text-xl text-[#A89080] max-w-2xl mx-auto">
          Discutons de votre projet et donnons vie à vos souvenirs
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info Sidebar */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="p-6 rounded-xl bg-accent-900/30 border border-[#A89080]700/30">
            <h2 className="text-2xl font-bold text-[#8F7A65] mb-6">
              Informations de Contact
            </h2>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-accent-900/50 border border-[#A89080]700/30 hover:border-[#A89080]600 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-accent-800/50">
                    <info.icon className="w-5 h-5 text-[#8F7A65]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#8B7355] mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[#8F7A65] hover:text-[#A89080] transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#8F7A65]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/30 border border-[#A89080]700/30">
            <h3 className="text-lg font-semibold text-[#8F7A65] mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#8F7A65]" />
              Disponibilité
            </h3>
            <p className="text-[#A89080] text-sm mb-4">
              Je réponds généralement dans les 24-48 heures. Pour les demandes urgentes,
              n&apos;hésitez pas à m&apos;appeler directement.
            </p>
            <div className="text-sm text-[#8F7A65]">
              <p>📅 Lun - Ven: 9h00 - 18h00</p>
              <p>📅 Sam - Dim: Sur rendez-vous</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="p-6 rounded-xl bg-accent-900/30 border border-[#A89080]700/30">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-[#8F7A65]">250+</div>
              <div className="text-[#8F7A65]">Clients satisfaits</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-accent-900/30 backdrop-blur-sm rounded-xl p-8 border border-[#A89080]700/30"
          >
            {/* Selected Package Indicator */}
            {selectedPackage && (
              <motion.div
                className="p-4 rounded-lg bg-gold-gradient/20 border border-[#D4A574]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-[#7D6B5A] font-semibold text-sm">
                  ✨ Forfait sélectionné : <span className="text-[#8B7355]">{selectedPackage}</span>
                </p>
              </motion.div>
            )}

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone & Event Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Type de Projet *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                >
                  <option value="mariage">Mariage</option>
                  <option value="portrait">Portrait</option>
                  <option value="famille">Famille</option>
                  <option value="evenement">Événement</option>
                  <option value="paysage">Paysage</option>
                  <option value="corporate">Corporate</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Event Date & Location */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Date de l&apos;Événement
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#A89080]">
                  Lieu
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Ville ou lieu de l'événement"
                  className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                           text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:ring-accent-500/20
                           transition-all duration-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#A89080]">
                Budget Estimé
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                         text-[#8F7A65] focus:border-[#A89080]500 focus:ring-accent-500/20
                         transition-all duration-300 focus:outline-none"
              >
                <option value="">Sélectionnez un budget</option>
                <option value="100-500">100€ - 500€</option>
                <option value="500-1000">500€ - 1000€</option>
                <option value="1000-2000">1000€ - 2000€</option>
                <option value="2000-5000">2000€ - 5000€</option>
                <option value="5000+">Plus de 5000€</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#A89080]">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Parlez-moi de votre projet, vos attentes, vos idées..."
                className="w-full p-3 rounded-lg border border-[#A89080]700/50 bg-accent-800/50
                         text-[#8F7A65] placeholder-accent-500 focus:border-[#A89080]500 focus:ring-accent-500/20
                         transition-all duration-300 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg
                       font-medium text-lg hover:from-primary-500 hover:to-accent-500 transition-all
                       flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Envoyer le Message
            </motion.button>

            <p className="text-sm text-[#8B7355] text-center">
              En envoyant ce formulaire, vous acceptez d&apos;être contacté concernant votre demande.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed bottom-8 right-8 bg-accent-900/95 border border-[#A89080]500/30 text-[#8F7A65] p-4 rounded-lg shadow-lg backdrop-blur-sm z-50"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#8F7A65]" />
              <span className="font-medium">Message envoyé avec succès !</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactPage;
