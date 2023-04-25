const form = document.querySelector(".login-form");

function submitFunc (event){
    event.preventDefault();
    let email = form.elements.email.value;
    let pass = form.elements.password.value;
    if (email === "" || pass === ""){
        alert(`Всі поля мають бути заповнені! Повертайся на полуничну плантацію!`)
        return;
    }
    console.log({email, pass});
    form.reset();    
};

form.addEventListener("submit", submitFunc)