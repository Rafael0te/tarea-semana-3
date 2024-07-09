const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const selectedOption = priceElement.options[priceElement.selectedIndex];
  const price = parseInt(selectedOption.dataset.price);
  const number = parseInt(numberElement.value);
  const name = selectedOption.dataset.name;
  let purchase = {
    price: price,
    number: number,
    name: name,
  };
  purchases.push(purchase);
  window.alert(`${display()}\nSubtotal: ${subtotal()} yen`);
}

function display() {
  let string = "Order details:\n";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].number} ${purchases[i].name} x ${purchases[i].price} yen\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\Subtotal: ${sum} yen\nShipping charge: ${postage} yen\nTotal: ${sum + postage} yen`);
  purchases = [];
  priceElement.value = "0"; 
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum >= 3000) {
    return 0;
  } else if (sum >= 2000) {
    return 250;
  } else {
    return 500;
  }
}