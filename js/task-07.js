const controller = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

function resize(){
    output.style.fontSize = `${controller.value}px`;
}

controller.addEventListener("input", resize);