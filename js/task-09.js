function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const text = document.querySelector(".color");
const button = document.querySelector(".change-color");

function setColor(){
  const color = getRandomHexColor();
  text.textContent = color;
  body.style.backgroundColor = color;
}

button.addEventListener("click", setColor);