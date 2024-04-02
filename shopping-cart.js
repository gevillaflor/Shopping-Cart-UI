// Get elements from the DOM
const addBtn = document.getElementById("addApple");
const removeBtn = document.getElementById("removeApple");
const display = document.getElementById("display");
const price = document.getElementById("price");
const total = document.getElementById("total");

// Get elements for the Grapes Juice item from the DOM
const addGrapesBtn = document.getElementById("addGrape");
const removeGrapesBtn = document.getElementById("removeGrape");
const grapesDisplay = document.getElementById("displayGrape");
const grapesPrice = document.getElementById("priceGrape");

// Get elements for the Orange Juice item from the DOM
const addOrangeBtn = document.getElementById("addOrange");
const removeOrangeBtn = document.getElementById("removeOrange");
const orangeDisplay = document.getElementById("displayOrange");
const orangePrice = document.getElementById("priceOrange");

// Set initial count and price
let count = 0;
let itemPrice = 200.00;

let grapesCount = 0;
let grapesItemPrice = 175.00;

let orangeCount = 0;
let orangeItemPrice = 100.00;

//Set initial price for discount and get element for discount from the DOM
let discount = 0.00;
let discountDisplay = document.getElementById("discount");

// Event listener for adding items
addBtn.addEventListener("click", function () {
  count++;
  display.innerText = count;
  price.innerText = (count * itemPrice).toFixed(2);
  getTotal();
});

// Event listener for removing items
removeBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    display.innerText = count;
    price.innerText = (count * itemPrice).toFixed(2);
    getTotal();
  }
});

// Event listener for adding Grapes Juice to cart
addGrapesBtn.addEventListener("click", function () {
  grapesCount++;
  grapesDisplay.innerText = grapesCount;
  grapesPrice.innerText = (grapesCount * grapesItemPrice).toFixed(2);
  getTotal();
});

// Event listener for removing Grapes Juice from cart
removeGrapesBtn.addEventListener("click", function () {
  if (grapesCount > 0) {
    grapesCount--;
    grapesDisplay.innerText = grapesCount;
    grapesPrice.innerText = (grapesCount * grapesItemPrice).toFixed(2);
    getTotal();
  }
});

// Event listener for adding Orange Juice to cart
addOrangeBtn.addEventListener("click", function () {
  orangeCount++;
  orangeDisplay.innerText = orangeCount;
  orangePrice.innerText = (orangeCount * orangeItemPrice).toFixed(2);
  getTotal();
});

// Event listener for removing Orange Juice from cart
removeOrangeBtn.addEventListener("click", function () {
  if (orangeCount > 0) {
    orangeCount--;
    orangeDisplay.innerText = orangeCount;
    orangePrice.innerText = (orangeCount * orangeItemPrice).toFixed(2);
    getTotal();
  }
});


//Function to calculate total and discount price
function getTotal() {
  let totalItems = parseInt(price.innerText) + parseInt(grapesPrice.innerText) + parseInt(orangePrice.innerText);
  if (totalItems > 500.0) {
    discount = totalItems * 0.1;
    totalItems = totalItems - discount;
    discountDisplay.innerText = `Discounted Price PHP ${discount.toFixed(2)}`;
  }
  total.innerText = totalItems.toFixed(2);
}
