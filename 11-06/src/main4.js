let grades = prompt(
  "Iveskite keturių klasių vidurkius atskirdami kableliais:"
).split(",");
let maxGrades = Math.max(
  1 * grades[0],
  1 * grades[1],
  1 * grades[2],
  1 * grades[3]
);
alert(`${maxGrades}`);
let aClass = maxGrades - grades[0];
let bClass = maxGrades - grades[1];
let cClass = maxGrades - grades[2];
let dClass = maxGrades - grades[3];
if (aClass = =0) let aClass="";
if (bClass = =0) let bClass="";
if (cClass = =0) let cClass="";
if (dClass = =0) let dClass="";
alert(`${aClass}, ${bClass}, ${cClass}, ${dClass}`);