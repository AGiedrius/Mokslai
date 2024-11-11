function klaustiMonetos() {
  let monetos = 0;
  while (true) {
    let atsakymas = prompt("Ar norėtumėt monetos? (Taip/Ne)");
    if (atsakymas.toLowerCase() === "taip") {
      monetos++;
      console.log("Turite " + monetos + " monetų.");
    } else if (atsakymas.toLowerCase() === "ne") {
      console.log("Programa baigta. Galutinė monetų suma: " + monetos);
      break;
    } else {
      console.log("Nesuprastas atsakymas. Prašome atsakyti 'Taip' arba 'Ne'.");
    }
  }
}

klaustiMonetos();

// let grades = prompt("Įveskite 5 skaičius per kablelį");
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
// let gradesArray = grades.split(",").map(Number);
// let sum = gradesArray.reduce((total, num) => total + num, 0);
// let average = sum / 5;
// if (average > 9) {
//   alert("Petriukas gaus tris saldainius");
// } else if (average >= 7) {
//   alert("Petriukas gaus du saladainius");
// } else {
//   alert("Petriukas gaus vieną saldainį");
// }
