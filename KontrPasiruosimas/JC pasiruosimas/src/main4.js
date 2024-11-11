const createUser = (event) => {
  event.preventDefault();
  let productPrice = +document.querySelector("#number").value;
  let productCount = +document.querySelector("#percent").value;
  let finalPrice = productCount * productPrice;
  //   console.log({ productCount, productPrice, finalPrice });
  showData(finalPrice);
  //   return { productCount, productPrice };
};
const showData = (data) => {
  document.querySelector("#result").innerHTML = data;
};
document.querySelector("#percentForm").addEventListener("submit", createUser);




// function calculatePercent() {
//   const number = +document.querySelector("#number").value;
//   const percent = +document.querySelector("#percent").value;
//   if (!isNaN(number) && !isNaN(percent)) {
//     const result = (number * percent) / 100;
//     console.log(result);

//     document.getElementById("#result").innerText = result.toFixed(2);
//   } else {
//     document.getElementById("#result").innerText =
//       "Prašome įvesti tinkamus skaičius";
//   }
// }

// let grades = prompt(
//   "Iveskite keturių klasių vidurkius atskirdami kableliais:"
// ).split(",");
// let maxGrades = Math.max(
//   1 * grades[0],
//   1 * grades[1],
//   1 * grades[2],
//   1 * grades[3]
// );
// alert(`${maxGrades}`);
// let aClass = maxGrades - grades[0];
// let bClass = maxGrades - grades[1];
// let cClass = maxGrades - grades[2];
// let dClass = maxGrades - grades[3];
// if (aClass = =0) let aClass="";
// if (bClass = =0) let bClass="";
// if (cClass = =0) let cClass="";
// if (dClass = =0) let dClass="";
// alert(`${aClass}, ${bClass}, ${cClass}, ${dClass}`);
