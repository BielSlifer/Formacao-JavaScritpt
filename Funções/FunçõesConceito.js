// Funções em JS

function sayMyName (name) {
    console.log("Seu nome é: " + name);
}
sayMyName("Gabriel");

//funções por padrão executam o código sem devolver nada, você pode pedir para retornar

function quadrado(valor) {
    return valor * valor
}

const quadradoDeDez = quadrado(2)
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));