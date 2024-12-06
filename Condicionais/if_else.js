const numero1 = 11;

const numeroPar = numero1 % 2 === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log("par");
} else {
    console.log("par");
}
/* O if verifica uma condição imposta e se ela for verdadeira, executa um bloco
 de código. 
 */
/*if (!numeroPar) {
    console.log("impar");
}*/
/* para o if verificar uma negação o ! deve ser colocado antes da condição, 
no entanto, é melhor utilizar o Else (senão) para isso*/

const numero2 = 11;

const numeroDivisivelPor5 = numero2 % 5 === 0;

if (numero2 === 0) {
    console.log("o número é inválido");
} else if (numeroDivisivelPor5) {
    console.log("Sim");
} else {
    console.log("Não");
}

/*Você também pode utilizar o else if para uma nova verificação na mesma parte 
parte do código*/
