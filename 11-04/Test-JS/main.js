"use strict";
let monday = +prompt("Pirmadieni pamoku:");
let tuesday = +prompt("Antradieni pamoku:");
let wednesday = +prompt("Treciadieni pamoku:");
let thursday = +prompt("Ketviortadieni pamoku:");
let friday = +prompt("Penktadieni pamoku:");
let pamokos = monday + tuesday + wednesday + thursday + friday;
let minuciuMokosi = pamokos * 45;
// console.log (pamokos);
// console.log (minuciuMokosi);

console.log(`Petriukas per savaite turi pamoku: ${pamokos}`);
console.log(`Petriukas per savaite mokosi minuciu: ${minuciuMokosi}`);
