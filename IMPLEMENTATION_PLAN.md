Plan d'implémentation priorisé — Peace Bloodness Birthday

Objectif: implémenter progressivement les fonctionnalités demandées (AR, social, animations réactives, time capsule, personnalisation, PWA, mini-jeux, i18n, accessibilité, son immersif, partage).

Priorités (itérations courtes, testables):

1) Infrastructure (itération 0)
- But: préparer le terrain pour toutes les features.
- Actions:
  - Créer dossier `src/features` et `src/services` (si absent).
  - Ajouter les dépendances minimales (three, framer-motion, howler, react-webcam, react-share) en vérifiant les peer deps.
  - Configurer PWA minimal via `vite-plugin-pwa` (optionnel selon déploiement).
  - Configurer i18n (react-i18next) et fichier `public/locales` de base.
  - Ajouter README et guide de contribution.
- Durée estimée: 1-2 heures.

2) AR MVP (itération 1)
- But: AR simple montrant confettis & ballons via la caméra.
- Actions:
  - Intégrer `three` + `@react-three/fiber` pour rendu 3D.
  - Ajouter `react-webcam` pour accès caméra.
  - Rendu de confettis/ballons en overlay 3D aligné avec la caméra.
  - Détecteur de souffle: utiliser micro + amplitude (WebAudio) pour déclencher "souffle" (éteindre bougies virtuelles).
- Tests: visible sur mobile & desktop; usage webcam.
- Durée estimée: 6-10 heures.

3) Social timeline & messages vidéo (itération 2)
- But: permettre d'ajouter des messages texte/vidéo sur une timeline.
- Actions:
  - UI timeline (ajout + listage) avec stockage local (IndexedDB) pour prototype.
  - Upload vidéo via input file (limite taille), affichage et lecture dans timeline.
  - Option: partager via QR / lien.
- Durée estimée: 4-8 heures.

4) Animation réactive à la musique & mixeur sonore (itération 3)
- But: visualiseur musical + mixeur d'effets.
- Actions:
  - Visualiseur canvas utilisant WebAudio AnalyserNode.
  - Mixeur UI avec Howler pour effets (préchargement audio, volumes séparés).
  - Liaison visualiseur <-> musique du lecteur.
- Durée estimée: 4-6 heures.

5) Time Capsule & expériences temporelles (itération 4)
- But: comptes à rebours, souvenirs déverrouillables.
- Actions:
  - UI capsule temporelle, planification d'items et stockage chiffré localement.
  - Effets spéciaux déclenchés à minuit (animation + son).
- Durée estimée: 3-6 heures.

6) Personnalisation dynamique & météo (itération 5)
- But: thèmes selon heure/jour + météo.
- Actions:
  - Intégrer API météo (open-meteo ou weatherapi) via service.
  - Générer thèmes CSS variables dynamiques.
  - Playlist adaptative (heuristique simple).
- Durée estimée: 3-4 heures.

7) Mini-jeux, accessibilité & i18n (itération 6)
- But: améliorer l'engagement et l'accessibilité.
- Actions:
  - Mini-jeu chasse aux cadeaux (DOM interactions).
  - Puzzle photo (drag/drop) avec scores locaux.
  - Ajouter traductions (fr/en), a11y (aria, labels), raccourcis clavier.
- Durée estimée: 6-10 heures.

8) Performance, PWA & déploiement (itération 7)
- But: finaliser pour production.
- Actions:
  - Web Workers pour traitement intensif (particles/music analysis).
  - Finaliser PWA assets, manifest et service worker.
  - Tests de perf / bundle.
- Durée estimée: 4-8 heures.

Livrables par itération: PRs petites (<300 lignes), README & guide de test, tests unitaires pour logique critique.

Prochaine étape proposée (si vous dites "Continuer l'itération"):
- Je lance l'itération 0: créer la structure `src/features`, valider `package.json`, installer dépendances minimes (three, @react-three/fiber, react-webcam, howler, framer-motion) — je respecterai les peer deps et utiliserai `--legacy-peer-deps` si nécessaire.

---

Si vous préférez, je peux commencer directement par l'AR MVP (itération 1) au lieu de l'infra.
