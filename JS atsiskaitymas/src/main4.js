const blaCreat = (event) => {
  event.preventDefault();
  let amount = +document.querySelector("#amount").value;
  let interRange = +document.querySelector("#myRange").value;
  let ofYears = +document.querySelector("#years").value;
  let rezult = (amount * interRange * ofYears) / 100;
  showData(
    "If you deposit " +
      amount +
      "<br></br>" +
      "interest rate " +
      interRange +
      "<br><br/>" +
      "you receive " +
      rezult
  );
};
const showData = (data) => {
  document.querySelector("#result").innerHTML = data;
};
document.querySelector("#simplInters").addEventListener("submit", blaCreat);
