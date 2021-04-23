// Variáveis
let p = document.querySelector("p");
let button = document.querySelectorAll("button");
let contador = 0;


// Funções
let decrementar = () => {
    contador--;
    p.innerText = contador;
}

let resetar = () => {
    contador = 0;
    p.innerText = contador;
}

let incrementar = () => {
    contador++;
    p.innerText = contador;
}


// Event Listeners
button.forEach( (e, i) => {
    switch (i) {
        case 0:
            e.addEventListener("click", decrementar);
            break;
    
        case 1:
            e.addEventListener("click", resetar)
            break;
            
        case 2:      
            e.addEventListener("click", incrementar)
            break;
    }
});

