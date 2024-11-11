let startNumber = +prompt("Pirmas skaicius?:");
let endNumber = +prompt("Paskutinis skaicius?:");
let numberArray = [];
let rez = (startNumber, endNumber) => {
  for (startNumber; startNumber <= endNumber; startNumber++) {
    numberArray.push(startNumber);
    if (startNumber < endNumber) numberArray.push("_");
  }
  return numberArray;
};
console.log(rez(startNumber, endNumber).join(""));
