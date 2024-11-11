let number = +prompt("Skaičius iki kurio skaičiuosim:");
let evenNumber = 0;
const sumNumber = (number) => {
  for (let i = 1; i < number && number > 0; i++) {
    if (i % 2 === 0) {
      evenNumber += i;
    }
  }
};
sumNumber(number);
alert(`Lyginiu teigiamų sk. suma yra: ${evenNumber}`);
