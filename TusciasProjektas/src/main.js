let h = +prompt("Parašiutininkas iš kokio aukščio šoka parašiutininkas:");
let t = +prompt("Per kiek sekundžių išsiskleidžia parašiutas:");
let rezT = Math.sqrt((2 * h) / 9.8);
if (t < rezT) {
  alert("Parašiutas išsiskleidė");
} else {
  alert("Parašiutininkas kaput");
}
