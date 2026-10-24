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

const afficherScoreBug = (score) => `Score : ${score || "aucun"}`;
const afficherScore = (score) => `Score : ${score ?? "aucun"}`;

console.log(`avant correction : ${15 || "aucun"}, ${0 || "aucun"}, ${undefined || "aucun"} ; après correction : ${15 ?? "aucun"}, ${0 ?? "aucun"}, ${undefined ?? "aucun"}.`);
// 0 ici ne signifie pas que l'apprenant n'a aucune note, le 0 ici signifie que l'apprenant a fait son Quiz est a obtenue 0,le programme confond un score de zéro avec une absence de score
//or L’opérateur || ne vérifie pas si un score existe. Il vérifie si la valeur est truthy ou falsy.puisque 0 est une valeur falsy || renvoi "aucun"

const estConnecte = false; //// Le message s'affiche seulement si l'utilisateur est connecté, c'est à dire quand la valeur de la variable const estConnecte est true
estConnecte && console.log(`Bienvenue !`);