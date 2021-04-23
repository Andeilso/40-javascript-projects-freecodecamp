// Array de pessoas definidas
let pessoas = [
    {
        foto: "img/foto-perfil1.png",
        nome: "Lucas Felipe",
        profissao: "Caixa",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ullam nobis, cumque debitis veritatis exercitationem ad, vitae sint totam aut aliquam temporibus nesciunt nemo, qui assumenda quod. Tempora, totam culpa."
    },
    {
        foto: "img/foto-perfil2.jpg",
        nome: "Anderson Hilve",
        profissao: "Engenheiro de Software",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam at eaque quos temporibus libero dolor atque, commodi aliquid reiciendis est hic ducimus doloribus recusandae. Accusamus dignissimos saepe maxime amet eius!"
    },
    {
        foto: "img/foto-perfil3.jpg",
        nome: "Marcos Santana",
        profissao: "Dev FrontEnd",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sed magni accusamus recusandae asperiores eligendi aspernatur. Eaque fuga, minima reiciendis fugit, hic minus in, ad non ratione sed vero eum?"
    },
    {
        foto: "img/foto-perfil4.jpg",
        nome: "Dev BackEnd",
        profissao: "Caixa",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, culpa animi? Facilis, amet illum! Ab eveniet voluptates similique veritatis, numquam inventore? Blanditiis explicabo obcaecati fugit consequuntur. At modi enim aut."
    },
    {
        foto: "img/foto-perfil5.jpg",
        nome: "Carlos Magnum",
        profissao: "Dev FullStack",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex id quam beatae nisi et hic aspernatur provident. Sunt, assumenda sequi quidem molestiae possimus voluptatem minima aliquam, nemo vero, in autem."
    }
];

// Variáveis
let itens = [];
let itemAtual = 0;
let carrosselChange = document.querySelector(".carrossel-change");
let botao = document.querySelector("button");
let proximo = document.querySelector("#proximo");
let anterior = document.querySelector("#anterior");

// Funções
let quantosItens = () => {
    for (let i = 0; i < pessoas.length; i++) {
        itens.push(i);
    }
};

let reviewFoto = ( pessoa ) => {
    let divSombraFoto = document.createElement('div');
    divSombraFoto.classList.add("sombra-da-foto");

    let img = document.createElement("img");
    img.src = pessoa.foto;

    let p = document.createElement("p");
    p.innerHTML = '”'

    let divFotoUsuario = document.createElement('div');
    divFotoUsuario.classList.add("foto-usuario");
    divFotoUsuario.appendChild(divSombraFoto);
    divFotoUsuario.appendChild(img);
    divFotoUsuario.appendChild(p);

    return divFotoUsuario;
};

let reviewDoCliente = (pessoa) => {
    let nome = document.createElement("p");
    nome.classList.add("nome");
    nome.innerText = pessoa.nome;

    let profissao = document.createElement("p");
    profissao.classList.add("profissao");
    profissao.innerText = pessoa.profissao;
    
    let review = document.createElement("p");
    review.classList.add("review");
    review.innerText = pessoa.review;

    let nomeProfissaoReview = document.createElement("div");
    nomeProfissaoReview.classList.add("nome-profissao-review");
    nomeProfissaoReview.appendChild(nome);
    nomeProfissaoReview.appendChild(profissao);
    nomeProfissaoReview.appendChild(review);

    return nomeProfissaoReview;
};

let criandoReview = (pessoa) => {
    let div = document.createElement("div")
    div.classList.add("item-carrossel");

    div.appendChild(reviewFoto( pessoa ));
    div.appendChild(reviewDoCliente( pessoa ));

    carrosselChange.appendChild(div);
    return div;
}

let carrosselItems = () => { pessoas.forEach( pessoa => {criandoReview(pessoa)} ) }

let surpresa = () => {
    let aleatorio = Math.floor(Math.random()*itens.length);
    if(itemAtual == aleatorio){
        surpresa();
    };

    carrosselChange.style.left = `-${itens[aleatorio]}00%`;
    return itemAtual = aleatorio;
}

let proximoItem = () => {
    if(itemAtual >= (itens.length-1)){
        itemAtual = 0;
    } else {
        itemAtual++
    }

    carrosselChange.style.left = `-${itemAtual}00%`;
    return itemAtual;
}

let itemAnterior = () => {
    if(itemAtual <= 0){
        itemAtual = itens.length-1;
    } else {
        itemAtual--
    }

    carrosselChange.style.left = `-${itemAtual}00%`;
    return itemAtual;
}

// Event Listeners
window.addEventListener("load", carrosselItems);
window.addEventListener("load", quantosItens);
botao.addEventListener("click", surpresa);
proximo.addEventListener("click", proximoItem);
anterior.addEventListener("click", itemAnterior);
