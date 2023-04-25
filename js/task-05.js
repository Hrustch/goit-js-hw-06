const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function refreshOutput () {
    if (input.value) {
        output.textContent = input.value;
    } else {
        output.textContent = "Anonymous";
    }
};

input.addEventListener("input",refreshOutput);