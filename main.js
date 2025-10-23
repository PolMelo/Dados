"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const dadosingle = document.getElementById("dadosingle");
    const dadodouble = document.getElementById("dadodouble");
    const d12 = document.getElementById("d12");
    const d20 = document.getElementById("d20");
    if (dadosingle) {
        dadosingle.addEventListener('click', () => {
            window.location.href = "single.html";
        });
    }
    if (dadodouble) {
        dadodouble.addEventListener('click', () => {
            window.location.href = "double.html";
        });
    }
    if (d12) {
        d12.addEventListener('click', () => {
            window.location.href = "d12.html";
        });
    }
    if (d20) {
        d20.addEventListener('click', () => {
            window.location.href = "d20.html";
        });
    }
});
//# sourceMappingURL=main.js.map