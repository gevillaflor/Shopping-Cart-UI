//alert("hello world");

const counter = createCounter();
const button = document.getElementById("add");
const button2 = document.getElementById("remove");

let disp = document.getElementById("display");
let count = 0;

 
function createCounter() {
  return function () {
    count++;
    return count;
  };
}

function removeCounter() {
  count--;
  return count;
}

button.addEventListener("click", () => {
  disp.innerHTML = itemCounter();
});

button2.addEventListener("click", () => {
  disp.innerHTML = removeCounter();
});
