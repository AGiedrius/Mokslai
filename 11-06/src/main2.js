let startNumber = +prompt("Pirmas skaicius?:");
let endNumber = +prompt("Paskutinis skaicius?:");
let numberArray = [];
let rez = (startNumber, endNumber) => {
  do {
    numberArray.push(startNumber);
    startNumber++;
    if (startNumber <= endNumber) numberArray.push("_");
  } while (startNumber <= endNumber);
  return numberArray;
};
console.log(rez(startNumber, endNumber).join(""));
