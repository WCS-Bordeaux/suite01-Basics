(function() {
   document.getElementById("calcul").onclick = doCalcul;
})();

function doCalcul() {
   document.getElementById("result-div").innerHTML = ''; // html clear
   document.getElementById("result-div").append("Calcul.");
   setTimeout(doDelayedCalcul, 2000);
   loading(400, 4, 
      function() {
         document.getElementById("result-div").append(".");
      }
   );
}

function loading(delay, repetitions, action) {
   for (let i = 0; i < repetitions; i++) {
      setTimeout(action, delay);
   }
}

function doDelayedCalcul() {
   var calcString = generateCalcul(document.getElementById("dom-nb").value);
   document.getElementById("result-div").innerHTML = ''; // html clear
   document.getElementById("result-div").append(calcString);
}

function evalExpr(a, b, operator) {
   return 1;
}

function getRandNum() {
   return Math.ceil((Math.random() * 901) + 100 );
}

function getRandSign() {
   return Math.floor(Math.random() * 5);
}

function generateCalcul(number) {
   var nOperator = getRandSign();
   var randNumber = getRandNum();

   switch (nOperator) {
      case 0:
      return number + " + " + randNumber + " = " + (number + randNumber);
      break;
      case 1:
      return number + " - " + randNumber + " = " + (number - randNumber);
      break;
      case 2:
      return number + " * " + randNumber + " = " + (number * randNumber);
      break;
      case 3:
      return number + " / " + randNumber + " = " + (number / randNumber);
      break;
      case 4:
      return number + " % " + randNumber + " = " + (number % randNumber);
      break;
      default:
      return "Error when creating a random operator";
      return null;
   }
}