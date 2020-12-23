var condicao = [0];

var h2Bool = false;

var capituloTopo = null;

var elementoTopo;

var conteudo;

var h2 = document.querySelectorAll("h2");
h2.forEach(reg => {
    reg.addEventListener("click", function(event) {

        var id = event.target.id;

        var titulo = event.target;

        var idNum = id.replace(/\D+/g, '');

        var capitulo = document.querySelector("#capitulo" + idNum);

        var emBreve = document.querySelector(".em-breve");

        var divAlerta = emBreve.children[0];

        var p = divAlerta.children[0];

        p.style.animation = null;

        p.style.animation = "alerta 0.5s";

        if (h2Bool) {
            removeClass();
        }

        if (condicao != idNum) {
            removeClass();

            if (capitulo != null) {
                capitulo.classList.add("ativa");
                titulo.classList.add("h2-ativo");

                capituloTopo = titulo;
                elementoTopo = capituloTopo.offsetTop;

                condicao = idNum;
            }

        } else if (h2Bool) {
            removeClass();
            rezetaTamanhoTitulo();

            capituloTopo = null;
            elementoTopo = null;

            condicao = 0;
        } else {
            if (capitulo != null) {
                removeClass();
                rezetaTamanhoTitulo();

                capituloTopo = null;
                elementoTopo = null;
            }

            condicao = 0;
        }
    });
});

function removeClass() {
    var posicao = document.querySelectorAll(".posicao-fixa");

    var ativa = document.querySelectorAll(".ativa");

    var h2Ativo = document.querySelectorAll(".h2-ativo");

    ativa.forEach(reg => {
        reg.classList.remove("ativa");
    });

    h2Ativo.forEach(reg => {
        reg.classList.remove("h2-ativo");
    });

    posicao.forEach(reg => {
        reg.classList.remove("posicao-fixa");
    });
}

window.onscroll = function() {
    if (window.pageYOffset > elementoTopo) {
        if (capituloTopo != null) {
            rezetaTamanhoTitulo();
            capituloTopo.classList.add("posicao-fixa");
            h2Bool = true;
        }
    } else {
        if (elementoTopo != null && capituloTopo != null) {
            capituloTopo.classList.remove("posicao-fixa");
            h2Bool = false;
        }
    }
}

window.onresize = function() {
    rezetaTamanhoTitulo();
}

function rezetaTamanhoTitulo() {
    var conteudo = document.querySelectorAll(".capitulo");

    for (let i = 1; i < conteudo.length; i++) {
        var titulo = document.querySelector("#titulo" + i);
        titulo.style.width = conteudo[0].clientWidth + 10 + "px";
    }
}