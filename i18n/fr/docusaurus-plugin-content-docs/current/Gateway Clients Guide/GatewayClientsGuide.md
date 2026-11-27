---
sidebar_position: 1
unlisted: true
---

# Numéros de routage

Les numéros de routage sont au cœur du fonctionnement de RelaySMS. Ce sont des numéros de téléphone ou des appareils situés dans des zones disposant d'une connexion Internet active, qui acheminent les messages des utilisateurs hors ligne vers les plateformes en ligne.

Lorsqu'un utilisateur envoie un message avec RelaySMS sans accès à Internet, le message est transmis par SMS à un numéro de routage. Ce numéro le transfère à un serveur en ligne, où il est traité puis publié sur la plateforme choisie.

Dans l'application, les numéros de routage sont listés dans l'onglet Pays. Les utilisateurs doivent choisir un numéro dans une région connectée à Internet pour que leurs messages soient envoyés.

Les numéros de routage peuvent être configurés avec l'application DekuSMS. Élargir leur disponibilité dans différentes régions améliore la fiabilité, réduit les coûts et aide davantage d'utilisateurs à rester connectés pendant les coupures d'Internet.

## Héberger et faire fonctionner un numéro de routage {#hosting-and-running-a-routing-number}

Suivez ce guide pour installer et configurer un numéro de routage Deku SMS sur votre appareil Android.

### Prérequis pour configurer un numéro de routage : {#requirements-for-setting-up-a-routing-number}

#### Appareil Android : {#android-device}

- Votre appareil doit pouvoir se connecter à Internet.  
- Il doit avoir une carte SIM capable de recevoir des SMS.

#### Connexion Internet : {#internet-connection}

- Il vous faut une connexion Internet fiable (Wi-Fi ou données mobiles).  
- Deku SMS consomme très peu de données : les données mobiles suffisent.

## Étapes de configuration de Deku SMS sur un appareil Android : {#steps-to-configure-deku-sms-on-an-android-device}

### Étape 1 : télécharger l'application Deku SMS {#step-1-download-the-deku-sms-app}

Vous pouvez télécharger l'application Deku SMS depuis l'une des sources suivantes :

- Google Play Store  
- F-Droid  
- Versions GitHub  

### Étape 2 : définir Deku SMS comme application SMS par défaut {#step-2-set-deku-sms-as-your-default-sms-app}

<img src="/mockup/Deku/1.png" alt="Définir Deku SMS par défaut" class="resized-image"/>

Une fois l'application installée, définissez-la comme application SMS par défaut sur votre appareil Android.

### Étape 3 : configurer le transfert des messages {#step-3-configure-message-forwarding}

<img src="/mockup/Deku/2.png" alt="Menu de Deku SMS" class="resized-image"/>
<img src="/mockup/Deku/3.png" alt="Transfert des messages" class="resized-image"/>


1. Ouvrez l'application Deku SMS.  
2. Appuyez sur les trois points en haut à droite de l'application.  
3. Dans le menu déroulant, sélectionnez **Transfert des messages.**

### Étape 4 : ajouter un serveur passerelle {#step-4-add-a-gateway-server}

<img src="/mockup/Deku/4.png" alt="Page des messages routés" class="resized-image"/>
<img src="/mockup/Deku/5.png" alt="Menu de la page des messages routés" class="resized-image"/>
<img src="/mockup/Deku/6.png" alt="Ajouter des redirecteurs HTTPS" class="resized-image"/>


1. Appuyez sur les points de menu en haut à droite de la page des messages routés.  
2. Appuyez sur les trois points en haut à droite de la page des messages routés.  
3. Appuyez à nouveau sur les trois points et choisissez **Ajouter des redirecteurs HTTPS.**

### Étape 5 : renseigner les informations requises {#step-5-fill-in-the-required-information}

<img src="/mockup/Deku/7.png" alt="Formulaire du serveur passerelle" class="resized-image"/>
<img src="/mockup/Deku/8.png" alt="Formulaire du serveur passerelle rempli" class="resized-image"/>

- Saisissez l'URL suivante :  
https://gatewayserver.smswithoutborders.com/v3/publish  

- **Étiquette** : saisissez un nom pour votre serveur passerelle.  

- **Cochez « Tous »** : assurez-vous que la case « Tous » est cochée pour acheminer tous les SMS via le serveur.

### Étape 6 : finaliser la configuration {#step-6-finalize-the-setup}

<img src="/mockup/Deku/9.png" alt="Enregistrer la configuration" class="resized-image"/>

1. Appuyez sur **Enregistrer** pour enregistrer la configuration de votre serveur passerelle.

<img src="/mockup/Deku/10.png" alt="Serveur passerelle enregistré" class="resized-image"/>

## Votre numéro de routage est prêt {#your-routing-number-is-now-ready}

Vous pouvez maintenant partager votre numéro avec les utilisateurs de RelaySMS. Votre appareil Android servira de numéro de routage et acheminera les messages grâce à l'application Deku SMS.
