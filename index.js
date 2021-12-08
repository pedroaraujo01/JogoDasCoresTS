"use strict";
document.getElementById("iniciar").addEventListener('click', iniciarJogo); 

function iniciarJogo() {
    var cor = new Map();


    cor.set("Black", "#000000");
    cor.set("Navy", "#000080");
    cor.set("SteelBlue", "#4682B4");
    cor.set("DarkGreen", "#006400");
    cor.set("GreenYellow", "#ADFF2F");
    cor.set("RosyBrown", "#BC8F8F");
    cor.set("Indigo", "#4B0082");
    cor.set("DarkMagenta", "#8B008B");
    cor.set("DarkRed", "#8B0000");
    cor.set("Yellow", "#FFFF00");


    var vetorCor = ["Black", "Navy", "SteelBlue", "DarkGreen", "GreenYellow", "RosyBrown", "Indigo", "DarkMagenta", "DarkRed", "Yellow"];
    var num = Math.floor(10 * Math.random() + 1);
    let cores = prompt("Escolha uma cor \n (Black, Navy, SteelBlue, DarkGreen, GreenYellow, RosyBrown, Indigo, DarkMagenta, DarkRed, Yellow) e veja se acertou: ");
    
       
    if (cores != null && cores != "") {
        if (cores != vetorCor[num]) {
            alert("Você Errou!");
            document.body.style.backgroundColor = cor.get(vetorCor[num]);
        }
        else {
            alert("Você Acertou!");
            document.body.style.backgroundColor = cor.get(vetorCor[num]);
        }
    }
}


iniciarJogo();