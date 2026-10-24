// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Bug : le calcul était effectué, mais son résultat n'était pas renvoyé.
// Correction : ajouter return.
const doubler = (n) => {
  return n * 2;
};

console.log(doubler(4)); // 8

// Bug : console.log() affichait la TVA sans la renvoyer.
// La fonction renvoyait undefined ; undefined + 500 donnait NaN.
// Correction : renvoyer la TVA avec return.
const calculerTva = (prix) => {
  return prix * 0.16;
};

const total = calculerTva(1000) + 500;
console.log(total); // 660

// Bug : le saut de ligne après return provoquait l'ajout automatique
// d'un point-virgule. La fonction renvoyait donc undefined.
// Correction : placer la valeur sur la même ligne que return.
const saluer = (prenom) => {
  return `Mbote ${prenom}`;
};

console.log(saluer("Ney")); // Mbote Ney