const convertButton = document.querySelector(".btn-convert");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert"); 
const currencySelect = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency").value;

function convertValues() {
  const inputCurrency = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValue = document.querySelector(".currency-value");


  //CONVERSÕES DE REAL PARA OUTRA MOEDA

  //real para dolar

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 0.19354;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //real para euro

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 0.18347;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //real para libra

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 0.15877;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //real para bitcoin

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 0.0000070566240735162444;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  //real para pesos

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 67.745;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //real para iene

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 28.7364;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //real para real

  if (
    currencySelectToConvert.value == "real-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  // CONVERSÕES DE DOLAR PARA OUTRA MOEDA

  //dolar para real
  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 5.1668;
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //dolar para euro

  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 0.94795;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //dolar para libra

  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 0.82018;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //dolar para bitcoin

  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 0.00003646189121631218;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  //dolar para peso

  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 350.025;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //dolar para iene
  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 148.485;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //dolar para dolar

  if (
    currencySelectToConvert.value == "dolar-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  // CONVERSÕES DE EURO PARA OUTRA MOEDA

  //euro para real

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 5.45097;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //euro para dolar

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 1.05935;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //euro para libra

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 0.8652;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //euro para bitcoin

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 0.00003845761874270507;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  // euro para pesos

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 369.241;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //euro para iene

  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 156.655;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //euro para euro
  if (
    currencySelectToConvert.value == "euro-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //CONVERSÕES DE LIBRA PARA OUTRA MOEDA

  //libra para real

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 6.29988;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //libra para dolar

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 1.2193;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //libra para euro

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 1.1558;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //libra para bitcoin

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 0.0000444191650041;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  //libra para peso

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 426.75;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //libra para iene

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 181.072;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //libra para libra

  if (
    currencySelectToConvert.value == "libra-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //CONVERSÕES DE BITCON PARA OUTRA MOEDA

  //bitcoin para real
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 141621.33;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //bitcoin para dolar
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 27414.33;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //bitcoin para euro
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 25990.12;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //bitcoin para libra
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 22502.3;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //bitcoin para peso
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 9592423.75;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //bitcoin para iene
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 4073948.82;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //bitcoin para bitcoin
  if (
    currencySelectToConvert.value == "bitcoin-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(result);
  }

  //CONVERSÕES DE PESO PARA OUTRA MOEDA

  //peso para real
  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 0.01476;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //peso para dolar
  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 0.00286;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //peso para euro
  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 0.00271;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //peso para libra

  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 0.00234;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //peso para bitcoin

  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 1.0417019263986304e-7;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  //peso para iene

  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 0.42427;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }

  //peso para peso

  if (
    currencySelectToConvert.value == "peso-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  // CONVERSÃO DE IENE PARA OUTRA MOEDA

  //iene para real

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "real"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 0.03479;

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(result);
  }

  //iene para dolar

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 0.00673;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(result);
  }

  //iene para euro
  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "euro"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 0.00638;

    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(result);
  }

  //iene para libra

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "libra"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 0.00552;

    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(result);
  }

  //iene para bitcoin

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 2.4539416621994706e-7;

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(result);
  }

  //iene para peso

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "peso"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 2.35723;

    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(result);
  }

  //iene para iene

  if (
    currencySelectToConvert.value == "iene-first" &&
    currencySelect.value == "iene"
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);

    const result = inputCurrency * 1;

    currencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(result);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.getElementById("currency-flag");
  const currencyValue = document.querySelector(".currency-value");

  if (currencySelect.value == "select") {
    currencyName.innerHTML = "";
    currencyImage.src = "";
    currencyValue.innerHTML = "";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/real.png";
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png";
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "BitCoin";
    currencyImage.src = "./assets/bitcoin.png";
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "peso") {
    currencyName.innerHTML = "Pesos";
    currencyImage.src = "./assets/peso.png";
    currencyValue.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);
  }

  if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene";
    currencyImage.src = "./assets/iene.png";
    currencyValue.innerHTML = new Intl.NumberFormat("jp-JA", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);
  }
  convertValues();
}

function changeCurrencyToConvert() {
  const currencyNameToConvert = document.getElementById("currency-name-to-convert");
  const currencyImageToConvert = document.getElementById("currency-image-to-convert"); 

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

  if (currencySelectToConvert.value == "select-first") {
    currencyNameToConvert.innerHTML = "";
    currencyImageToConvert.src = "";
    currencyValueToConvert.innerHTML = "";
  }

  if (currencySelectToConvert.value == "real-first") {
    currencyNameToConvert.innerHTML = "Real";
    currencyImageToConvert.src = "./assets/real.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "dolar-first") {
    currencyNameToConvert.innerHTML = "Dólar Americano";
    currencyImageToConvert.src = "./assets/dolar.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "euro-first") {
    currencyNameToConvert.innerHTML = "Euro";
    currencyImageToConvert.src = "./assets/euro.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "libra-first") {
    currencyNameToConvert.innerHTML = "Libra";
    currencyImageToConvert.src = "./assets/libra.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "bitcoin-first") {
    currencyNameToConvert.innerHTML = "BitCoin";
    currencyImageToConvert.src = "./assets/bitcoin.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "peso-first") {
    currencyNameToConvert.innerHTML = "Pesos";
    currencyImageToConvert.src = "./assets/peso.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(inputCurrency);
  }

  if (currencySelectToConvert.value == "iene-first") {
    currencyNameToConvert.innerHTML = "Iene";
    currencyImageToConvert.src = "./assets/iene.png";
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JA", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits:2,
    }).format(inputCurrency);
  }
}

currencySelect.addEventListener("change", changeCurrency);
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert);
convertButton.addEventListener("click", convertValues);