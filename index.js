"use strict";

const today = new Date();
console.log(today);
const yearOfToday = today.getFullYear();
console.log(yearOfToday);

const autoInfo = {
  besitzer: "Herr Müller",
  marke: "BMW",
  modell: "X5",
  kilometer: 40000,
  farbe: "Dunkelblau",
  baujahr: 2019,
  altOfAuto: function () {
    return yearOfToday - this.baujahr;
  },
};

console.log(autoInfo.altOfAuto());
