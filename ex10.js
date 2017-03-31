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
 - une fonction "isAdult" pour tester si la personne est majeur;

 */
function getPerson(fName, lName, age) {
    var person = {
        fullName: fName + " " + lName,
        firstName: fName,
        lastName: lName,
        age: age,
        isAdult: function (age) {
            if (this.age >= 18) {
                return fName + " " + lName + " est majeur";
            }
            else {
                return fName + " " + lName + " est mineur";
            }

        }
    }
    return person;
}


// console.log(getPerson("toto", "tata", 45));
getPerson("toto", "tata", 45);