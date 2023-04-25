const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

function validCheck(){
    if (input.value.length === (Number(dataLength))){
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

input.addEventListener("blur", validCheck);