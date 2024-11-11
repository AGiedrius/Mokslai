let oddNumber = 0;
let evenNumber = 0;
const sumNumber = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumber += i;
    } else {
      oddNumber += i;
    }
  }
};
sumNumber();
alert(`Lyginiu sk. suma yra: ${evenNumber}, nelyginiu sk. suma  ${oddNumber}`);

// let h = +prompt("Parašiutininkas iš kokio aukščio šoka parašiutininkas:");
// let t = +prompt("Per kiek sekundžių išsiskleidžia parašiutas:");
// let rezT = Math.sqrt((2 * h) / 9.8);
// if (t < rezT) {
//   alert("Parašiutas išsiskleidė");
// } else {
//   alert("Parašiutininkas kaput");
// }
//
