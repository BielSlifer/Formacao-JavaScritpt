altura = 1.9;
peso = 95.5;
imc = peso / (altura * altura); //essa é a forma mais simples de resolver
//mas é possível utilizar o comando Math (para executar um fanção matemática)
//Math.pow realiza a potenciação = Math.pow(altura, 2)

console.log(imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("obeso");
} else if (imc > 40) {
    console.log("obesidade mórbida");
}
