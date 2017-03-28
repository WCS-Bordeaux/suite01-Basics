/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 15;
*/

// boostedAddition([4, 5, 6]);

/*      Test 1
    Appel à la fonction "boostedAddition",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 44;
*/

// boostedAddition([4, 4, 6, 8, 10, 12]);

//  écrire votre code sous ce commentaire

function boostedAddition(nbArr) {
    if( typeof nbArr === "object") {
        var res = 0;
        for(var l = 0; l  < nbArr.length; l++) {
            if(typeof nbArr[l] === "number") {
                res += nbArr[l];
            }
        }
        return res;
    }
    else {
        return "invalid values";
    }
}

var arr = [4, 5, 6];
boostedAddition(arr);

arr = [4, 4, 6, 8, 10, 12];
boostedAddition(arr);