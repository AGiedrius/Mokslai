const num1 = 0;
const num2 = 0;
const operation = "";
let err = "";
let rez = 0;
const calculate = (num1, num2, operation) => {
  try {
    if (
      operation != "+" &&
      operation != "-" &&
      operation != "*" &&
      operation != "/"
    ) {
      throw new Error("Invalid operation");
    }
    switch (operation) {
      case "+":
        rez = num1 + num2;
        break;
      case "-":
        rez = num1 - num2;
        break;
      case "*":
        rez = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        } else rez = num1 / num2;
        break;
    }
    return rez;
  } catch (err) {
    // console.log(err);
    console.error(err);
    // alert(error.mesage);
  }
};
console.log(calculate(100, 33, "-"));
