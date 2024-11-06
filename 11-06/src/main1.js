const number = +prompt("Bet koks teigiamas sveikas skaičius");
let numberArray = [];
function rezNumberArray(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0) {
      numberArray.push("fizz");
    } else if (i % 5 == 0) {
      numberArray.push("buzz");
    } else if (i <= number) {
      numberArray.push(".");
    }
  }
  return numberArray;
}
alert(rezNumberArray(number).join(""));
