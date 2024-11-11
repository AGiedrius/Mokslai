const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];
const filterItems = (array, query) => {
  if (!Array.isArray(array) || typeof query !== "string") {
    throw new Error("Pateikti neteisingi duomenys");
  }
  return array
    .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    .sort()
    .map((item) => `*${item}`);
};

console.log(filterItems(friends, "ob"));
