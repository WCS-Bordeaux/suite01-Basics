/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 0;
*/

// isAllEven([4, 5, 6]);

/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 1;
*/

// isAllEven([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

var tableau = [];
var modulo = 0;
var sum = 0

function isAllEven (tableau) {
    for (i = 0; i<tableau.length; i++) {
        modulo = isEven(tableau[i]);
        sum += modulo;
    }
    if (sum === 0){
        console.log ("Tous les nombres son pairs");
        return 1;
    } else {
        console.log ("Au moin un nombre est impair");
        return 0;
    }
    
}

function isEven (nb) {
    var result = nb % 2;
    if (result === 0) {
        console.log("Le nombre " + nb + " est pair");
    } else if (result === 1) {
        console.log("Le nombre " + nb + " est impair");
    } else {
    console.log("Indiquez un nombre");
}
}


