// Média dos ultimos 12 meses do valor do Dolar Americano (Valor em reais)
// Exibir a cotação mensalmente da moeda americana.
// https://docs.awesomeapi.com.br/api-de-moedas
const moedas = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
let coisa = [];

async function listarMoedas(url) {
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
  return data;
}

async function mediaAnual() {
  const moedas_periodo = listarMoedas(
    "https://economia.awesomeapi.com.br/json/daily/USD-BRL/365"
  );
}

listarMoedas(moedas);
