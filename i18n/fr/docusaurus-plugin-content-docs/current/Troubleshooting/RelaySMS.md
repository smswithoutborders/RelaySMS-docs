---
sidebar_position: 3
---

# RelaySMS

## Questions fréquentes sur l'application RelaySMS

### 1. **Ai-je besoin d'une connexion Internet pour utiliser RelaySMS ?** {#1-do-i-need-an-internet-connection-to-use-relaysms}

- **Réponse :**
  - Vous n'avez **pas** besoin d'Internet pour envoyer des messages. RelaySMS envoie votre message par SMS à un numéro de routage, qui le publie en ligne sur la plateforme choisie.
  - Vous **avez** besoin d'Internet pour télécharger l'application et pour enregistrer des plateformes (Gmail, Bluesky, Telegram, RelaySMS Mail, Mastodon). Enregistrez vos plateformes avant une coupure d'Internet.

### 2. **Quel est le moyen le plus rapide d'envoyer un message ?** {#2-what-is-the-quickest-way-to-send-a-message}

- **Réponse :**
  - Utilisez **RelaySMS Mail hors ligne**. Il ne nécessite ni configuration ni plateforme enregistrée.
  - Appuyez sur **Écrire**, sélectionnez **« Envoyer depuis un alias aléatoire »**, saisissez l'adresse e-mail du destinataire et votre message, puis appuyez sur **Envoyer**.
  - Consultez [Envoyer un message](/docs/Android%20Tutorial/Step-5-Sending-a-Message).

### 3. **Vers quelles plateformes puis-je envoyer ?** {#3-which-platforms-can-i-send-to}

- **Réponse :**
  - RelaySMS prend actuellement en charge **Gmail**, **Bluesky**, **Telegram**, **RelaySMS Mail** et **Mastodon**.
  - Allez dans l'onglet **Plateformes** et appuyez sur une plateforme pour l'enregistrer. Une plateforme enregistrée s'allume. Appuyez dessus pour voir quel compte est connecté.
  - Consultez [Enregistrer des plateformes](/docs/Android%20Tutorial/Step-3-Save-Platforms).

### 4. **Quelle est la différence entre un compte RelaySMS Mail anonyme et un compte authentifié ?** {#4-what-is-the-difference-between-an-anonymous-and-an-authenticated-relaysms-mail-account}

- **Réponse :**
  - **Anonyme (RelaySMS Mail hors ligne) :** vous envoyez depuis un alias aléatoire sans vérifier votre numéro de téléphone. Pratique pour envoyer rapidement.
  - **Authentifié (RelaySMS Mail enregistré) :** vous vérifiez votre numéro de téléphone avec un code envoyé via Signal ou Telegram. Vous pouvez ensuite recevoir des réponses par SMS, même pendant une coupure d'Internet, et votre compte est plus sûr.

### 5. **Pourquoi est-ce que je ne reçois pas le code de vérification de RelaySMS Mail ?** {#5-why-am-i-not-receiving-the-verification-code-for-relaysms-mail}

- **Causes possibles :**
  - Le code est envoyé via **Signal** ou **Telegram**, pas par SMS. Vérifiez l'application que vous avez choisie.
  - Le numéro saisi n'est pas inscrit sur cette application, ou l'indicatif du pays est incorrect.
  - Vous n'étiez pas connecté à Internet au moment de demander le code.
- **Solution :**
  - Attendez une minute et appuyez à nouveau sur **Demander le code**, ou choisissez l'autre application.
  - Consultez le [Guide de dépannage](/docs/Troubleshooting/Troubleshooting-FAQ) pour plus d'aide.

### 6. **Qu'est-ce qu'un numéro de routage et lequel choisir ?** {#6-what-is-a-routing-number-and-which-one-should-i-choose}

