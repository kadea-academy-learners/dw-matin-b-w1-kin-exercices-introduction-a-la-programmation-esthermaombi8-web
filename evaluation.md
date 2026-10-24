# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-24 15:46 UTC · commit `ee9c59a` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **14 / 15**

Exercices : **83 / 95** · Parfaits : 14 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 3 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche complète ; privilégie une source MDN. |
| **F6** — Le compte à rebours | **3** | 🟠 Résultat incorrect | 1/2 | 3 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche complète ; privilégie une source MDN. |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 3 | ✅ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M4** — Le score par défaut : \|\| contre ?? | **3** | 🟠 Résultat incorrect | 4/5 | 3 | ✅ | Le cas 0 est faux : `0 \|\| 'aucun'` renvoie 'aucun' car 0 est falsy ; `??` ne remplace que null et undefined.<br>• Teste la version avec `\|\|` pour montrer le bug (0 → « aucun »).<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M5** — La vitre teintée (portée de bloc) | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Portée de bloc respectée, plus aucune ReferenceError et l'arrêt du programme est expliqué.<br>📚 Recherche complète ; privilégie une source MDN. |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche complète ; privilégie une source MDN. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 2 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 3 | ✅ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A4** — Le classement de la promo | **2** | 🟠 Résultat incorrect | 4/9 | 3 | ✅ | Un résultat est faux : arrondis la moyenne à une décimale en gardant un nombre (Math.round(x * 10) / 10), et vérifie les seuils 16 et 10 (>=).<br>• `calculerMoyenne([14, 16, 15])` renvoie ReferenceError: calculerMoyenne is not defined au lieu de 15.<br>• `calculerMoyenne([17, 18, 16])` renvoie ReferenceError: calculerMoyenne is not defined au lieu de 17.<br>• `calculerMoyenne([8, 11, 9])` renvoie ReferenceError: calculerMoyenne is not defined au lieu de 9.3.<br>• `calculerMoyenne([12, 10, 14])` renvoie ReferenceError: calculerMoyenne is not defined au lieu de 12.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A5** — Le nombre mystère | **1** | ❌ Erreur d'exécution | — | 3 | ✅ | Le jeu plante ou tourne à l'infini : la boucle doit s'arrêter quand le nombre est trouvé OU quand les 7 essais sont utilisés.<br>• ReferenceError: abc is not defined<br>📚 Recherche complète ; privilégie une source MDN. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Avancé (92 %) | **3** | const par défaut et let uniquement pour les valeurs réassignées, choix justifiés. typeof (y compris null) et conversions Number(''), Number('abc') maîtrisés. Truthy / falsy expliqués.<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Avancé (92 %) | **3** | Conditions ordonnées du cas le plus restrictif au plus général (FizzBuzz, DAB) et cas limites testés (0, négatif, plafond). ?? utilisé à bon escient.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Avancé (100 %) | **3** | Fonctions fléchées concises (retour implicite quand c'est pertinent), paramètres par défaut, une fonction pour une responsabilité. Bug de l'ASI et bannissement de var expliqués.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (90 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5 (A2 à A5 doivent être réussis pour le niveau Avancé)_ |
| Recherche, qualité du code et restitution | Avancé (96 %) | **3** | RECHERCHES.md complet, testé et sourcé (MDN). Commits réguliers et explicites (un par exercice).<br>_Recherches 95 % · commits par exercice 100 % · règles de code 95 %_ |
| **Total** | | **14 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
