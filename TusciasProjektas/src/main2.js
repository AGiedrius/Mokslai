let grades = prompt("Įveskite 5 skaičius per kablelį");
// let separates = grades.split(",");
// let average =
//   (1 * separates[0] +
//     1 * separates[1] +
//     1 * separates[2] +
//     1 * separates[3] +
//     1 * separates[4]) /
//   5;
// if (average > 9) {
//   alert("Petriukas gaus tris saldainius");
// } else if (average >= 7) {
//   alert("Petriukas gaus du saladainius");
// } else {
//   alert("Petriukas gaus vieną saldainį");
// }
// alert(`${average}`);
let gradesArray = grades.split(",").map(Number);
let sum = gradesArray.reduce((total, num) => total + num, 0);
let average = sum / 5;
if (average > 9) {
  alert("Petriukas gaus tris saldainius");
} else if (average >= 7) {
  alert("Petriukas gaus du saladainius");
} else {
  alert("Petriukas gaus vieną saldainį");
}

