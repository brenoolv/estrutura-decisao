function somaMaior() {

    let a = Number(prompt("digite um numero;"));
    let b = Number(prompt("digite um numero;"));
    let c = Number(prompt("digite um numero;"));
    let soma = a + b;
    
    if (soma < c) {
        alert("A soma de A + B é: "  + soma)
    } else {
        console.log("Fim!")
    }
}

function tempoCasamento() {
}

function imparPar() {
    let num = Number(prompt("digite seu numero"));
    if (num % 2 === 0) {
        alert("este numero é par");
    } else if (num % 2 === 1) {
        alert("este numero é impar")
    } else {
        alert("Caractere inválido")
    } 
}