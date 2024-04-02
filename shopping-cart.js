alert("hello");

let counterDisplayElem = document.getElementById('display');
let counterMinusElem = document.getElementById('remove');
let counterPlusElem = document.getElementById('add');
let priceDisplayElem = document.getElementById('price');
let appleValue = 100.00;
// let orangeValue = 125.00;
// let grapeValue = 150.00;
let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
    priceDisplayElem.innerHTML = (appleValue * count).toFixed(2);
};