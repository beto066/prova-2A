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

        booleano = true;

        if (booleano) {
            removeClass.forEach(elem => {
                elem.classList.remove("foco");
            });
        }
    });
});