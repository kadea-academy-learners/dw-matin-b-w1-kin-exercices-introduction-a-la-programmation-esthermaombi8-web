# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...un objet est un groupement des plusieurs informations liées dans un seul conteneur,null parcontre indique une absence de valeur.
typeof null renvoie "object" à cause d’une erreur historique dans les premières versions de JavaScript, null était identifié comme un objet, Ce comportement a été conservé pour éviter de casser les anciens programmes.


**Mon test dans la console :**

```js  $ node semaine-13/F1-carte-apprenant.js
const prenom = "Grace";  // nous utilisons const pour le prénom car il ne sera pas reassigner tout au long du programme.
const commune = "Lemba"; // la commune ne changera pas pendant l'exercice
const age = 22; // l'âge reste fixe pendant l'exécution du script.
const estInscrit = true; // le statut d'inscription ne sera pas modifié
let surnom; // le surnom n'est pas encore renseigné et pourra être attribué plus tard.
const ancienneFormation = null; //  on conserve null pour représenter l'absence d'ancienne formation.

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans, j'habite à ${commune}`);


console.log(`${typeof prenom}, ${typeof commune},${typeof age},${typeof estInscrit}, ${typeof surnom},${typeof ancienneFormation}`);

// colle ici le test que tu as exécuté et le résultat obtenu
``` Je m'appelle Grace, j'ai 22 ans, j'habite à Lemba
string, string,number,boolean, undefined,object

**Source :** oui (Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet en javaScript et c'est quoi un objet en js ?,J’ai vérifié sur MDN que typeof null renvoie "object", bien que null soit une valeur primitive+https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof )

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...JavaScript stocke tout ses nombres de type number en binaire (au format flottant 64bits) etcertains decimal comme 0,1 et 0,2 ne peuvent pas s'écrire de manière exacte en binaire,ils deviennent des fractions binaires infinies qui sont arrondies.
 toFixed() est une methode qui renvoie une chaîne de caractères.Avec +, on risque d'assembler et non additionner,elle arrondit de facon imprevisible qu'au cours d'une chaine de calcul elle peut fausser les resultat en accumulant des erreurs

**Mon test dans la console :**

```js
const calculerLivraison = (distanceKm, poidsKg, estUrgent = false) => {
    let montant;

    // Choisit le tarif de base selon la distance.
    if (distanceKm <= 5) {
        montant = 2000;
    } else if (distanceKm <= 15) {
        montant = 4000;
    } else {
        montant = 7000;
    }

    // Ajoute un supplément si le poids dépasse 10 kg.
    if (poidsKg > 10) {
        montant += 1500;
    }

    // Applique le tarif urgent à tout le montant.
    if (estUrgent === true) {
        montant *= 1.5;
    }

    // Ajoute la TVA de 16 % et renvoie le montant arrondi.
    return Math.round(montant * 1.16);
};

// Teste les trois exemples de l'énoncé.
console.log(calculerLivraison(3, 2));         // 2320
console.log(calculerLivraison(10, 12, true)); // 9570
console.log(calculerLivraison(20, 5));        // 8120


// colle ici le test que tu as exécuté et le résultat obtenu
```$ node semaine-13/A1-livraison.js
2320
9570
8120

**Source :** OUI, Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ,comment pouvons nous définir toFixed() et pourquoi il est un piège si on veut continuer à calculer ?
https://www.google.com/url?sa=i&source=web&rct=j&url=https://coddy.tech/docs/fr/javascript/numbers-and-bigint&ved=2ahUKEwiclaLu1M2XAxUWRZ8JHe1rNB8QmL8OegoIAggACAAIHxAE&opi=89978449&cd&psig=AOvVaw2bbrz2_nIK5kleDDRVxhRT&ust=1792759809698000
https://www.google.com/url?sa=i&source=web&rct=j&url=https://www.youtube.com/watch?v%3DCDYiwshriWw&ved=2ahUKEwiclaLu1M2XAxUWRZ8JHe1rNB8QmL8OegoIAggACAAIHxAP&opi=89978449&cd&psig=AOvVaw2bbrz2_nIK5kleDDRVxhRT&ust=1792759809698000
https://www.google.com/url?sa=i&source=web&rct=j&url=https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math&ved=2ahUKEwjW84TB3M2XAxW2V0EAHQYpJxUQxfoOegYIAAgMEAY&opi=89978449&cd&psig=AOvVaw0lq3VUdHLcssxrJbR3xGUU&ust=1792761862411000
**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
