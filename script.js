//aparecer no commit
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let conteinerPassord = document.querySelector("#container-password");

let charset = "abcdefghijlmnopqrstuvwzyxABCDEFGHIJLMNOPQRSTUVWXYZ0123456789"
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
        
    }
    conteinerPassord.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
