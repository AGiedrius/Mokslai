let weight = +prompt("kiek sveria viena varlė:");
let frogNumber = +prompt("Kiek varlių stebima:");
const frogSum = 5000;
let frogRez = weight * frogNumber;
// alert(`${weight} ir ${frogNumber} ir ${frogSum} `)
if (frogSum > frogRez * 1) {
  alert("Varlių nepakanka stebėjimui");
} else {
  alert("Varlių pakanka");
}
