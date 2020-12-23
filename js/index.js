var tamanho2 = document.querySelectorAll(".ta-2");

var tamanho1 = document.querySelectorAll(".ta-1");

var classAnt;

booleano = false;

var desfocar = document.querySelector("body");
desfocar.addEventListener("click", function(event) {

    var evento = event.target.classList;

    var removeClass = document.querySelectorAll(".foco");

    if ("foco".includes(evento)) {

        removeClass.forEach(elem => {
            elem.classList.remove("foco");
        });

        tamanho1.forEach(indice1 => {
            indice1.style.height = null;
        });

        tamanho2.forEach(indice2 => {
            indice2.style.height = null;
        });

        booleano = false;
    }

    evento = null;
});

var almentarTamanho = document.querySelectorAll(".imge");
almentarTamanho.forEach(reg => {
    reg.addEventListener("click", function(event) {

        var id = event.target.id;

        var removeClass = document.querySelectorAll(".foco");

        var img = document.querySelector("#" + id);

        img.classList.add("foco");

        img = null;

        tamanho1.forEach(indice1 => {
            indice1.style.height = "600px";
        });

        tamanho2.forEach(indice2 => {
            indice2.style.height = "900px";
        });

        booleano = true;

        if (booleano) {
            removeClass.forEach(elem => {
                elem.classList.remove("foco");
            });
        }
    });
});