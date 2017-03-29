/*

    getPerson

    Ecrire une fonction "getPerson", prenant en paramètre:

    "firstName": pour le prénom ("toto"),
    "lastName": pour le nom de famille ("tata"),
    "age": pour l'age (45)

    Nous attendons un objet comme valeur de retour.

    Cet objet contiendra:

        - un attribut "fullName" pour le prénom et le nom ensemble "toto tata"
        - un attribut "age" pour l'age de la personne
        - une fonction "isAdult" pour tester si la personne est majeur: retourne true si l'age de la personne est d'au moins 18 ans, false si en dessous;

*/

function getPerson(firstName, lastName, age) {
   var obj = {
      fullName: firstName + " " + lastName,
      age: age,
      isAdult: function() {
         if (age >= 18) return true;
         else return false;
      }
   }
   
   return obj;
}

// var p = getPerson("Samy", "Bouamama", 20);
// console.log(p.fullName);
// console.log(p.age);
// console.log(p.isAdult());