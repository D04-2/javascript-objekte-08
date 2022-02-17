"use strick";
const chucksBankkonto = {
    iban: "DE01 2345 6789 0000 1111 2222",
    bankleizahl: "ABCDEFGH123",
    bankName: "Sparkasse Berlin Ost",
    kontostand: 1000,
    dispo: 500,
    einzahlen(wert) {
      this.kontostand += wert;
    },
  
    auszahlen(wertMinus) {
      let maxLimit = this.kontostand + this.dispo;
      if (wertMinus <= this.kontostand) {
        this.kontostand -= wertMinus;
        console.log(
          `Sie können Ihr Geld am Geldautomaten abholen. 
          ${this.kontostand} Euro auf Ihrem Konto übrig. 
          Sie können sich auch Ihre ${this.dispo} Euro Dispo auszahlen lassen.`
        );
      } else if (wertMinus > this.kontostand && wertMinus <= maxLimit) {
        this.dispo = maxLimit - wertMinus;
        console.log(
          `Sie haben Geld von Ihrem Kreditkonto abgehoben. 
            Ihr aktuel Dispo ist ${this.dispo} Euro`
        );
      } else {
        console.log(`Sie haben nicht genug Geld.
          Maximal  ${maxLimit} Euro können Sie abheben.`);
      }
    },
  };
  chucksBankkonto.bankName = "Sparkasse Berlin West";
  chucksBankkonto.kontostand = chucksBankkonto.kontostand + 100;
  chucksBankkonto.dispo = chucksBankkonto.dispo + 50;
  
  chucksBankkonto.auszahlen(200);