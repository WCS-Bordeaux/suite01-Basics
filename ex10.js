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

var Person = function(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.fullName = fName + " " + lName;
    this.isAdult = function(age) {
        if(age >= 18) {
            console.log(this.fullName + " est majeur");
            return this.fullName + " est majeur";
        }
        else {
            console.log(this.fullName + " est mineur");
            return this.fullName + " est mineur";
        }
    }
}
function getPerson(fName, lName, age) {
    return new Person(fName, lName, age);
}

getPerson("toto", "tata", 45);
