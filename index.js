"use strick";
const autoInfo = {
  besitzer: "Herr Müller",
  marke: "BMW",
  modell: "X5",
  kilometer: 40000,
  farbe: "Dunkelblau",
  baujahr: 2019,
  alterDesAuto() {
    return new Date().getFullYear() - this.baujahr;
  },
};
console.log(autoInfo);
console.log(autoInfo.alterDesAuto());