- **Réponse :**
  - Un numéro de routage est un numéro de téléphone connecté à Internet. Il reçoit votre SMS et transmet votre message à la plateforme choisie.
  - Pour en choisir un, demandez-vous :
    - Ce pays subit-il une coupure d'Internet ?
    - Votre carte SIM peut-elle envoyer des SMS vers ce pays ?
    - Quel numéro est le plus proche de vous ?
    - Quel numéro vous coûte le moins cher en SMS ?
  - Vous pouvez aussi ajouter votre propre numéro de routage. Consultez [Numéros de routage](/docs/Android%20Tutorial/Step-6-Routing-Numbers).

### 7. **Pourquoi mes messages ne sont-ils pas remis ?** {#7-why-are-my-messages-not-being-delivered}

- **Causes possibles :**
  - Le numéro de routage choisi ne fonctionne pas ou se trouve dans un pays qui subit une coupure.
  - Votre carte SIM n'a plus de crédit ou ne peut pas envoyer de SMS vers le pays du numéro de routage.
  - RelaySMS n'est pas votre application de messagerie par défaut et le message n'a pas été envoyé depuis l'application SMS vers laquelle vous avez été redirigé.
  - L'accès à une plateforme enregistrée a expiré.
- **Solution :**
  - Essayez un autre numéro de routage. Si vous avez coché **« Ne plus demander »**, vous devrez peut-être en choisir un nouveau.
  - Vérifiez votre crédit et le signal de votre SIM.
  - Supprimez la plateforme et enregistrez-la à nouveau.

### 8. **Pourquoi mon SMS sortant ressemble-t-il à une suite de lettres et de chiffres au hasard ?** {#8-why-does-my-outgoing-sms-look-like-random-letters-and-numbers}

- **Réponse :**
  - C'est normal. RelaySMS chiffre automatiquement votre message avant de l'envoyer par SMS. Vous n'avez rien à faire pour activer le chiffrement.

### 9. **Dois-je faire de RelaySMS mon application de messagerie par défaut ?** {#9-should-i-make-relaysms-my-default-messaging-app}

- **Réponse :**
  - C'est facultatif, mais recommandé. En tant qu'application de messagerie par défaut, RelaySMS peut envoyer les messages directement et vous permet d'**envoyer des images**.
  - Si ce n'est pas votre application par défaut, on vous demandera de choisir une application SMS pour terminer chaque envoi.

### 10. **Comment envoyer une image ?** {#10-how-do-i-send-an-image}

