"use strict";

// Aufgabenstellung

//Herr Müller ist Besitzer eines BMW im Modell X5 mit 40000 Kilometern
//und in der Farbe dunkelblau mit Baujahr 2019.

//Schreibe ein Objekt zum Auto mit möglichst vielen Informationen.
//Schreibe nun eine Methode, die das Alter des Autos angibt. Du darfst dich in deiner Berechnung auf das aktuelle Jahr 2022 beziehen.
//Kannst du eine Lösung finden (mittels Recherche) um das aktuelle Jahr automatisch zu ermitteln?

const today = new Date();
const car = {
  owner: "Müller",
  brand: "BMW",
  model: "X5",
  constructionYear: 2019,
  color: "Blau",
  kilometreAge: 40000,
  currentNettoValue: 38900,
};

car.getAge = function () {
  return today.getFullYear() - this.constructionYear;
};

car.getBruttopreis = function () {
  return this.currentNettoValue * (1.19).toFixed(2);
};

console.log(`Das Auto von Herrn Müller ist ${car.getAge()} Jahre alt`);
console.log(
  `Aktueller Nettowert beträgt: ${
    car.currentNettoValue
  } \n der Bruttowert beträgt ${car.getBruttopreis()}!`
);
