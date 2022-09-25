const order = document.querySelector('.order');
const select = document.querySelectorAll('select');
const amount = document.querySelectorAll('input');
const currency = document.querySelectorAll('option');
const currencyValue = document.querySelectorAll('p')
const reset = document.querySelector('.btn');
const revers = document.querySelector('.revers');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const rates = {}

reset.addEventListener('click', () => {
  amount[0].value = '';
  amount[1].value = '';
  select[0].value = 'UAH';
  select[1].value = 'USD';
});

revers.addEventListener('click', () => {
  let tempCode = select[0].value;
  select[0].value = select[1].value;
  select[1].value = tempCode;

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
});

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

select[0].oninput = function() {
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

amount[1].oninput = function() {
  if (select[0].value === 'UAH' && select[1].value === 'UAH') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'UAH' && select[1].value === 'USD') {
    amount[0].value = (amount[1].value * rates.USD).toFixed(2);
  }
  if (select[0].value === 'UAH' && select[1].value === 'EUR') {
    amount[0].value = (amount[1].value * rates.EUR).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'UAH') {
    amount[0].value = (amount[1].value / rates.USD).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'USD') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'USD' && select[1].value === 'EUR') {
    amount[0].value = (amount[1].value / rates.USDEUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'UAH') {
    amount[0].value = (amount[1].value / rates.EUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'EUR') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'EUR' && select[1].value === 'USD') {
    amount[0].value = (amount[1].value / rates.EURUSD).toFixed(2);
  }
}

select[1].oninput = function() {
  if (select[0].value === 'UAH' && select[1].value === 'UAH') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'UAH' && select[1].value === 'USD') {
    amount[0].value = (amount[1].value * rates.USD).toFixed(2);
  }
  if (select[0].value === 'UAH' && select[1].value === 'EUR') {
    amount[0].value = (amount[1].value * rates.EUR).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'UAH') {
    amount[0].value = (amount[1].value / rates.USD).toFixed(2);
  }
  if (select[0].value === 'USD' && select[1].value === 'USD') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'USD' && select[1].value === 'EUR') {
    amount[0].value = (amount[1].value / rates.USDEUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'UAH') {
    amount[0].value = (amount[1].value / rates.EUR).toFixed(2);
  }
  if (select[0].value === 'EUR' && select[1].value === 'EUR') {
    amount[0].value = amount[1].value;
  }
  if (select[0].value === 'EUR' && select[1].value === 'USD') {
    amount[0].value = (amount[1].value / rates.EURUSD).toFixed(2);
  }
}