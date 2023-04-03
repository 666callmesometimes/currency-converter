let o1 = document.getElementById('output1');
let o2 = document.getElementById('output2');
let o3 = document.getElementById('output3');

const convertCurrency = (currency, amount) => {
    const exchangeRates = {
      rmb: { pln: 0.62, usd: 0.15, rmb: 1},
      pln: { rmb: 1.60, usd: 0.23, pln: 1},
      usd: { rmb: 6.88, pln: 4.29, usd: 1}
    };
  
    // Sprawdź, czy użytkownik wprowadził poprawną wartość waluty
    if (!(currency in exchangeRates)) {
      console.log("Niepoprawna waluta");
      return;
    }
  
    // Przelicz wartość wprowadzoną przez użytkownika na pozostałe waluty
    const convertedAmounts = {};
    for (let key in exchangeRates[currency]) {
      convertedAmounts[key] = amount * exchangeRates[currency][key];
    }
  
    // Zwróć obiekt zawierający przeliczone wartości dla pozostałych walut
    return convertedAmounts;
  };
  
  // Przykładowe wywołanie funkcji
  const inputCurrency = prompt("Select currency: rmb / pln / usd");
  const inputValue = +prompt("Set the value:");
  const convertedValues = convertCurrency(inputCurrency, inputValue);

  //console.log(inputCurrency,inputValue ,convertedValues);
  console.log('PLN: '+ convertedValues.pln);
  console.log('USD: '+ convertedValues.usd);
  console.log('RMB: '+ convertedValues.rmb);

  o1.innerHTML = 'PLN: '+ convertedValues.pln;
  o2.innerHTML = 'USD: '+ convertedValues.usd;
  o3.innerHTML = 'RMB: '+ convertedValues.rmb;