var imgRobo = document.getElementById('imagem');
var imgAtual = 0;

var cores = ['img/robotron.png', 'img/robotron-amarelo.png',
             'img/robotron-branco.png', 'img/robotron-preto.png',
             'img/robotron-rosa.png', 'img/robotron-vermelho.png'];

imgRobo.src = cores[imgAtual];

function avancaImg() {
    console.log("avancou");
    if (imgAtual < 5) {
        imgAtual++;
    } else {
        imgAtual = 0;
    }

    imgRobo.src = cores[imgAtual];
}

function voltaImg() {
    console.log("voltou");
    if (imgAtual > 0) {
        imgAtual--;
    } else {
        imgAtual = 5;
    }

    imgRobo.src = cores[imgAtual];
}

const bracos = document.getElementById('valBracos');
const blindagem = document.getElementById('valBlindagem');
const nucleos = document.getElementById('valNucleos');
const pernas = document.getElementById('valPernas');
const foguetes = document.getElementById('valFoguetes');

bracos.value = 0;
blindagem.value = 0;
nucleos.value = 0;
pernas.value = 0;
foguetes.value = 0;

function aumentaVlr(inputId) {
    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);
    if (valor < 10) {
        input.value = valor + 1;
    } else {
        null;
    }
}

function diminuiVlr(inputId) {
    var input = document.getElementById(inputId);
    var valor = parseInt(input.value);
    if (valor > 0) {
        input.value = valor - 1;
    } else {
        null;
    }
}