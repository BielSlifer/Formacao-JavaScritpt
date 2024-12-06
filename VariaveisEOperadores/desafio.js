// Declaração das variáveis
let preco_combustivel = 5.6; // Preço do combustível por litro
let gasto_combustivel_carro = 5; // Consumo médio de combustível do carro (km/litro)
let distancia_viagem = 50; // Distância da viagem em quilômetros

// Cálculo do valor total gasto na viagem
let combustivel_gasto = distancia_viagem / gasto_combustivel_carro; // Litros necessários para a viagem
let valor_gasto = preco_combustivel * combustivel_gasto; // Custo total da viagem

// Imprimir o valor total gasto na viagem no console
console.log("O valor total gasto foi de R$" + valor_gasto.toFixed(2));
