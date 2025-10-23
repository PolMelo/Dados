document.addEventListener('DOMContentLoaded', () => {
    const tirarun = document.getElementById("tirarun");
    const fotodado = document.getElementById("dadosoltirar") as HTMLImageElement;


    //Registrar clases per treure anuimacio
    const dadosoltirar = document.getElementById('dadosoltirar') as HTMLImageElement;

    

    if (tirarun) {
        tirarun.onclick = function (): void {
            const numero1 = Math.floor(Math.random() * 20) + 1;
            fotodado.src = `IMG/d${numero1}.png`;


            //Eliminar la clase para que no gire mas
            dadosoltirar.classList.remove('dadoModo');

           
        };
    }
});