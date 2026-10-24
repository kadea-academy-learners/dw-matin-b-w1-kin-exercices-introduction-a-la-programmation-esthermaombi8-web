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

...FizzBuzz est célèbre dans les entretiens d'embauche parce qu'il sert de filtre d'élimination instantané,il permet de vérifier les bases de la programmation et de connaitre comment un candidat peut réflechir,sa capacité de structurér les conditions et sa capacité d'expliquer chaque ligne du code.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
``` console.log(resultat); .
node semaine-13/M1-fizzbuzz.js
1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa, 16, 17, Malewa, 19, Wewa, Malewa, 22, 23, Malewa, Wewa, 26, Malewa, 28, 29, MalewaWewa

**Source :**NON.    https://www.quora.com/Why-do-employers-use-the-FizzBuzz-test-to-qualify-developers-when-the-developer-is-perfectly-capable-without-FizzBuzz 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

... pour afficher 75000 sous la forme 75 000 avec totalString() il suffit de changer paramètres régionaux en fr-FR on aura donc variable.toLocaleString('fr-FR'),le navigateur utilise par defaut la langue de l'utilisateur,en forçant la locale 'fr-FR',applique les règles de typographie française


**Mon test dans la console :**

```js 
console.log(retirer(100000, 25000));
console.log(retirer(100000, 12000));
console.log(retirer(1000000, 600000));
console.log(retirer(20000, 50000));

 node semaine-13/M2-dab.js
Retrait accepté. Nouveau solde : 75000 FC
Montant invalide : multiples de 5 000 FC uniquement
Plafond dépassé : 500 000 FC maximum
Solde insuffisant

// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** OUI.comment afficher 75000 sous la forme 75 000 avec un espace comme separateur avec tolocalestring() ?
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString#:~:text=La%20m%C3%A9thode%20toLocaleString()%20des%20instances,prendre%20en%20compte%20les%20locales.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Les valeurs falsy sont celles que JavaScript considère comme fausses dans une condition :
- false:le booleen faux lui meme
- 0 et -0
- 0n : zéro de type BigInt
- "" : une chaîne vide, également écrite '' ou avec deux accents graves
- null: l'absence intentionnelle des valeurs
- undefined:une variable declaré qui n'a pas encore des valeurs
- NaN: not a number
- document.all : un cas historique particulier dans les navigateurs
Attention : "0" et " " sont truthy, car ce sont des chaînes qui ne sont pas vides.

**Mon test dans la console :**

```js console.log(`${estRempli("")}, ${estRempli("Esther")}, ${estRempli(0)}, ${estRempli(42)}, ${estRempli(null)}, ${estRempli(undefined)}, ${estRempli(NaN)}, ${estRempli(" ")}, ${estRempli("0")}, ${estRempli(false)}`);
$ node semaine-13/M3-champs-vides.js
vide
rempli
vide
rempli
vide
vide
vide
rempli
rempli
vide

// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** NON, https://developer.mozilla.org/fr/docs/Glossary/Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...L’opérateur ?? fournit une valeur par défaut uniquement si la valeur de gauche est null ou undefined.
L’opérateur || fournit une valeur par défaut si la valeur de gauche est falsy, ce qui inclut aussi 0, false et "".

**Mon test dans la console :**

```js console.log(`avant correction : ${15 || "aucun"}, ${0 || "aucun"}, ${undefined || "aucun"} ; après correction : ${15 ?? "aucun"}, ${0 ?? "aucun"}, ${undefined ?? "aucun"}.`);

avant correction : 15, aucun, aucun ; après correction : 15, 0, aucun.
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** NON,https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
/ 0 ici ne signifie pas que l'apprenant n'a aucune note, le 0 ici signifie que l'apprenant a fait son Quiz est a 
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

// colle ici le test que tu as exécuté et le résultat obtenu
```$Teste des trois exemples evoqué dans l'énoncé.
console.log(calculerLivraison(3, 2));         // 2320
console.log(calculerLivraison(10, 12, true)); // 9570
console.log(calculerLivraison(20, 5));        // 8120
//  node semaine-13/A1-livraison.js
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

...La methode reduce()parcourt les éléments d’un tableau pour les combiner et obtenir un seul résultat final.
Elle garde en mémoire un résultat provisoire appelé accumulateur
const totalHeures = heuresSemaine.reduce(
  (total, heuresJour) => total + heuresJour,
  0
);

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```Affichage de tous les résultats dans un gabarit littéral.
console.log(`Total : ${totalHeures} h — Salaire : ${salaire} FC ; jour le plus chargé : ${joursSemaine[indiceJourMax]} (${heuresSemaine[indiceJourMax]} h).`);
$ node semaine-13/A2-paie.Js
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

**Source :**NON. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Pour afficher seulement les colonnes nom et stock,il faut passer leurs noms dans le deuxième argument de console.log en string,on aura donc console.table(produits, ["nom", "stock"]);.
Quand aucun produit ne correspond à la recherche find() renvoie undefined pour signifier qu'aucun élément n’a été trouvé ,filter() renvoie [] un tableau vide

**Mon test dans la console :**

```js

// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(chercherProduit(104));
console.log(chercherProduit(999));
console.log(`${produitsEnRupture.length} produits en rupture.`);
{
  id: 104,
  nom: 'Gourde isotherme',
  categorie: 'Accessoires',
  prixFC: 21000,
  stock: 8
}
Produit introuvable
2 produits en rupture.

**Source :**OUI,Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/fr/docs/Web/API/console/table_static

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Pour classer un bulletin de la meilleure à la moins bonne moyenne en JavaScript, il faut utiliser la méthode .sort() avec une fonction de comparaison descendante.sort() modifie le tableau d’origine parce qu’elle effectue le tri directement dans ce tableau,elle ne crée aucune copie ,elle renvoie ensuite ce même tableau trié ,parfois sort().Pour l'eviter il est recommandé de changer l’ordre des éléments du tableau.créer une copie du tableau avant le tri. Ainsi, bulletinTrie contient le classement et bulletin conserve son ordre du depart.

**Mon test dans la console :**

```console.table(bulletin);
console.log(`${admis.length} admis`);
(premierExcellent !== undefined) {
    console.log(`Premier Excellent : ${premierExcellent.nom}`);
 {console.log(`Aucun élèves avec la mention Excellent`);
js 4 admis
Premier Excellent : Bijou

// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**NON, https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**La recherche dichotomique consiste à proposer le nombre situé au milieu des valeurs encore possibles.Tu proposes ensuite le milieu du nouvel intervalle, et tu recommences. Chaque mauvaise réponse élimine environ la moitié des possibilités.
Le nombre de possibilités diminue ainsi : 100 → 50 → 25 → 12 → 6 → 3 → 1. Sept essais suffisent si tu choisis toujours le milieu de l’intervalle après six mauvaises propositions au maximum, il reste un seul nombre et la septième permet de le trouver.

...

**Mon test dans la console :**
console.log(`Les 7 essais sont épuisés. Le nombre était ${nombreMystere}.`);
```jouer();

js3VM286:39 Plus grand !
2VM286:41 Plus petit !
2VM286:39 Plus grand !
VM286:46 Les 7 essais sont épuisés. Le nombre était 46.
undefined
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** OUI, c'est quoi une recherches dichotomique et en quoi consiste-t-elle?et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
https://fr.wikipedia.org/wiki/Recherche_dichotomique

**IA utilisée ? (prompt + vérification sur MDN) :** non
