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

function shoppingList(paniers) {
   var list = {};

   for (let i = 0; i < paniers.length; i++) {
      var item = paniers[i];
      for (let it = 0; it < item.length; it++) {
         if (list[item[it]] == undefined) {
            list[item[it]] = 1;
         } else list[item[it]]++;
      }
   }              

   return list;                                                                                                                                                                                 
}

console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]));