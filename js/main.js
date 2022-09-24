const select = document.querySelectorAll('select');
const amount = document.querySelectorAll('input');
const currency = document.querySelectorAll('option');
const currencyValue = document.querySelectorAll('p')
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const rates = {}

getCurrency();

async function getCurrency() {
  const response = await fetch(url);
  const data = await response.json();
  const result = await data;
    
  rates.USD = Number(result[0].buy);
  rates.EUR = Number(result[1].buy);
  rates.USDEUR = Number((result[0].buy) / (result[1].buy));
  rates.EURUSD = Number((result[1].buy) / (result[0].buy));

  currencyValue[0].innerHTML = `USD: ${rates.USD.toFixed(2)}`;
  currencyValue[1].innerHTML = `EUR: ${rates.EUR.toFixed(2)}`;
}

amount[0].oninput = function() {
  if (select[0].value === 'UAH' && select[1].value === 'UAH') {
    amount[1].value = amount[0].value;
  }
  if (select[0].value === 'UAH' && select[1].value === 'USD') {
    amount[1].value = (amount[0].value / rates.USD).toFixed(2);
  }
  if (select[0].value === 'UAH' && select[1].value === 'EUR') {
    amount[1].value = (amount[0].value / rates.EUR).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'UAH') {
    amount[1].value = (amount[0].value * rates.USD).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'USD') {
    amount[1].value = amount[0].value;
  }
  if (select[0].value === 'USD' && select[1].value === 'EUR') {
    amount[1].value = (amount[0].value * rates.USDEUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'UAH') {
    amount[1].value = (amount[0].value * rates.EUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'EUR') {
    amount[1].value = amount[0].value;
  }
  if (select[0].value === 'EUR' && select[1].value === 'USD') {
    amount[1].value = (amount[0].value * rates.EURUSD).toFixed(2);
  }
}

