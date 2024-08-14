// Média dos ultimos 12 meses do valor do Dolar Americano (Valor em reais)
// Exibir a cotação mensalmente da moeda americana.
const moedas = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
let coisa = [];

async function listarMoedas(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function mostrarDados(nomeDiv, media, tipo) {
  const div = document.querySelector(`.${nomeDiv}`);

  div.innerHTML = `<p> ${tipo} ${media} </p>`;
}

async function mediaAnual() {
  const moedas_periodo = await listarMoedas(
    "https://economia.awesomeapi.com.br/json/daily/USD-BRL/5000?365"
  );
  const mediaAnual = media(moedas_periodo);
  mostrarDados("anual", mediaAnual.toFixed(2), "R$");
}

async function cotacaoMensal() {
  const moedas_periodo = await listarMoedas(
    "https://economia.awesomeapi.com.br/json/daily/USD-BRL/7777?start_date=20240701&end_date=20240731"
  );
  const cotacaoMensal = agruparPorMes(moedas_periodo);
  console.log(cotacaoMensal);
  cotacaoMensal.forEach((cotacao) => {
    mostrarDados(`mensal", ${cotacao.toFixed(2)}, "$"`);
  });
}

function agruparPorMes(moedas) {
  const meses = {};

  moedas.forEach((moeda) => {
    const mes = new Date(moeda.timestamp * 1000).getMonth() + 1;
    if (!meses[mes]) {
      meses[mes] = [];
    }
    meses[mes].push(moedas);
  });

  return Object.values(meses);
}

function media(moedas) {
  let soma = 0;
  let count = 0;

  console.log(moedas);
  moedas.forEach((moeda) => {
    const media = (parseFloat(moeda.high) + parseFloat(moeda.low)) / 2;
    soma += media;
    count++;
  });

  return soma / count;
}

mediaAnual();
cotacaoMensal();
