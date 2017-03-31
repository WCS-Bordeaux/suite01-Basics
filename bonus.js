/*
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


function generateCalcul() {

    var numCal = document.getElementById('calcField').value;

    var calculs = [];

    for (var i = 0; i < numCal; i++) {

        var num1 = getRandNum();
        var num2 = getRandNum();
        var calcul = '';

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

// Fill the empty array named html

//   var html = [];
//   var html = calculs;
/*
    calculs.forEach(function(pippo) {

        var displayCalc = document.getElementById("displayCalc");
            
        displayCalc.innerHTML += pippo + "<br />";

//        html.push("<br /> " + pippo);

    });
*/
/*
// Use the native function setTimeout(function, delaytime)
// to delay the display of html

    setTimeout(function() {

        var displayCalc = document.getElementById("displayCalc");

        displayCalc.innerHTML = calculs.join("<br />");

    }, 1500);
*/

// We try first to use the loop that wraps setTimeout()
    calculs.forEach(function(pippo) {

//        setTimeout(function() {

            setTimeout(function() {

                var displayCalc = document.getElementById("displayCalc");
                
                displayCalc.innerHTML += pippo + "<br />";

            }, 500);

//        }, 500);

    });

/*
// Here, instead, we have the setTimeout() function that wraps the loop
    setTimeout(function() {

        calculs.forEach(function(pippo) {

            var displayCalc = document.getElementById("displayCalc");

            displayCalc.innerHTML += pippo + "<br />";

        });

    }, 500);
*/

}