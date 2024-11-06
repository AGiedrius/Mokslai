let startNumber = +prompt("Įveskite pirmąjį skaičių:");
let stopNumer = +prompt("Įveskite antrąjį skaičių:");
// if (startNumber>=stopNumer) { alert("Pirmas skaicius privalo buti mazesnis uz antra, bandykit dar karta:")};
function sumOfRange(startNumber, stopNumer) {
  for (let i = startNumber; i <= stopNumer; i++) {
    startNumber = startNumber + i;
  }
  return startNumber - 1;
}
let rez = sumOfRange(startNumber, stopNumer);
alert(rez);
