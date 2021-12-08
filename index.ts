function iniciarJogo() {
            
        
    var cor = new Map();


    cor.set("aqua", "#00FFFF");
    cor.set("cyan", "#00FFFF");
    cor.set("forestgreen", "#228B22");
    cor.set("lightblue", "#ADD8E6");
    cor.set("mediumspringgreen", "#00FA9A");
    cor.set("olivedrab", "#6B8E23");
    cor.set("purple", "#800080");
    cor.set("sandybrown", "#F4A460");
    cor.set("teal", "#008080");
    cor.set("turquoise", "#40E0D0");

    var vetorCor=["aqua","cyan","forestgreen","lightblue","mediumspringgreen","olivedrab","purple","sandybrown","teal","turquoise"];
    var num = Math.floor(10* Math.random() + 1);
    let cores = prompt("Selecione uma cor \n (aqua, cyan, forestgreen, lightblue, mediumspringgreen, olivedrab, purple, sandybrown, teal, turquoise) e veja se acerta: ");
    if (cores != null && cores != "") {

        if (cores != vetorCor[num]) {
            alert("Você Errou! ")
            document.body.style.backgroundColor = cor.get(vetorCor[num])  ;
        }else{
            alert("Você Acertou!")
            document.body.style.backgroundColor = cor.get(vetorCor[num]) ;
        }
    }
}

iniciarJogo();