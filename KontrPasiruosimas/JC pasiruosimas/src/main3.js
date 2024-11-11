let names = [
  "Olivia ",
  "Jackson",
  "Sophia",
  "Elijah",
  "Ava",
  "Liam",
  "Isabella",
];
const shiftNames = () => {
  names.shift(); //pasalina pirma masyvo elelmenta//
};
const unshiftNames = () => {
  names.unshift("Mason"); //prideda pirma masyvo elementa //
};
const pushNames = () => {
  names.push("Giedrius"); //prideda paskutini masyvo elementa //
};
// let name = prompt("Iveskite varda kuri norite pasalinti:");
const removeNameFromNames = (names, name) => {
  const index = names.indexOf(name);
  if (index !== -1) {
    names.splice(index, 1);
  }
  return names;
};
let withBobArray = [];
const addWithBob = () => {
  withBobArray = names.map((name) => name + "withBob");
};
//   return withBobArray;

addWithBob();
console.log(withBobArray);

// let kazkas = (n) => n / 23;

// console.log(kazkas(1000));
