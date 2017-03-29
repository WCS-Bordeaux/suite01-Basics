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

    // Code a function "getRandNum" that return a random number between 0(included) and 100 000(included).

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
    // You will reuse generateCalcul

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

var isHtmlVersion = isHtmlVersion || false;

function evalExpAdd(x, y) {
    return x + y || "input datas not valid (" + x + y + ")";
}
function evalExpSub(x, y) {
    return x - y || "input datas not valid (" + -  y + ")";
}
function evalExpModul(x, y) {
    return x % y || "input datas not valid (" + x % y + ")";
}
function evalExpMulti(x, y) {
    return x * y || "input datas not valid (" + x * y + ")";
}
function evalExpDivi(x, y) {
    return x / y || "input datas not valid (" + x / y + ")";
}

function evalExpr(x, y, sign) {
    let res = 0;
    switch(sign) {
        case "+":
            res = evalExpAdd(x, y);
            break;
        case '-':
            res = evalExpSub(x, y);
            break;
        case '*':
            res = evalExpMulti(x, y);
            break;
        case '%':
            res = evalExpModul(x, y);
            break;
        case '/':
            res = evalExpDivi(x, y);
            break;
        default:
            res = 'Unknow operator';
            break;
    }
    return res;
}
function getRandNum(multiplier, min) {
    var min = min || 0;
    var multiplier = multiplier || 1000;
    let result = Math.round(Math.random() * (multiplier - min) +min);
    return result;
}

function getRandSign() {
    return getRandNum(4);
}

function animateEnd() {
    var container = document.getElementById('container');
    origWidth = parseInt(getComputedStyle(container).width);

    function smallestContainer(w) {
        setTimeout(function () {
            if ( w > 0) {
                w -= 2;
                container.style.width = w + "px";
                container.style.height = w + "px";
                smallestContainer(w);
            }
        }, 2);
    }
    smallestContainer(origWidth);

}
function generateCalcul(nb) {
    var arrSign = ["multi", "add", "sub", "modulo", "divide"];
    var sign = "";
    var x = 0;
    var y = 0;
    var res = 0;

    setTimeout(function () {
        --nb;
        x = getRandNum(Math.random() * 10);
        y = getRandNum(Math.random() * 10);
        getRandNum(5);
        switch (arrSign[getRandNum(5)]) {
            case "multi":
                res = x * y;
                sign = " * ";
                break;
            case "add":
                res = x + y;
                sign = " + ";
                break;
            case "sub":
                res = x - y;
                sign = " - ";
                break;
            case "modulo":
                res = x % y;
                sign = " % ";
                break;
            case "divide":
                res = x / y;
                sign = " / ";
                break;
        }
        var result = x + sign + y + " = " + res;
        console.log( result );
        /* bonus  */
        if(isHtmlVersion) {
            var resHolder = document.createElement('p');
            resHolder.setAttribute('id', 'monitor-text');
            var resTxt = document.createTextNode( result );
            resHolder.appendChild(resTxt);

            var oldEl = document.getElementById('monitor-text');
            var oldElParent = oldEl.parentNode;
            oldElParent.replaceChild( resHolder, oldEl );
        }
        if(nb > 0) {
            generateCalcul(nb);
        }
        else {
            if(isHtmlVersion) {
                animateEnd();
            }
        }
    }, 150);

}

if(!isHtmlVersion) {
    getRandNum();
    getRandSign();
    generateCalcul(6);
}


/* bonus */
if(isHtmlVersion) {
    window.addEventListener('load', function () {
        document.getElementById('generate').onclick = function () {
            generateCalcul(document.getElementById('repeat').value);
        }
    });
}
/* bonus end */