- **Solution :**
  - Définissez RelaySMS comme application de messagerie par défaut.
  - Appuyez sur **Écrire**, choisissez votre plateforme, appuyez sur l'icône de pièce jointe et sélectionnez votre image.
  - Utilisez les outils de compression et de redimensionnement pour réduire le coût en SMS et accélérer l'envoi, puis appuyez sur **Terminé** et **Envoyer**.
  - Consultez [Envoyer une image](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

### 11. **Où sont stockées mes plateformes enregistrées ?** {#11-where-are-my-saved-platforms-stored}

- **Réponse :**
  - Vos plateformes enregistrées sont stockées **sur votre appareil**. Si vous supprimez l'application, effacez ses données ou changez de téléphone, vous risquez de les perdre.
  - [Faites des sauvegardes](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) régulièrement et conservez votre clé de vérification en lieu sûr.

### 12. **Comment sauvegarder et restaurer mes plateformes ?** {#12-how-do-i-back-up-and-restore-my-platforms}

- **Solution :**
  - **Sauvegarder :** appuyez sur le menu à 3 points de l'écran d'accueil, puis sur **Sauvegarder > Sauvegarder maintenant**. Enregistrez le fichier, puis appuyez sur **Afficher la clé de vérification** et conservez la clé en lieu sûr.
  - **Restaurer :** vous ne pouvez restaurer que sur l'**écran d'accueil, pendant la prise en main**. Appuyez sur **Restaurer une sauvegarde**, choisissez votre fichier de sauvegarde et saisissez votre clé de vérification.
  - Consultez [Sauvegarder et restaurer](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore).

### 13. **Comment accorder les autorisations SMS à RelaySMS ?** {#13-how-do-i-grant-sms-permissions-for-relaysms}

- **Solution :**
  - Ouvrez les **Paramètres** de votre téléphone.
  - Allez dans **Applications** et sélectionnez **RelaySMS**.
  - Appuyez sur **Autorisations** et réglez l'autorisation SMS sur **Autoriser**.

### 14. **Pourquoi est-ce que je ne reçois pas de notifications de RelaySMS ?** {#14-why-am-i-not-getting-notifications-from-relaysms}

- **Causes possibles :**
  - Les notifications de RelaySMS sont désactivées dans les paramètres de votre appareil.
  - L'application est limitée par l'optimisation de la batterie ou le mode « Ne pas déranger ».
  - Votre appareil n'a pas de signal pour recevoir des SMS.

### 15. **Pourquoi RelaySMS plante-t-il ou se fige-t-il ?** {#15-why-does-relaysms-keep-crashing-or-freezing}

- **Solution :**
  - Assurez-vous d'avoir la dernière version de l'application.
  - Redémarrez votre téléphone.
  - Videz le cache de l'application : **Paramètres > Applications > RelaySMS > Stockage > Vider le cache**.
  - RelaySMS nécessite **Android 7.0 ou version ultérieure**.

> *Effacer les **données** de l'application supprime vos plateformes enregistrées. Faites d'abord une sauvegarde.*

---

# RelaySMS sur iOS

### 1. **Comment installer RelaySMS sur iOS ?** {#1-how-do-i-install-relaysms-on-ios}

- **Étapes :**
  1. Ouvrez l'App Store sur votre iPhone.
  2. Recherchez **« RelaySMS »** ou utilisez [ce lien](https://apps.apple.com/us/app/relaysms/id6630382970).
  3. Appuyez sur **Obtenir** pour télécharger et installer l'application.

### 2. **Quelle est la configuration requise pour RelaySMS sur iOS ?** {#2-what-are-the-system-requirements-for-relaysms-on-ios}

- **Réponse :**
  - Un iPhone capable d'envoyer des SMS, sous **iOS 15.0 ou version ultérieure**.

### 3. **Quelles plateformes sont disponibles sur iOS ?** {#3-which-platforms-are-available-on-ios}

- **Réponse :**
  - Vous pouvez enregistrer **Bluesky**, **Gmail**, **Mastodon** et **Telegram**. Vous pouvez aussi envoyer des e-mails avec **R-Mail** sans rien enregistrer.

### 4. **Comment envoyer un message sur iOS ?** {#4-how-do-i-send-a-message-on-ios}

- **Réponse :**
  - Appuyez sur le bouton d'écriture. Dans le menu **Envoyer avec...**, choisissez une plateforme enregistrée, ou l'option **Aucun compte** en bas pour envoyer un e-mail depuis une adresse aléatoire (R-Mail). Vous ne pouvez pas recevoir de réponses sur R-Mail.
  - Appuyez sur l'icône d'envoi, vérifiez le numéro de routage et envoyez. iOS ouvre un écran de message contenant votre message chiffré. Appuyez sur la flèche d'envoi pour terminer.
  - Consultez [Envoyer un message sur iOS](/docs/iOS%20Tutorial/Step-5-Sending-a-Message).

### 5. **Comment sauvegarder et restaurer sur iOS ?** {#5-how-do-i-back-up-and-restore-on-ios}

- **Réponse :**
  - **Sauvegarder :** appuyez sur le menu **...**, puis sur **Sauvegardes**, et suivez les étapes. Choisissez un dossier pour la sauvegarde et conservez votre **clé de récupération** de 64 caractères en lieu sûr.
  - **Restaurer :** vous ne pouvez restaurer que sur l'écran d'accueil, pendant la prise en main. Appuyez sur **Restaurer une sauvegarde**, choisissez votre fichier de sauvegarde et saisissez votre clé de récupération.
  - Consultez [Sauvegarder et restaurer sur iOS](/docs/iOS%20Tutorial/Step-4-Back-Up-and-Restore).

---

## Besoin d'aide ? {#still-need-help}

- Rejoignez notre communauté sur [Telegram](https://t.me/+IPYp6q06dWsyZjY0).
- Signalez les problèmes sur [GitHub](https://github.com/smswithoutborders).
- Contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.
