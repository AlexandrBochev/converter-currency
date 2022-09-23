const amount = document.querySelectorAll('input');
const currency = document.querySelectorAll('option');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

amount[0].value =2


async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    currency[0].innerHTML = data[0].base_ccy;
    currency[1].innerHTML = data[0].ccy;
    currency[2].innerHTML = data[1].ccy;
    currency[3].innerHTML = data[0].base_ccy;
    currency[4].innerHTML = data[0].ccy;
    currency[5].innerHTML = data[1].ccy;
    

    amount[1].value = amount[0].value * data[0].buy;
    

  } catch (error) {
    console.log(error)
  }
}
fetchHandler()
