// Variáveis
let arrayDeCores = ["blue", "red", "yellow", "green", "white", "gray"];
let body = document.querySelector("body");
let p = document.querySelector("p");
let button = document.querySelector("button");


// Funções
let mudarDeCor = () => {
    let cor = arrayDeCores[numeroAleatorio()];
    body.style.backgroundColor = cor;
    p.innerText = cor;
    p.style.textTransform = "capitalize"
}

let numeroAleatorio = () => Math.floor( Math.random()*arrayDeCores.length);


// Event Listeners
button.addEventListener("click", mudarDeCor)
window.addEventListener("load", mudarDeCor)