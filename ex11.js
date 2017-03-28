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
    var counts = {};
    for (i = 0; i < paniers.length; i++) {
        for (j = 0; j < paniers[i].length; j++) {
            val = paniers[i][j];
            if (typeof counts[val] === "undefined") {
                counts[val] = 1;
            } else {
                counts[val]++;
            }
        }
    }
    console.log(counts);
}

shoppingList([
     ["orange", "orange", "kiwi", "ananas"],
     ["kiwi", "ananas", "banane", "prune"],
     ["orange", "orange", "orange", "orange"],
     ["orange", "orange", "kiwi", "kiwi"],
     ["prune", "banane", "pamplemousse", "ananas"]
 ]);