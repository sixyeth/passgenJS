let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let tooltip = document.querySelector("#tooltip");

let containerPassword = document.querySelector("#containerPassword");

let charset = "abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ0123456789!@$%&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(password.textContent);
}

password.addEventListener("click", function() {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    setTimeout(function() {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    }, 1500);
});

