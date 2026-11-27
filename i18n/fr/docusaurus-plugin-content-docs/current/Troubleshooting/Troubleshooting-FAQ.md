---
sidebar_position: 1
sidebar_label: Guide de dépannage
---

# Guide de dépannage RelaySMS

### Problèmes courants et solutions

---

### Téléchargement et installation de l'application {#app-download-and-installation}

**Problème** : impossible de télécharger l'application  
**Solutions** :

- Vérifiez que votre appareil Android fonctionne sous Android 7 ou version ultérieure, et votre appareil iOS sous iOS 15 ou version ultérieure.
- Vérifiez votre connexion Internet et réessayez le téléchargement.
- Si le Play Store ne fonctionne pas pour vous, téléchargez l'application depuis [GitHub](https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases). Consultez [Télécharger l'application](/docs/Android%20Tutorial/Step-1-Download-the-App).
- Si le problème persiste, contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.

---

### Plantages de l'application {#app-crashes}

**Problème** : l'application plante souvent ou de manière inattendue  
**Solutions** :

- Vérifiez que le système de votre appareil répond aux exigences minimales (Android 7 ou version ultérieure, iOS 15 ou version ultérieure).
- Assurez-vous d'avoir installé la dernière version de l'application.
- Redémarrez votre appareil et rouvrez l'application.
- Videz le cache de l'application : **Paramètres > Applications > RelaySMS > Stockage > Vider le cache**.

> *Important : vos plateformes enregistrées sont stockées sur votre appareil. Effacer les **données** de l'application ou la supprimer les efface. [Faites une sauvegarde](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) avant d'effacer les données ou de réinstaller.*

---

### Code de vérification non reçu lors de l'enregistrement de RelaySMS Mail {#verification-code-not-received-when-saving-relaysms-mail}

Vous n'avez besoin d'un code de vérification que pour enregistrer et authentifier un compte **RelaySMS Mail**. L'envoi avec **RelaySMS Mail hors ligne** (depuis un alias aléatoire) ne nécessite ni code ni configuration.

**Problème** : le code de vérification de RelaySMS Mail n'arrive pas  
**Solutions** :

- Le code est envoyé via **Signal** ou **Telegram**, pas par SMS. Vérifiez l'application que vous avez choisie en appuyant sur **Demander le code**.
- Vérifiez que le numéro saisi est bien inscrit sur l'application choisie et que l'indicatif du pays est correct.
- Vérifiez que vous êtes connecté à Internet au moment de demander le code.
- Attendez une minute, puis appuyez à nouveau sur **Demander le code**. Vous pouvez aussi essayer l'autre application (Signal ou Telegram).
- Si vous devez envoyer un message tout de suite, utilisez [RelaySMS Mail hors ligne](/docs/Android%20Tutorial/Step-5-Sending-a-Message) le temps de régler le problème.
- Si le problème persiste, contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.

