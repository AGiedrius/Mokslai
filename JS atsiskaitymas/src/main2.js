let number = 0;
let suma = 0;
const whatNumber = () => {
  while (true) {
    let number = +prompt(
      "Įveskite skaičių? (Jai įvestas neigiamas skaičius, funkcija nutraukia darbą )"
    );
    if (number > 0) {
      suma = suma + number;
      console.log("Suma: " + suma);
    } else if (number < 0) {
      console.log("Programa baigta. Teigiamų skaičių suma: " + suma);
      break;
    } else {
      console.log("Nesuprastas atsakymas.");
    }
  }
};

whatNumber();
