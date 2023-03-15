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
