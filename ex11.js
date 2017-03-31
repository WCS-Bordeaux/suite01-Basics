/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau:

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat un objet contenant:
        Le nom du fruit en clef;
        Le nombre de fois qu'il à été rencontré dans l'ensemble des paniers en valeur;

    Important -> l'ordre n'a aucune importance

*/

// shoppingList([
//     ["orange", "orange", "kiwi", "ananas"],
//     ["kiwi", "ananas", "banane", "prune"],
//     ["orange", "orange", "orange", "orange"],
//     ["orange", "orange", "kiwi", "kiwi"],
//     ["prune", "banane", "pamplemousse", "ananas"]
// ]);

//  écrire votre code sous ce commentaire

function shoppingList(paniers) {
/*
    // correction
    let fruits = [];

    for (let i = 0, len = paniers.length; i < len; i++) {
        let currentList =  paniers[i];

        for (let j = 0, len2 = currentList.length; j < len2; j++ ) {
            let currentFruit = currentList[j];

            if (typeof fruits[currentFruit] !== "undefined") {
                fruits[currentFruit] += 1;
            } else {
                fruits[currentFruit] = 1;
            }
        }
    }
    return fruits;
*/

    var res = [];
    for (var l = 0; l < paniers.length; l ++) {
        for( var p = 0; p < paniers[l].length; p++) {
            res[paniers[l][p]] = (res[paniers[l][p]] || 0) + 1;
        }
    }
    return res;
}

var arr = [
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
];
shoppingList(arr);
console.log(shoppingList(arr));