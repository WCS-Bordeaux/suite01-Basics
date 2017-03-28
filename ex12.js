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


// Step 1
// It takes a, b and the (binary) operator as input and it returns
// a <operator> b:
//
function evalExpr(a, b, operator) {

    switch (operator) {

        case "+":
            return a + b;
            break;

        case "-":
            return a - b;
            break;

        case "*":
            return a * b;
            break;

        case "/":
            if (b === 0)
                return 0;
            return a / b;
            break;

        case "%":
            if (b === 0)
                return 0;
/*
    Puisque (a % b) = (a - Math.floor(a/b) * b), donc cette \
    operation donnera NaN (not a number). Comme a/b = Infinity,\
    avec Math.floor(a/b) JS essayera de trouver le plus grand \
    nombre entier inférieur ou égal à l'infini..! \
    Commentaire: en general il est toujours risqué de faire des \
    des operations mathematiques avec 'Infinity' ."
*/
            return a % b;
            break;

    }

}
// Pour tester le code:
// console.log(evalExpr(0, 1, "%"));


// Step 2
// 
function getRandNum() {
    var outRandom = Math.round(Math.random() * 900) + 100;
    return outRandom;
}
// Pour tester le code:
// console.log(getRandNum());

function getRandSign() {
    var outRandom = Math.round(Math.random() * 4);
    return outRandom;
}
// Pour tester le code:
// console.log(getRandSign());


// Step 3
//
function generateCalcul(numCal) {

    var calculs = [];

    for (var i = 0; i < numCal; i++) {

        var num1 = getRandNum();
        var num2 = getRandNum();

        switch (getRandSign()) {

            case 0:
            var outNum = num1 + num2;
            var calcul = num1 + " + " + num2 + " = " + outNum;
            break;

            case 1:
            var outNum = num1 - num2;
            var calcul = num1 + " - " + num2 + " = " + outNum;
            break;

            case 2:
            var outNum = num1 * num2;
            var calcul = num1 + " * " + num2 + " = " + outNum;
            break;

            case 3:
            var outNum = num1 / num2;
            var calcul = num1 + " / " + num2 + " = " + outNum;
            break;

            case 4:
            var outNum = num1 % num2;
            var calcul = num1 + " % " + num2 + " = " + outNum;
            break;

        }

        calculs.push(calcul);

    }

    return calculs;

}

// Pour tester le code:
// console.log(generateCalcul(10));