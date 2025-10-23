"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const tirarun = document.getElementById("tirarun");
    const fotodado = document.getElementById("dadosoltirar");
    //Registrar clases per treure anuimacio
    const dadosoltirar = document.getElementById('dadosoltirar');
    if (tirarun) {
        tirarun.onclick = function () {
            const numero1 = Math.floor(Math.random() * 12) + 1;
            fotodado.src = `IMG/d${numero1}.png`;
            //Eliminar la clase para que no gire mas
            dadosoltirar.classList.remove('dadoModo');
        };
    }
});
//# sourceMappingURL=d12.js.map