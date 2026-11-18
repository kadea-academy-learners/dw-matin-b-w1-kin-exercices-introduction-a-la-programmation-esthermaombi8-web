// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M4 — Le score par défaut : || contre ?? (Niveau 2 — Moyen)

Objectif : utiliser le court-circuit pour donner une valeur par défaut, et éviter son piège.
Contexte : l'application du quiz Canvas affiche « aucun » quand un apprenant n'a pas encore de score.

Consignes :
1. Écris une fonction fléchée afficherScore(score) qui renvoie le texte « Score : » suivi de score || 'aucun', avec un gabarit littéral.
2. Teste avec 15, 0 et undefined. Explique le bug du cas 0.
3. Corrige le bug avec l'opérateur ??.
4. Bonus : écris estConnecte && console.log('Bienvenue !') et explique quand le message s'affiche.

Astuce : la version corrigée doit s'appeler afficherScore (renomme l'ancienne, ex. afficherScoreBug).

Résultat attendu :
avant correction : 15, aucun, aucun ; après correction : 15, 0, aucun.

Recherche (à rédiger dans RECHERCHES.md) :
Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// 1. Version avec || montrant le bug (0 étant falsy, il est remplacé par "aucun")
const afficherScoreBug = (score) => `Score : ${score || "aucun"}`;

// 2. Test avec 15, 0 et undefined pour montrer le bug
console.log(afficherScoreBug(15));
console.log(afficherScoreBug(0));
console.log(afficherScoreBug(undefined));

// Explication du bug : 0 est une valeur falsy en JavaScript, donc l'opérateur || le remplace à tort par "aucun".
// L'opérateur ?? (coalescence des nuls) ne remplace que null et undefined, préservant ainsi le score légitime 0.

// 3. Version corrigée avec l'opérateur ??
const afficherScore = (score) => `Score : ${score ?? "aucun"}`;

console.log(afficherScore(15));
console.log(afficherScore(0));
console.log(afficherScore(undefined));

// 4. Bonus : court-circuit avec && (le message s'affiche seulement si estConnecte vaut true)
const estConnecte = true;
estConnecte && console.log(`Bienvenue !`);