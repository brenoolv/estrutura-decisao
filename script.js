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