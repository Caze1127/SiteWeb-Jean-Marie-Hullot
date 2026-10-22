# Jean-Marie Hullot — Site biographique interactif

Site web éducatif consacré à **Jean-Marie Hullot**, informaticien français ayant contribué au développement d'outils de conception d'interfaces graphiques et à des projets de l'écosystème Apple.

Ce projet présente son parcours et ses travaux à travers plusieurs pages et un **quiz interactif développé en JavaScript**.

## Fonctionnalités

- **Accueil** : présentation du sujet et accès aux différentes sections du site.
- **Biographie** : parcours de Jean-Marie Hullot et galerie multimédia.
- **Travaux** : présentation de ses contributions à l'informatique et au développement logiciel.
- **Quiz interactif** : 10 questions à choix multiple pour tester ses connaissances.
- **Suivi du quiz** : score actualisé pendant les réponses, chronomètre, barre de progression, affichage du score final et possibilité de recommencer.
- **Mise en page** : navigation commune aux pages, animations au survol et adaptations CSS pour les écrans plus étroits.

## Technologies utilisées

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure et contenu des pages, navigation, médias |
| CSS3 | Mise en forme, galerie, éléments interactifs, adaptation aux écrans |
| JavaScript (vanilla) | Affichage des questions, gestion des réponses, score, progression et chronomètre |

Aucune bibliothèque JavaScript ni framework n'est nécessaire.

## Lancer le site localement

1. Téléchargez ou clonez ce dépôt.
2. Conservez l'**arborescence d'origine** : les pages HTML utilisent des chemins relatifs vers les dossiers de styles, scripts, images et vidéos.
3. Ouvrez le fichier **`accueil.html`** dans votre navigateur, depuis son emplacement dans le projet.
4. Utilisez la barre de navigation pour parcourir les pages et accéder au quiz.

> **Remarque :** la lecture de la vidéo présentée dans la biographie nécessite que son fichier source soit bien présent dans le dossier `videos` prévu par le site.

## Fonctionnement du quiz

Le quiz contient 10 questions. Pour chacune, une seule réponse peut être sélectionnée.

Le script JavaScript :

1. génère les questions et leurs propositions ;
2. gère la sélection des réponses ;
3. calcule et actualise le score sur 10 ;
4. met à jour une barre de progression selon le nombre de questions auxquelles une réponse a été donnée ;
5. mesure le temps écoulé et affiche les résultats lors de la validation ;
6. permet de recommencer le quiz.

Les résultats ne sont pas sauvegardés entre les sessions.

## Structure et fichiers

Le site comprend :

- `accueil.html` : page d'accueil ;
- `biographie.html` : biographie et galerie multimédia ;
- `travaux.html` : travaux et contributions ;
- `quiz.html` : interface du quiz ;
- `Style.css` : feuilles de style ;
- `quizz.js` : logique JavaScript du quiz ;
- des ressources visuelles et, le cas échéant, une vidéo.

**Conservez les fichiers dans leurs dossiers actuels :** les liens relatifs sont déjà définis dans les pages HTML.

## Pistes d'amélioration

- Ajouter un fichier d'entrée `index.html` pour simplifier le déploiement du site sur GitHub Pages.
- Améliorer l'accessibilité du quiz (contrôles clavier et éléments de formulaire adaptés).
- Ajouter des retours visuels sur les bonnes et mauvaises réponses après validation.
- Ajouter les sources des informations biographiques et les crédits des médias.

## À propos

Projet de développement web côté client, réalisé à des fins pédagogiques.

**Important :** les photographies, vidéos et contenus tiers restent soumis aux droits de leurs auteurs respectifs ; leur présence dans le projet ne signifie pas qu'ils sont libres de réutilisation.
