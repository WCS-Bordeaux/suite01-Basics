function evalExpr(a, b, operator) {
   return 1;
}

function getRandNum() {
   return Math.ceil((Math.random() * 901) + 100 );
}

function getRandSign() {
   return Math.floor(Math.random() * 5);
}

function generateCalcul(number) {
   var nOperator = getRandSign();
   var randNumber = getRandNum();
   console.log(nOperator);
   switch (nOperator) {
      case 0:
      console.log(number + " + " + randNumber + " = " + (number + randNumber));
      break;
      case 1:
      console.log(number + " - " + randNumber + " = " + (number - randNumber));
      break;
      case 2:
      console.log(number + " * " + randNumber + " = " + (number * randNumber));
      break;
      case 3:
      console.log(number + " / " + randNumber + " = " + (number / randNumber));
      break;
      case 4:
      console.log(number + " % " + randNumber + " = " + (number % randNumber));
      break;
      default:
      console.log("Error when creating a random operator");
      return null;
   }
}

/*
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
