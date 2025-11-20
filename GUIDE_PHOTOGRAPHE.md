# 📸 Guide Complet - Portfolio Photographe

## Bienvenue !

Félicitations ! Votre site portfolio photographe est maintenant prêt à l'emploi. Ce guide vous explique tout ce que vous devez savoir pour personnaliser et utiliser votre nouveau site web.

---

## 📋 Table des Matières

1. [Démarrage Rapide](#démarrage-rapide)
2. [Ajouter Vos Photos](#ajouter-vos-photos)
3. [Personnaliser Vos Informations](#personnaliser-vos-informations)
4. [Structure du Site](#structure-du-site)
5. [Guide Détaillé par Section](#guide-détaillé-par-section)
6. [Conseils Techniques](#conseils-techniques)
7. [Problèmes Courants](#problèmes-courants)
8. [Déploiement en Ligne](#déploiement-en-ligne)

---

## 🚀 Démarrage Rapide

### 1. Lancer Votre Site

Ouvrez le terminal (invite de commandes) et tapez :

```bash
npm run dev
```

Votre site sera accessible à l'adresse : **http://localhost:5174**

**Note :** Laissez cette fenêtre ouverte tant que vous travaillez sur le site.

### 2. Arrêter le Site

Dans le terminal, appuyez sur `Ctrl + C` pour arrêter le serveur.

---

## 📸 Ajouter Vos Photos

### Où Placer Vos Photos ?

Vos photos vont dans le dossier `/public/galleries/` avec cette structure :

```
public/
└── galleries/
    ├── mariages/       ← Photos de mariages
    ├── portraits/      ← Photos de portraits
    ├── paysages/       ← Photos de paysages
    └── evenements/     ← Photos d'événements
```

### Instructions Étape par Étape

#### Étape 1 : Préparer Vos Photos

**Format recommandé :**
- Type : JPEG (.jpg)
- Largeur maximum : 2000 pixels
- Qualité : 80-85%
- Poids : Moins de 500 KB par photo

**Outils gratuits pour optimiser vos photos :**
- **En ligne :** [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
- **Windows :** Utilisez "Redimensionner" dans Paint ou Photos
- **Mac :** Aperçu > Outils > Ajuster la taille

#### Étape 2 : Nommer Vos Photos

**Exemples de bons noms :**
- ✅ `mariage-sophie-marc-2024.jpg`
- ✅ `portrait-studio-lea.jpg`
- ✅ `paysage-montagne-sunset.jpg`

**À éviter :**
- ❌ `IMG_1234.jpg`
- ❌ `Photo avec espaces.jpg`
- ❌ `DSC_5678.jpg`

**Règles importantes :**
- Tout en minuscules
- Pas d'espaces (utilisez des tirets `-`)
- Pas d'accents ou caractères spéciaux

#### Étape 3 : Copier Vos Photos

1. Ouvrez le dossier du projet
2. Allez dans `public/galleries/`
3. Choisissez la bonne catégorie (mariages, portraits, etc.)
4. Collez vos photos dans ce dossier

**Exemple :**
- Photo de mariage → `public/galleries/mariages/`
- Photo de portrait → `public/galleries/portraits/`

#### Étape 4 : Mettre à Jour la Configuration

Ouvrez le fichier : `src/data/galleries.js`

Trouvez la section correspondante et modifiez :

```javascript
{
  id: 'mariages',
  title: 'Mariages',
  description: 'Vos beaux mariages',
  coverImage: '/galleries/mariages/votre-photo-principale.jpg',  ← Changez ici
  photoCount: 25,  ← Mettez le nombre réel de photos
}
```

**Répétez pour chaque catégorie** (portraits, paysages, événements).

---

## ✏️ Personnaliser Vos Informations

### 1. Votre Nom

**Fichier :** `src/components/Navigation/Navbar.jsx`

**Ligne 36 :** Remplacez `"Votre Nom Photo"` par votre nom ou nom commercial

```javascript
// Avant
Votre Nom Photo

// Après
Studio Martin Photo
```

### 2. Vos Coordonnées

**Fichier :** `src/components/Navigation/Footer.jsx`

**Lignes à modifier :**

```javascript
// Ligne 31 : Votre nom/studio
<h3 className="text-xl font-bold text-white mb-4">Studio Martin Photo</h3>

// Ligne 37 : Votre ville
Paris, France

// Ligne 41 : Votre téléphone
+33 6 12 34 56 78

// Ligne 45 : Votre email
contact@studio-martin.com
```

### 3. Réseaux Sociaux

**Fichier :** `src/components/Navigation/Footer.jsx`

**Lignes 6-9 :** Modifiez vos liens

```javascript
const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/studio_martin',  ← Votre Instagram
    label: 'Instagram'
  },
  {
    icon: Facebook,
    href: 'https://facebook.com/studiomartin',  ← Votre Facebook
    label: 'Facebook'
  },
  {
    icon: Mail,
    href: 'mailto:contact@studio-martin.com',  ← Votre email
    label: 'Email'
  }
];
```

### 4. Votre Biographie

**Fichier :** `src/pages/AboutPage.jsx`

**Lignes 62-76 :** Écrivez votre histoire

```javascript
<h2 className="text-3xl font-bold text-white">Jean Martin</h2>  ← Votre nom
<div className="space-y-4 text-accent-300 leading-relaxed">
  <p>
    Photographe professionnel depuis plus de 10 ans...  ← Votre bio
  </p>
  <p>
    Mon approche se concentre sur...  ← Votre philosophie
  </p>
  <p>
    Basé à Paris...  ← Votre localisation et accomplissements
  </p>
</div>
```

### 5. Vos Tarifs

**Fichier :** `src/pages/PricingPage.jsx`

**À partir de la ligne 129 :** Modifiez vos packages

```javascript
{
  name: "Essentiel",
  price: 499,  ← Votre prix
  description: "Parfait pour les petits événements",  ← Votre description
  features: [
    "2 heures de séance photo",  ← Vos prestations
    "50 photos retouchées",
    // ... ajoutez ou supprimez des lignes
  ],
}
```

**Vous pouvez :**
- Changer les prix
- Modifier les descriptions
- Ajouter ou supprimer des prestations
- Créer plus de packages (copiez-collez un bloc)

---

## 🏗️ Structure du Site

Votre site contient **8 pages principales** :

### 1. **Page d'Accueil** (`/`)
- Hero avec votre message principal
- Statistiques (projets, clients, expérience)
- Sélection de vos meilleures photos
- Témoignages en aperçu
- Appels à l'action

### 2. **Galeries** (`/galeries`)
- Toutes vos photos organisées par catégorie
- Filtres : Mariages, Portraits, Paysages, Événements
- Lightbox (agrandissement des photos)
- Navigation au clavier (← →)

### 3. **Tarifs** (`/tarifs`)
- 3 packages de base
- Services additionnels
- Conditions et informations de réservation

### 4. **Blog** (`/blog`)
- Articles et conseils photo
- Filtres par catégorie
- Newsletter (optionnel)

### 5. **À Propos** (`/a-propos`)
- Votre biographie
- Votre équipement
- Vos statistiques
- Votre démarche créative

### 6. **Contact** (`/contact`)
- Formulaire de contact détaillé
- Vos coordonnées
- Horaires de disponibilité

### 7. **Témoignages** (`/temoignages`)
- Avis de vos clients
- Carrousel interactif
- Statistiques de satisfaction

### 8. **Galerie Privée** (`/galerie-privee`)
- Accès protégé par code
- Pour partager des photos avec vos clients

---

## 📝 Guide Détaillé par Section

### Page d'Accueil - Personnalisation Avancée

**Fichier :** `src/pages/HomePage.jsx`

#### Modifier Vos Statistiques

**Ligne 14-19 :**

```javascript
const stats = [
  { icon: Camera, value: "500+", label: "Projets réalisés" },  ← Vos chiffres
  { icon: Heart, value: "250+", label: "Clients satisfaits" },
  { icon: Award, value: "10+", label: "Années d'expérience" },
  { icon: Star, value: "5.0", label: "Note moyenne" },
];
```

#### Modifier le Texte Principal

**Lignes 35-43 :**

```javascript
<h1>
  Capturez L'Instant  ← Votre slogan
</h1>
<p>
  Photographe professionnel passionné...  ← Votre pitch
</p>
```

#### Changer les Catégories du Best-Of

**Lignes 7-12 :**

```javascript
const featuredPhotos = [
  { id: 1, category: "Mariage", image: "/featured/wedding.jpg" },  ← Vos catégories
  { id: 2, category: "Portrait", image: "/featured/portrait.jpg" },
  // Ajoutez ou supprimez des catégories
];
```

### Galeries - Configuration Avancée

**Fichier :** `src/data/galleries.js`

#### Ajouter une Nouvelle Catégorie

Copiez-collez ce bloc et modifiez :

```javascript
{
  id: 'maternite',  ← Nom technique (minuscules, pas d'espace)
  title: 'Maternité',  ← Nom affiché
  slug: 'maternite',
  description: 'Photos de grossesse et nouveau-nés',  ← Description
  icon: Heart,  ← Icône (voir liste des icônes disponibles)
  coverImage: '/galleries/maternite/cover.jpg',  ← Photo de couverture
  photoCount: 0,  ← Nombre de photos
  featured: true,  ← Afficher sur la page d'accueil
  order: 5,  ← Ordre d'affichage
  tags: ['maternité', 'bébé', 'grossesse'],  ← Mots-clés
},
```

**Important :** Créez également le dossier correspondant dans `/public/galleries/maternite/`

#### Liste des Icônes Disponibles

Dans le fichier `galleries.js`, ligne 1 :

```javascript
import {
  Heart,        // ❤️ Cœur
  User,         // 👤 Personne
  Mountain,     // 🏔️ Montagne
  PartyPopper,  // 🎉 Fête
  Camera,       // 📷 Appareil photo
  Users,        // 👥 Groupe
  Home,         // 🏠 Maison
  Briefcase,    // 💼 Entreprise
  // ... etc.
} from 'lucide-react';
```

Pour voir toutes les icônes : [lucide.dev/icons](https://lucide.dev/icons)

### Blog - Ajouter des Articles

**Fichier :** `src/pages/BlogPage.jsx`

**Lignes 8-41 :** Modifiez ou ajoutez des articles

```javascript
const blogPosts = [
  {
    id: 1,  ← Numéro unique
    title: "10 Conseils pour Réussir vos Photos de Mariage",  ← Titre
    excerpt: "Découvrez mes meilleurs conseils...",  ← Résumé
    date: "2024-01-15",  ← Date (format AAAA-MM-JJ)
    readTime: "5 min",  ← Temps de lecture
    category: "Conseils",  ← Catégorie
    image: "/blog/mariage-tips.jpg",  ← Image (optionnel)
    slug: "conseils-photos-mariage"  ← URL de l'article
  },
  // Copiez ce bloc pour ajouter un article
];
```

### Témoignages - Ajouter des Avis Clients

**Fichier :** `src/pages/TestimonialsPage.jsx`

**Lignes 8-41 :** Ajoutez vos témoignages

```javascript
const testimonials = [
  {
    id: 1,  ← Numéro unique
    name: "Sophie & Marc Dubois",  ← Nom du client
    event: "Mariage",  ← Type d'événement
    date: "Juillet 2023",  ← Date
    rating: 5,  ← Note sur 5
    text: "Un immense merci pour avoir immortalisé...",  ← Témoignage
    image: "/testimonials/couple1.jpg"  ← Photo (optionnel)
  },
  // Copiez ce bloc pour ajouter un témoignage
];
```

### Galerie Privée - Configuration

**Fichier :** `src/pages/ProtectedGalleryPage.jsx`

**Lignes 11-23 :** Ajoutez des codes d'accès

```javascript
const validCodes = {
  'MARIAGE2024': {  ← Le code à entrer
    title: 'Mariage Sophie & Marc',  ← Nom de la galerie
    date: '15 Juillet 2024',  ← Date
    photos: 120,  ← Nombre de photos
    category: 'mariage'  ← Catégorie
  },
  // Ajoutez d'autres codes pour d'autres clients
  'PORTRAIT-MARTIN': {
    title: 'Portraits Famille Martin',
    date: '10 Septembre 2024',
    photos: 45,
    category: 'famille'
  },
};
```

**Comment ça marche :**
1. Créez un code unique pour chaque client
2. Envoyez ce code à votre client par email
3. Le client entre le code sur la page `/galerie-privee`
4. Il accède à ses photos privées

---

## 💡 Conseils Techniques

### Optimiser Vos Photos

#### Pourquoi Optimiser ?

- **Site plus rapide** : Les visiteurs n'aiment pas attendre
- **Meilleur référencement** : Google préfère les sites rapides
- **Économie de bande passante** : Coûts d'hébergement réduits

#### Comment Optimiser ?

**Méthode 1 : En ligne (Simple)**

1. Allez sur [TinyPNG.com](https://tinypng.com/)
2. Glissez-déposez vos photos (max 20 à la fois)
3. Attendez la compression (gratuit)
4. Téléchargez les photos optimisées

**Méthode 2 : Squoosh (Plus de contrôle)**

1. Allez sur [Squoosh.app](https://squoosh.app/)
2. Chargez une photo
3. Réglez :
   - Format : JPEG
   - Qualité : 80
   - Redimensionner : 2000px max
4. Téléchargez le résultat

**Méthode 3 : Photoshop/Lightroom**

1. Fichier > Exporter > Enregistrer pour le Web
2. Paramètres :
   - Format : JPEG
   - Qualité : 80 (ou 8 sur 10)
   - Dimensions : 2000px de large max
   - Progressif : Oui

### Nommer Vos Fichiers Correctement

**Pourquoi c'est important ?**
- Aide le référencement Google
- Facilite l'organisation
- Évite les erreurs techniques

**Règles d'or :**

✅ **À FAIRE :**
- Minuscules uniquement : `photo.jpg`
- Tirets pour séparer : `mariage-sophie-2024.jpg`
- Descriptif : `portrait-studio-lea.jpg`

❌ **À ÉVITER :**
- Majuscules : `PHOTO.jpg`
- Espaces : `photo mariage.jpg`
- Accents : `mariée.jpg`
- Caractères spéciaux : `photo@test!.jpg`

### Organiser Vos Photos par Catégorie

**Bonne organisation :**

```
galleries/
├── mariages/
│   ├── mariage-sophie-2024-ceremonie-01.jpg
│   ├── mariage-sophie-2024-ceremonie-02.jpg
│   ├── mariage-sophie-2024-vin-honneur-01.jpg
│   └── ...
├── portraits/
│   ├── portrait-studio-lea-01.jpg
│   ├── portrait-studio-lea-02.jpg
│   └── portrait-exterieur-marc-01.jpg
└── paysages/
    ├── paysage-montagne-alpes-sunrise.jpg
    └── ...
```

**Conseils :**
- Groupez par événement/client
- Numérotez dans l'ordre : 01, 02, 03...
- Utilisez des préfixes cohérents

### Backup (Sauvegarde)

**Très important !** Sauvegardez régulièrement :

1. **Vos photos** : `/public/galleries/`
2. **Votre configuration** : `/src/data/galleries.js`
3. **Vos modifications** : Tout le dossier du projet

**Où sauvegarder ?**
- Disque dur externe
- Cloud (Google Drive, Dropbox)
- Clé USB
- Idéalement : 2 endroits différents

---

## 🔧 Problèmes Courants

### Le Site Ne Se Lance Pas

**Symptôme :** Erreur quand vous faites `npm run dev`

**Solutions :**

1. **Vérifiez Node.js :**
   ```bash
   node --version
   ```
   Doit afficher : v18 ou supérieur

2. **Réinstallez les dépendances :**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Port occupé :**
   Le message dit "Port 5173 is in use"
   → C'est normal, il utilisera 5174 ou un autre port

### Les Photos Ne S'Affichent Pas

**Vérifiez :**

1. **Le chemin est-il correct ?**
   - Photo : `public/galleries/mariages/photo.jpg`
   - Dans le code : `/galleries/mariages/photo.jpg`
   - ⚠️ Le `/public/` est automatique, ne le mettez pas dans le code

2. **Le nom du fichier :**
   - Pas d'espaces
   - Pas d'accents
   - Extension correcte (.jpg, .png)

3. **La photo existe vraiment :**
   - Ouvrez le dossier
   - Vérifiez que la photo est là
   - Vérifiez l'orthographe exacte

### Le Site Est Lent

**Causes fréquentes :**

1. **Photos trop lourdes**
   - Vérifiez la taille : clic droit > Propriétés
   - Doit être < 500 KB
   - Solution : Optimisez avec TinyPNG

2. **Trop de photos en même temps**
   - Limitez à 50-100 photos par catégorie
   - Créez des sous-galeries si besoin

### Erreurs de Code

**Si vous voyez des erreurs rouges dans le navigateur :**

1. **Vérifiez les virgules et guillemets**
   ```javascript
   // ❌ Erreur - virgule manquante
   const info = {
     nom: "Martin"
     ville: "Paris"
   }

   // ✅ Correct
   const info = {
     nom: "Martin",  ← virgule importante
     ville: "Paris"
   }
   ```

2. **Fermez bien les accolades**
   ```javascript
   // ❌ Erreur - } manquante
   {
     nom: "Martin"

   // ✅ Correct
   {
     nom: "Martin"
   }
   ```

3. **Annulez vos modifications**
   Si vous êtes bloqué :
   ```bash
   git checkout -- nom-du-fichier.jsx
   ```
   (Cela restaure la dernière version qui fonctionnait)

---

## 🌐 Déploiement en Ligne

### Prérequis

Avant de mettre votre site en ligne, assurez-vous que :

- ✅ Toutes vos photos sont ajoutées
- ✅ Toutes vos informations sont à jour
- ✅ Vous avez testé toutes les pages
- ✅ Le site fonctionne en local (npm run dev)

### Option 1 : Netlify (Recommandé - Gratuit)

**Étape 1 : Créer un compte**
1. Allez sur [netlify.com](https://www.netlify.com/)
2. Cliquez sur "Sign up"
3. Inscrivez-vous avec GitHub ou email

**Étape 2 : Préparer le déploiement**

Dans le terminal :
```bash
npm run build
```

Cela crée un dossier `dist/` avec votre site prêt.

**Étape 3 : Déployer**

**Méthode A - Drag & Drop (Simple) :**
1. Sur Netlify, cliquez "Add new site" > "Deploy manually"
2. Glissez-déposez le dossier `dist/`
3. Attendez quelques secondes
4. Votre site est en ligne ! 🎉

**Méthode B - Via commande (Si configuré) :**
```bash
npm run deploy
```

**Étape 4 : Personnaliser l'URL**

Par défaut, Netlify vous donne une URL comme : `random-name-123.netlify.app`

Pour la personnaliser :
1. Allez dans "Site settings"
2. "Domain management"
3. "Change site name"
4. Choisissez : `studio-martin.netlify.app`

### Option 2 : Vercel (Alternative)

1. Allez sur [vercel.com](https://vercel.com/)
2. "Sign up" avec GitHub
3. "Import Project"
4. Sélectionnez votre dossier
5. Cliquez "Deploy"

### Option 3 : Votre Propre Domaine

**Acheter un domaine :**
- [Namecheap.com](https://www.namecheap.com/) : ~10€/an
- [OVH.com](https://www.ovh.com/) : ~8€/an
- [GoDaddy.com](https://www.godaddy.com/) : ~12€/an

**Connecter à Netlify :**
1. Dans Netlify : "Domain settings"
2. "Add custom domain"
3. Suivez les instructions

### Mettre à Jour Votre Site

**Quand vous modifiez des photos ou du contenu :**

1. Faites vos modifications en local
2. Testez avec `npm run dev`
3. Build : `npm run build`
4. Sur Netlify :
   - "Deploys" > "Drag and drop" le nouveau dossier `dist/`

Ou avec la commande :
```bash
npm run deploy
```

---

## 📞 Support & Ressources

### Ressources Utiles

**Optimisation d'Images :**
- [TinyPNG](https://tinypng.com/) - Compression gratuite
- [Squoosh](https://squoosh.app/) - Outil Google avancé
- [ImageOptim](https://imageoptim.com/) - Application Mac

**Icônes :**
- [Lucide Icons](https://lucide.dev/icons) - Toutes les icônes disponibles

**Couleurs :**
- [Coolors](https://coolors.co/) - Générateur de palettes
- [Adobe Color](https://color.adobe.com/) - Harmonies de couleurs

**Hébergement :**
- [Netlify](https://www.netlify.com/) - Hébergement gratuit recommandé
- [Vercel](https://vercel.com/) - Alternative gratuite

### Où Trouver de l'Aide ?

1. **Ce guide** - Lisez attentivement chaque section
2. **Le fichier README.md** dans `/public/galleries/`
3. **Google** - Cherchez votre question spécifique
4. **Votre développeur** - Si vous êtes bloqué

### Commandes Utiles à Retenir

```bash
# Démarrer le site en local
npm run dev

# Créer une version de production
npm run build

# Déployer sur Netlify (si configuré)
npm run deploy

# Vérifier la version de Node
node --version

# Réinstaller les dépendances (en cas de problème)
rm -rf node_modules
npm install
```

---

## ✅ Checklist Avant Mise en Ligne

Cochez chaque élément avant de publier votre site :

### Contenu
- [ ] Toutes les photos sont ajoutées et optimisées
- [ ] Les photos ont des noms descriptifs
- [ ] Les catégories sont configurées dans `galleries.js`
- [ ] Le nombre de photos est correct dans la config

### Informations Personnelles
- [ ] Votre nom/studio est à jour partout
- [ ] Vos coordonnées (email, téléphone, adresse)
- [ ] Vos réseaux sociaux sont liés correctement
- [ ] Votre biographie est écrite
- [ ] Vos tarifs sont corrects

### Qualité
- [ ] Toutes les pages ont été testées
- [ ] Les liens fonctionnent
- [ ] Le formulaire de contact fonctionne
- [ ] Les filtres de galerie fonctionnent
- [ ] Le lightbox s'ouvre correctement
- [ ] Le site est rapide (photos optimisées)

### Professionnalisme
- [ ] Pas de fautes d'orthographe
- [ ] Les informations sont cohérentes partout
- [ ] Les témoignages sont à jour
- [ ] Les statistiques correspondent à la réalité

### Technique
- [ ] `npm run dev` fonctionne sans erreur
- [ ] `npm run build` se termine avec succès
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le site s'affiche bien sur mobile
- [ ] Le site s'affiche bien sur tablette
- [ ] Le site s'affiche bien sur desktop

---

## 🎯 Prochaines Étapes Recommandées

Une fois votre site en ligne, voici ce que vous pouvez faire pour l'améliorer :

### Court Terme (1 semaine)
1. **Partagez votre site**
   - Sur vos réseaux sociaux
   - À vos clients existants
   - Dans votre signature email

2. **Demandez des retours**
   - À des amis/famille
   - À vos clients
   - Notez les suggestions

3. **Ajoutez du contenu**
   - Premier article de blog
   - Plus de témoignages
   - Plus de photos

### Moyen Terme (1 mois)
1. **Optimisez pour Google**
   - Ajoutez Google Analytics
   - Créez un Google Business Profile
   - Optimisez vos descriptions

2. **Améliorez l'engagement**
   - Ajoutez une newsletter
   - Créez du contenu régulier
   - Répondez aux messages

3. **Fonctionnalités avancées**
   - Système de réservation en ligne
   - Paiement en ligne
   - Chat en direct

### Long Terme (3-6 mois)
1. **Analysez les performances**
   - Quelles pages sont les plus visitées ?
   - D'où viennent vos visiteurs ?
   - Quels sont les taux de conversion ?

2. **Développez votre présence**
   - SEO avancé
   - Publicité Google Ads
   - Collaborations avec d'autres professionnels

3. **Automatisez**
   - Emails automatiques de remerciement
   - Relances clients
   - Publication automatique sur réseaux sociaux

---

## 🎨 Personnalisation Avancée (Optionnel)

### Changer les Couleurs du Site

**Fichier :** `tailwind.config.js`

**Lignes 10-66 :** Palettes de couleurs

Actuellement, le site utilise des tons neutres (noir, gris). Vous pouvez les changer :

```javascript
primary: {
  900: '#1c1917',  ← Couleur principale sombre
  500: '#78716c',  ← Couleur principale moyenne
  100: '#f5f5f4',  ← Couleur principale claire
}
```

**Exemples de palettes :**

**Style Minimaliste Noir & Blanc :**
- Parfait pour : Style épuré, galeries d'art
- Gardez les couleurs actuelles

**Style Chaleureux :**
- Pour : Mariages, portraits intimes
- Ajoutez des tons beiges/crème

**Style Moderne Coloré :**
- Pour : Événements, jeune public
- Ajoutez des touches de couleur vive

### Modifier la Police de Caractères

**Fichier :** `index.html`

Ajoutez dans le `<head>` :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

Puis dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'],  ← Ajoutez ceci
    },
  }
}
```

**Polices recommandées pour photographes :**
- **Playfair Display** : Élégant, serif classique
- **Cormorant** : Raffiné, serif moderne
- **Montserrat** : Propre, sans-serif
- **Lato** : Neutre, professionnel

---

## 📱 Réseaux Sociaux - Bonnes Pratiques

### Instagram

**Lien vers votre site :**
- Dans votre bio : "📸 Portfolio complet ↓"
- Ajoutez le lien de votre site

**Stories :**
- Partagez vos nouvelles galeries
- Montrez les coulisses
- Témoignages clients en story

### Facebook

**Page professionnelle :**
- Créez une page "Studio Martin Photographie"
- Liez votre site dans "À propos"
- Publiez vos meilleures photos

### Pinterest

**Très efficace pour les photographes !**
- Créez des boards par catégorie
- Épinglez vos photos depuis votre site
- Liez chaque pin à votre galerie

---

## 🔐 Sécurité & Confidentialité

### Galeries Privées

**Pour vos clients :**
1. Créez un code unique par client
2. Envoyez-le par email sécurisé
3. Le code donne accès uniquement à leurs photos

**Gérer les codes :**

**Fichier :** `src/pages/ProtectedGalleryPage.jsx`

**Bonnes pratiques :**
- Codes uniques et complexes
- Changez-les après chaque utilisation
- Fixez une date d'expiration (90 jours)

### RGPD (Protection des Données)

Si vous collectez des emails (newsletter, formulaire) :

1. **Informez les utilisateurs**
   - Ajoutez une mention sous le formulaire
   - "En soumettant ce formulaire, vous acceptez..."

2. **Politique de confidentialité**
   - Créez une page `/confidentialite`
   - Expliquez ce que vous faites des données

3. **Droit de suppression**
   - Permettez aux clients de demander la suppression
   - Conservez un email de contact dédié

---

## 🎓 Tutoriel Pas-à-Pas : Premier Projet

Suivez cette séquence pour votre premier projet client :

### Jour 1 : Préparation
1. **Séance photo avec le client**
2. **Sélectionnez vos meilleures photos** (50-100)
3. **Retouchez et optimisez** (TinyPNG)

### Jour 2 : Upload
1. **Nommez vos photos**
   - Exemple : `mariage-sophie-01.jpg` à `mariage-sophie-50.jpg`

2. **Copiez dans le bon dossier**
   - Si mariage : `public/galleries/mariages/`

3. **Créez un code d'accès**
   - Fichier : `ProtectedGalleryPage.jsx`
   - Ajoutez : `'SOPHIE2024': { title: 'Mariage Sophie', ... }`

### Jour 3 : Configuration
1. **Mettez à jour `galleries.js`**
   ```javascript
   {
     id: 'mariages',
     photoCount: 50,  ← Mettez le nombre réel
     coverImage: '/galleries/mariages/mariage-sophie-01.jpg'
   }
   ```

2. **Testez en local**
   ```bash
   npm run dev
   ```
   - Vérifiez que les photos s'affichent
   - Testez le code d'accès

### Jour 4 : Livraison
1. **Déployez les modifications**
   ```bash
   npm run build
   ```
   - Uploadez sur Netlify

2. **Envoyez au client**
   - Email avec le lien : `votre-site.com/galerie-privee`
   - Code d'accès : `SOPHIE2024`
   - Instructions simples

### Jour 5 : Suivi
1. **Demandez un témoignage**
   - Si le client est satisfait

2. **Ajoutez sur la page publique**
   - Sélectionnez 3-5 meilleures photos
   - Ajoutez-les à la galerie publique Mariages

3. **Nettoyez**
   - Après 90 jours, supprimez le code privé
   - Gardez seulement les photos publiques

---

## 💼 Conseils Business

### Utiliser Votre Site pour Vendre

**Page Tarifs :**
- Soyez transparent sur vos prix
- Créez 3 packages (bon, mieux, meilleur)
- Le package intermédiaire est souvent le plus vendu

**Call-to-Actions (CTA) :**
- "Réserver une Séance" sur chaque page
- "Demander un Devis" bien visible
- "Me Contacter" dans le footer

**Témoignages :**
- Demandez systématiquement après chaque projet
- Mettez en avant les résultats
- Ajoutez des photos avant/après si pertinent

### Stratégie de Contenu

**Blog (1 article par semaine) :**
- "Conseils pour réussir vos photos de mariage"
- "Comment choisir son photographe"
- "Mes coulisses de photographe"
- "Lieux magnifiques pour photos à [Votre ville]"

**Objectifs :**
- Améliorer votre SEO Google
- Montrer votre expertise
- Créer du contenu pour réseaux sociaux

### Mesurer Vos Résultats

**Installez Google Analytics :**
1. Créez un compte sur [analytics.google.com](https://analytics.google.com/)
2. Obtenez votre code de suivi
3. Ajoutez-le dans `index.html`

**Métriques importantes :**
- Nombre de visiteurs par mois
- Pages les plus visitées
- Taux de conversion (visiteur → contact)
- Temps passé sur le site

---

## 🚀 Félicitations !

Vous avez maintenant toutes les clés pour gérer votre portfolio photographe professionnel.

**Ce que vous savez faire :**
- ✅ Ajouter et organiser vos photos
- ✅ Personnaliser toutes vos informations
- ✅ Modifier les tarifs et packages
- ✅ Gérer les témoignages et le blog
- ✅ Créer des galeries privées pour clients
- ✅ Mettre votre site en ligne
- ✅ Résoudre les problèmes courants

**N'oubliez pas :**
- Sauvegardez régulièrement
- Testez avant de publier
- Demandez des retours
- Mettez à jour le contenu régulièrement

**Besoin d'aide ?**
Relisez ce guide, consultez les fichiers README dans les dossiers, ou contactez votre développeur.

---

**Bon courage et beaucoup de succès avec votre nouveau site ! 📸✨**

---

*Document créé le : [Date actuelle]*
*Version du portfolio : 2.0*
*Template : React Vite Photographer Portfolio*
