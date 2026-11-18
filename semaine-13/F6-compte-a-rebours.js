// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F6 — Le compte à rebours (Niveau 1 — Facile)

Objectif : maîtriser les 3 parties d'une boucle for qui descend.
Contexte : le lancement du projet de fin de module se fait avec un compte à rebours.

Consignes :
1. Affiche les nombres de 10 à 1, puis Décollage !.
2. Modifie la boucle pour n'afficher que les nombres pairs.
3. Dans la première version, saute le nombre 5 sans changer la condition de la boucle.

Résultat attendu (étape 3) :
10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage !

Recherche (à rédiger dans RECHERCHES.md) :
À quoi sert le mot-clé continue ? Quelle différence avec break ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


// Étape 2 : boucle pour n'afficher que les nombres pairs (10, 8, 6, 4, 2)
let pairs = "";
for (let i = 10; i >= 2; i -= 2) {
    pairs = `${pairs}${i}${i > 2 ? ", " : ""}`;
}
console.log(pairs);

// Étape 3 : compte à rebours complet en sautant le 5 avec continue
let resultat = "";

for (let i = 10; i >= 1; i--) {
    if (i === 5) {
        continue;
    }

    resultat = `${resultat}${i}, `;
}

console.log(`${resultat}Décollage !`);