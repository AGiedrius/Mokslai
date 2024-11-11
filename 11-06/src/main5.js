const createUser = (event) => {
  event.preventDefault();
  let productPrice = +document.querySelector("#price").value;
  let productCount = +document.querySelector("#count").value;
  let finalPrice = productCount * productPrice;
  //   console.log({ productCount, productPrice, finalPrice });
  showData(finalPrice);
  //   return { productCount, productPrice };
};
const showData = (data) => {
  document.querySelector("#result").innerHTML = data;
};
document.querySelector("#productForm").addEventListener("submit", createUser);
