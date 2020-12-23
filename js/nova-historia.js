var cont = 0;

var salvarPersonagem = document.querySelector('#nova-historia');

salvarPersonagem.addEventListener("click", function(event) {

    var butao = event.target.id;

    if (!["desenho", "butao-desenho"].includes(butao)) {

        event.preventDefault();

        var formulario = document.querySelector('#nova-historia');

        var img = $("#desenho")[0].files[0];

        var historia = formulario.escrevaHistoria.value;

        var imgCarregada = new FileReader();

        imgCarregada.readAsDataURL(img);

        var aux = src;

        var erros;

        if (historia.length == 0) {
            erros = "* O campo não pode ser enviado sozinho!!!";

            var exibeErro = document.querySelector('#erro-historia');
            exibeErro.textContent = erros;

            return;
        }

        chamaFuncao(historia, aux);

        formulario.reset();
    }
});

$(function() {
    $("#desenho").change(function() {

        var img = $(this)[0].files[0];


        var imgCarregada = new FileReader();
        imgCarregada.onloadend = function() {
            src = imgCarregada.result;
        }

        imgCarregada.readAsDataURL(img);
    });
});

function chamaFuncao(historia, src) {
    var divTexto = criarDivTexto(historia);
    var divDesenho = criarDivDesenho(src);
    var armazenamento = document.querySelector("#desenho-do-usuario");
    armazenamento.appendChild(divTexto);
    armazenamento.appendChild(divDesenho);
}

function criarDivTexto(historia) {
    var adcionaTexto = document.createElement("div");
    adcionaTexto.classList.add("col-md-7");
    adcionaTexto.classList.add("ta-1");
    adcionaTexto.appendChild(criarTexto(historia));

    return adcionaTexto;
}

function criarTexto(historia) {
    var p = document.createElement("p");
    p.textContent = historia;

    return p;
}

function criarDivDesenho(src) {
    var adcionaImg = document.createElement("div");
    adcionaImg.classList.add("col-md-3");
    adcionaImg.appendChild(criarDesenho(src));

    return adcionaImg;
}

function criarDesenho(src) {
    var img = document.createElement("img");
    img.classList.add("imge");

    img.id = "imagem" + cont;
    img.alt = "desenho de um usuario";
    img.src = src;
    img.width = "250";
    img.height = "mr-auto";
    img.style.height = "auto";

    cont++;

    return img;
}