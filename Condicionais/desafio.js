const precoEtanol = 3.96;
const precoGasolina = 5.96;
const gasto_combustivel_carro = 5;
const distanciaEmKM = 100;
const tipoCombustivel = "Etanol";

const combustivel_gasto = distanciaEmKM / gasto_combustivel_carro;

if (tipoCombustivel === "Gasolina") {
    const valor_gasto = precoEtanol * combustivel_gasto;
    console.log("O valor total gasto foi de R$" + valor_gasto.toFixed(2));
} else {
    const valor_gasto = precoGasolina * combustivel_gasto;
    console.log("O valor total gasto foi de R$" + valor_gasto.toFixed(2));
}
