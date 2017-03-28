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

var getPerson = {
    fullName :{
        firstName : "toto",
        lastName : "tata",
    },
    age : 45,
}

function isAdult (firstName) {
    if ( getPerson.age >= 124 || getPerson.age < 1) {
        return "impossible... ou encore jamais vu";
    } else if (getPerson.age >= 12 && getPerson.age < 18) {
        return "ado";
    } else if (getPerson.age >= 18 && getPerson.age < 124) {
        return "majeur";
    } else if (getPerson.age < 12){
        return "enfant";
    }
}
