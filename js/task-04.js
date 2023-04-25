const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

function decrement (){
    counterValue -= 1;
    counter.textContent = counterValue;
};
function increment (){
    counterValue += 1;
    counter.textContent = counterValue;
};
buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);