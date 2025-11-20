# Configuration EmailJS pour le Formulaire de Contact

## 📧 Guide de Configuration

### Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" pour créer un compte gratuit
3. Confirmez votre email

### Étape 2 : Configurer un Service Email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte email
5. Notez votre **Service ID** (ex: `service_abc123`)

### Étape 3 : Créer un Template d'Email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template pour le contenu de l'email :

```
Sujet : Nouvelle demande de {{from_name}} - Freddy Photographie

Corps :
Nouvelle demande de contact depuis le site Freddy Photographie

---
INFORMATIONS CLIENT
---
Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

---
DÉTAILS DU PROJET
---
Type d'événement : {{event_type}}
Date de l'événement : {{event_date}}
Lieu : {{location}}
Budget estimé : {{budget}}
Forfait sélectionné : {{selected_package}}

---
MESSAGE
---
{{message}}

---
Envoyé depuis freddyphotographie.com
```

4. Sauvegardez et notez votre **Template ID** (ex: `template_xyz456`)

### Étape 4 : Récupérer votre Public Key

1. Allez dans **Account** > **General**
2. Notez votre **Public Key** (ex: `user_abc123xyz`)

### Étape 5 : Configurer le Code

1. Ouvrez le fichier `src/pages/ContactPage.jsx`
2. Ligne 37-39, remplacez :
   ```javascript
   const SERVICE_ID = 'YOUR_SERVICE_ID'; // Votre Service ID
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Votre Template ID
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Votre Public Key
   ```

### Étape 6 : Tester

1. Remplissez le formulaire de contact sur votre site
2. Cliquez sur "Envoyer le Message"
3. Vérifiez que vous recevez l'email sur l'adresse configurée

## 🎯 Plan Gratuit EmailJS

Le plan gratuit d'EmailJS permet :
- ✅ 200 emails/mois
- ✅ Parfait pour un site portfolio
- ✅ Aucune carte bancaire requise

## 🔒 Sécurité

**IMPORTANT** : Ne commitez jamais vos clés API dans un dépôt public. Pour une meilleure sécurité, utilisez des variables d'environnement :

1. Créez un fichier `.env` à la racine du projet :
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Modifiez `ContactPage.jsx` :
   ```javascript
   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. Ajoutez `.env` à votre `.gitignore`

## 📞 Besoin d'Aide ?

Si vous rencontrez des difficultés, consultez la [documentation officielle EmailJS](https://www.emailjs.com/docs/).
