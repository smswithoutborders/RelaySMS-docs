---
sidebar: false
unlisted: true
---

# Utiliser le stockage des jetons sur l'appareil

Notre fonctionnalité **« Stocker les jetons sur l'appareil »** vous donne plus de contrôle sur vos identifiants en conservant vos jetons d'accès sur votre téléphone plutôt que sur les serveurs RelaySMS. Ce tutoriel explique comment activer ou désactiver cette fonctionnalité, et comment actualiser les jetons Twitter lorsque vous utilisez le stockage local.

### Activer le stockage des jetons sur l'appareil {#enabling-on-device-token-storage}

Pour commencer à stocker vos jetons d'accès localement sur votre appareil :

- Ouvrez l'application **RelaySMS**.

- Appuyez sur **Paramètres**.

- Allez dans la section **Sécurité**.

- Trouvez l'option **« Stocker les jetons sur l'appareil »** et activez-la.

<img src="/OnDeviceToken/1.png" alt="Stockage des jetons sur l'appareil, étape 1" class="resized-image"/>
<img src="/OnDeviceToken/2.png" alt="Stockage des jetons sur l'appareil, étape 2" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="Stockage des jetons sur l'appareil, étape 3" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="Stockage des jetons sur l'appareil, étape 4" class="resized-image"/>
<img src="/OnDeviceToken/5.png" alt="Stockage des jetons sur l'appareil, étape 5" class="resized-image"/>

### Et ensuite ? {#what-happens-next}

- Tous les jetons d'accès auparavant stockés sur les serveurs RelaySMS sont transférés en toute sécurité sur votre appareil.

- Désormais, tous les nouveaux jetons sont stockés uniquement sur votre téléphone.

### Désactiver le stockage des jetons sur l'appareil {#disabling-on-device-token-storage}

Pour arrêter le stockage local et revenir au stockage des jetons dans le cloud :

1. Allez dans **Paramètres** > **Sécurité**.

2. Désactivez l'option **« Stocker les jetons sur l'appareil »**.

### Ce que cela signifie : {#what-this-means}

- Les jetons **déjà stockés sur votre appareil** y restent et continuent de fonctionner.

- En revanche, les **nouveaux jetons** générés ensuite sont enregistrés sur le **serveur cloud RelaySMS**, et non sur votre appareil.

<img src="/OnDeviceToken/5.png" alt="Désactivation du stockage sur l'appareil, étape 1" class="resized-image"/>
<img src="/OnDeviceToken/4.png" alt="Désactivation du stockage sur l'appareil, étape 2" class="resized-image"/>
<img src="/OnDeviceToken/3.png" alt="Désactivation du stockage sur l'appareil, étape 3" class="resized-image"/>

### Actualiser les jetons Twitter (stockage sur l'appareil uniquement) {#refreshing-twitter-tokens-for-on-device-use-only}

En raison des restrictions de sécurité de Twitter, les jetons stockés sur votre appareil ne peuvent être utilisés **qu'une fois par tweet**. Pour envoyer un autre tweet, vous devez **révoquer puis restaurer** le jeton.

Voici comment faire :

1. Après l'envoi d'un tweet, vous recevez un **SMS indiquant l'état de la remise**. Si vous utilisez un jeton stocké sur l'appareil, ce message contient un **jeton Twitter actualisé.**

2. **Copiez l'intégralité du SMS** (tel quel).

3. Ouvrez l'**application RelaySMS** et allez dans la section **Boîte de réception**.

4. **Collez** le SMS complet dans la boîte de réception.

5. L'application extrait et actualise automatiquement votre jeton Twitter.

6. Vous pouvez maintenant envoyer votre prochain tweet.

<img src="/OnDeviceToken/6.png" alt="Actualisation du jeton Twitter, étape 1" class="resized-image"/>
<img src="/OnDeviceToken/7.png" alt="Actualisation du jeton Twitter, étape 2" class="resized-image"/>
<img src="/OnDeviceToken/8.png" alt="Actualisation du jeton Twitter, étape 3" class="resized-image"/>
<img src="/OnDeviceToken/9.png" alt="Actualisation du jeton Twitter, étape 4" class="resized-image"/>
<img src="/OnDeviceToken/10.png" alt="Actualisation du jeton Twitter, étape 5" class="resized-image"/>

Répétez cette opération **après chaque message Twitter** si vous utilisez le stockage local des jetons.
