# 📸 Guide des Galeries Photos

Ce dossier contient toutes les photos affichées sur votre portfolio photographe.

## 📁 Structure des Dossiers

```
galleries/
├── mariages/          # Photos de mariages
├── portraits/         # Photos de portraits
├── paysages/          # Photos de paysages
├── evenements/        # Photos d'événements
└── README.md          # Ce fichier
```

## ✨ Comment Ajouter des Photos

### 1. Placez vos photos dans les dossiers correspondants

- **Mariages** : `/galleries/mariages/`
- **Portraits** : `/galleries/portraits/`
- **Paysages** : `/galleries/paysages/`
- **Événements** : `/galleries/evenements/`

### 2. Nommage des Fichiers

Utilisez des noms descriptifs en minuscules sans espaces :
- ✅ `mariage-sophie-marc-2024.jpg`
- ✅ `portrait-studio-01.jpg`
- ✅ `paysage-montagne-sunset.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `Photo avec espaces.jpg`

### 3. Format et Optimisation

**Formats acceptés :**
- JPEG/JPG (recommandé pour les photos)
- PNG (pour les images avec transparence)
- WebP (pour une meilleure compression)

**Taille recommandée :**
- Largeur max : 2000px
- Qualité : 80-85% (bon compromis qualité/poids)
- Poids : < 500KB par photo

**Outils d'optimisation :**
- [TinyPNG](https://tinypng.com/) - Compression en ligne
- [Squoosh](https://squoosh.app/) - Outil Google
- Photoshop : "Enregistrer pour le web"

### 4. Configuration des Galeries

Après avoir ajouté vos photos, mettez à jour le fichier `/src/data/galleries.js` :

```javascript
export const galleries = [
  {
    id: 'mariages',
    title: 'Mariages',
    description: 'Capturez l\'émotion de votre jour spécial',
    coverImage: '/galleries/mariages/votre-photo-principale.jpg',
    photoCount: 45  // Nombre de photos dans ce dossier
  },
  // ... autres galeries
];
```

## 🎨 Bonnes Pratiques

1. **Organisation** : Gardez une structure cohérente
2. **Sélection** : Montrez vos meilleurs travaux (qualité > quantité)
3. **Diversité** : Variez les styles et compositions
4. **Mise à jour** : Rafraîchissez régulièrement votre portfolio

## 🔧 Dépannage

**Les photos ne s'affichent pas ?**
- Vérifiez que les photos sont bien dans les dossiers
- Vérifiez les chemins dans `galleries.js`
- Rafraîchissez le navigateur (Ctrl+F5)

**Les photos sont trop lourdes ?**
- Utilisez un outil de compression
- Redimensionnez à 2000px max
- Convertissez en WebP si possible

## 📞 Support

Pour toute question, consultez la documentation React Vite ou contactez le développeur.
