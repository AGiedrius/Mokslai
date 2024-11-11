let data = [];
const positives = (data) => {
  if (!Array.isArray(data)) {
    throw new Error("Pateikti neteisingi duomenys - ne masyvas");
  }
  return data.filter((num) => num > 0);
};
console.log(positives([-1, -2, 0, 5, 0]));
