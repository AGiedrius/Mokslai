const itemsArray = [
  "Push-ups",
  "Sit-ups",
  "Bear Crawls",
  "1 mile run",
  "60 second plank",
  "Burpees",
  "Jumping Jacks",
  "Squats",
  "Weighted Squats",
  "Inch Worms",
];
let randomX = 0;
let x = +prompt("Iveskite norima uzduociu skaiciu:");
let selectExercise = [];
const randomExercise = (x) => {
  if (x <= 0) {
    console.log("Ivestas per mazas skaicius");
  } else if (x > itemsArray.length) {
    console.log("Ivestas per didelis skaiciua");
  }
  for (let i = 0; i < x; i++) {
    randomX = Math.floor(Math.random() * (x + 1));
    selectExercise.push(itemsArray[randomX]);
  }
  return selectExercise;
};
console.log(randomExercise(x));

// let weight = +prompt("kiek sveria viena varlė:");
// let frogNumber = +prompt("Kiek varlių stebima:");
// const frogSum = 5000;
// let frogRez = weight * frogNumber;
// // alert(`${weight} ir ${frogNumber} ir ${frogSum} `)
// if (frogSum > frogRez * 1) {
//   alert("Varlių nepakanka stebėjimui");
// } else {
//   alert("Varlių pakanka");
// }
