alert("hello")
// Get elements from the DOM
const addBtn = document.getElementById('addApple');
const removeBtn = document.getElementById('removeApple');
const display = document.getElementById('display');
const price = document.getElementById('price');
const total = document.getElementById('total');

// Get elements for the Grapes Juice item from the DOM
const addGrapesBtn = document.getElementById('addGrape');
const removeGrapesBtn = document.getElementById('removeGrape');
const grapesDisplay = document.getElementById('displayGrape');
const grapesPrice = document.getElementById('priceGrape');

// Set initial count and price
let count = 0;
let itemPrice = 100.00;

let grapesCount = 0;
let grapesItemPrice = 125.00;

// Event listener for adding items
addBtn.addEventListener('click', function() {
  count++;
  display.innerText = count;
  price.innerText = (count * itemPrice).toFixed(2);
  getTotal();
});

// Event listener for removing items
removeBtn.addEventListener('click', function() {
  if (count > 0) {
    count--;
    display.innerText = count;
    price.innerText = (count * itemPrice).toFixed(2);
    getTotal();
  }
});

// Event listener for adding Grapes Juice to cart
addGrapesBtn.addEventListener('click', function() {
  grapesCount++;
  grapesDisplay.innerText = grapesCount;
  grapesPrice.innerText = (grapesCount * grapesItemPrice).toFixed(2);
  getTotal();
});

// Event listener for removing Grapes Juice from cart
removeGrapesBtn.addEventListener('click', function() {
  if (grapesCount > 0) {
    grapesCount--;
    grapesDisplay.innerText = grapesCount;
    grapesPrice.innerText = (grapesCount * grapesItemPrice).toFixed(2);
    getTotal();
  }
});

function getTotal(){
    let totalItems = parseInt(price.innerText) + parseInt(grapesPrice.innerText);
    if(totalItems > 500.00){
        totalItems = totalItems - (totalItems *0.10);
    }
    total.innerText = totalItems.toFixed(2);

}

