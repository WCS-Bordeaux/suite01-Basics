/*

       Eval Expr

    // // // step 1

    // Write a function "evalExpr" that can solve simples arithmetic calculs;

    // We will pass only positive integer numbers.

    // Exemples:

    // evalExpr(4, 5, "*"); // 20
    // evalExpr(3, 3, "+"); // 6
    // evalExpr(2, 2, "%"); // 0
    // evalExpr(3, 3, "-"); // 0
    // evalExpr(10, 2, "/"); // 5

    // evalExpr(10, 0, "/"); // 0

    // Validation:
    // I want to see at least 5 functions.

    // Forbidden functions:
    // eval

    // // // step 2

    // Code a function "getRandNum" that return a random number between 100(included) and 1000(included).

    // Validation:
    // really random please.

    // Code a function "getRandSign" that return a random number between 0(included) and 4(included).

    // // // step 3

    // Write a function "generateCalcul" that can generate random calcul and display the result in the console;
    // We will pass a number, which is the desired number calculs.

    Tips:
    Reuse getRandSign & getRandNum ;)
    
    // // // step 4 - BONUS

    // On a new branch "bonus"

    // Migrate your script to a HTML page in a new file named "bonus.js".
    // You will reuse generateCalculs

    // Try to do a HTML/CSS interface that can:
        - control the number calcul (input);
        - display all strings like "6 + 3 = 9" in the DOM
            - you need to write this string in the DOM
            - Delay the application with "setTimeout", with 150ms between each calculs

    // // // step 5 - SUPER BONUS

    // Stay on your branch "bonus"

    // Add animations when calculs are displayed
    // Add more things as you can done !!
    // Be creative !

    // When it's done, merge it to the "master" and send me a pull request !

    // // // step 6 - ++SUPER BONUS++

    // Done it responsive :)

    Please use Objects it is very nice :)

*/

// write your code below this comment

function add (nb1,nb2) {
    return nb1+nb2;
}

function sub (nb1,nb2) {
    return nb1-nb2;
}

function prod (nb1,nb2) {
    return nb1*nb2;
}

function div (nb1,nb2) {
    return nb1/nb2;
}

function mod (nb1,nb2) {
    return nb1%nb2;
}


function evalExpr (nb1, nb2, op){
    if (op === "+" || op === 1) {
       return add(nb1,nb2);
    } else if (op === "-" || op === 2) {
        return sub(nb1,nb2);
    } else if (op === "*"|| op === 3) {
        return prod(nb1,nb2);
    } else if (op === "/"|| op === 4) {
        return div(nb1,nb2);
    } else if (op === "%" || op === 0) {
        return mod(nb1,nb2);
    }
}

function getRandNum (min=100,max=1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandSign () {
    return getRandNum(0,4);
}

function generateCalculs () {
    num1 = getRandNum();
    num2 = getRandNum();
    sign = getRandSign();
    return evalExpr (num1, num2, sign);
}


