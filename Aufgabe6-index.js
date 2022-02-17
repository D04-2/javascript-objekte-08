// Aufgabenstellung - Teil 1
// Ein Kreis hat einen Radius und einen Durchmesser
// Schreibe so ein Objekt in JavaScript. Nehme an, der Radius liegt bei 5 und der Durchmesser bei 10.
// Würde sich der Durchmesser ändern, wenn der Radius auf 6 ansteigt?

// Aufgabenstellung - Teil 2
// Der Durchmesser soll aus einer Objekt-Methode heraus berechnet werden.
// Er ist also immer doppelt so lang wie der Radius.
"use strick";
const kreis = {
  radius: 5,
  durchmesser() {
    return this.radius * 2;
  },
};
kreis.radius = 8;
console.log(kreis.durchmesser());