Consultez [Enregistrer des plateformes : RelaySMS Mail](/docs/Android%20Tutorial/Step-3-Save-Platforms#relaysms-mail) pour toutes les étapes.

---

### Problèmes d'enregistrement des plateformes {#platform-saving-issues}

**Problème** : impossible d'enregistrer une plateforme (Gmail, Bluesky, Telegram, RelaySMS Mail ou Mastodon)  
**Solutions** :

- Vérifiez que vous êtes connecté à Internet. L'enregistrement d'une plateforme nécessite Internet ; l'envoi, non.
- **Gmail** : accordez toutes les autorisations demandées par RelaySMS avant d'appuyer sur **Continuer**.
- **Bluesky / Mastodon** : terminez la connexion et appuyez sur **Autoriser**.
- **Telegram** : le code est envoyé dans votre application Telegram, pas par SMS. Saisissez le numéro de téléphone associé à votre compte Telegram.
- Si une plateforme ne s'allume pas après l'enregistrement, appuyez dessus pour la supprimer, puis enregistrez-la à nouveau.
- Si le problème persiste, contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.

Consultez [Enregistrer des plateformes](/docs/Android%20Tutorial/Step-3-Save-Platforms) pour toutes les étapes.

---

### Problèmes de sauvegarde et de restauration {#back-up-and-restore-issues}

Vos plateformes enregistrées sont stockées sur votre appareil : une sauvegarde est donc le seul moyen de les conserver si vous supprimez l'application ou changez de téléphone.

**Problème** : je ne trouve pas l'option Restaurer  
**Solutions** :

- Vous ne pouvez restaurer une sauvegarde que sur l'**écran d'accueil, pendant la prise en main**. Cette option n'est pas disponible dans le menu après la prise en main.
- Si vous avez déjà terminé la prise en main, effacez les données de l'application (**Paramètres > Applications > RelaySMS > Stockage > Effacer les données**) ou réinstallez l'application pour revenir à l'écran d'accueil, puis appuyez sur **Restaurer une sauvegarde**. Cela supprime les plateformes actuellement enregistrées sur l'appareil : sauvegardez-les d'abord si vous en avez besoin.

**Problème** : la restauration échoue ou ma clé de vérification est refusée  
**Solutions** :

- Vérifiez que vous saisissez la clé de vérification (appelée **clé de récupération** sur iOS) affichée pour **ce** fichier de sauvegarde. Chaque sauvegarde a sa propre clé.
- Copiez-collez la clé au lieu de la taper, et vérifiez qu'il n'y a pas d'espace en trop au début ou à la fin.
- Vérifiez que vous avez sélectionné le bon fichier de sauvegarde. Si vous en avez plusieurs, utilisez le plus récent.
- Si vous avez perdu la clé de vérification, la sauvegarde ne peut pas être restaurée. Enregistrez à nouveau vos plateformes et faites une nouvelle sauvegarde.

**Problème** : je ne trouve pas mon fichier de sauvegarde  
**Solutions** :

- Regardez dans le dossier choisi lorsque vous avez appuyé sur **Enregistrer** pendant la sauvegarde (souvent **Téléchargements**).
- Si vous changez de téléphone, copiez le fichier de sauvegarde sur le nouveau téléphone avant de commencer la prise en main.

**Problème** : je ne suis pas sûr que ma sauvegarde a fonctionné  
**Solution** :

- Appuyez sur le menu à 3 points de l'écran d'accueil, puis sur **Sauvegarder**. Vous devriez voir la date de votre dernière sauvegarde.

**Problème** : j'ai perdu mes plateformes après une réinstallation ou un changement de téléphone  
**Solution** :

- Si vous avez une sauvegarde et sa clé de vérification, restaurez-la pendant la prise en main.
- Si vous n'avez pas de sauvegarde, enregistrez à nouveau vos plateformes et [faites une sauvegarde](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore#back-up) tout de suite.

Consultez [Sauvegarder et restaurer](/docs/Android%20Tutorial/Step-4-Back-Up-and-Restore) pour toutes les étapes.

---

### Problèmes d'envoi de messages {#message-sending-issues}

**Problème** : les messages ne sont pas remis  
**Solutions** :

- Essayez un autre [numéro de routage](/docs/Android%20Tutorial/Step-6-Routing-Numbers). Choisissez-en un dans un pays qui ne subit pas de coupure d'Internet, vers lequel votre SIM peut envoyer des SMS, et qui reste abordable pour vous.
- Si vous avez coché **« Ne plus demander »**, RelaySMS réutilise automatiquement le même numéro de routage. Si les messages n'arrivent plus, choisissez un autre numéro.
- Vérifiez que votre carte SIM est active, qu'elle a du crédit et qu'elle peut envoyer des SMS.
- Si RelaySMS n'est pas votre application de messagerie par défaut, terminez bien l'envoi dans l'application SMS vers laquelle vous êtes redirigé.
- Si vous n'avez pas utilisé une plateforme enregistrée depuis longtemps, supprimez-la et enregistrez-la à nouveau.
- Si le problème persiste, contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.

**Problème** : je n'arrive pas à envoyer une image  
**Solution** :

- Vous ne pouvez envoyer des images que si RelaySMS est votre application de messagerie par défaut. Utilisez les outils de compression et de redimensionnement pour réduire le nombre de SMS nécessaires. Consultez [Envoyer une image](/docs/Android%20Tutorial/Step-5-Sending-a-Message#sending-an-image).

**Problème** : mon SMS sortant ressemble à une suite de lettres et de chiffres au hasard  
**Réponse** :

- C'est normal. Votre message est chiffré avant d'être envoyé par SMS.

---

### Conseils supplémentaires {#additional-tips}

- **Mettez à jour l'application** : assurez-vous d'avoir installé la dernière version de RelaySMS.
- **Sauvegardez régulièrement** : faites une sauvegarde chaque fois que vous enregistrez une nouvelle plateforme, et conservez votre clé de vérification en lieu sûr.
- **Actualisez vos plateformes** : il est recommandé de supprimer puis d'enregistrer à nouveau vos plateformes tous les 3 à 6 mois, puis de faire une nouvelle sauvegarde.
- **Vérifiez le réseau** : assurez-vous que votre appareil est actif et peut envoyer des SMS.
- **Obtenez de l'aide** : rejoignez notre communauté sur [Telegram](https://t.me/+IPYp6q06dWsyZjY0) ou contactez notre <a href="mailto:developers@smswithoutborders.com">équipe d'assistance</a>.
