const primaryCurrency = document.getElementById('primary');
const secondaryCurrency = document.getElementById('secondary');
const buttonClick = document.getElementById('btn-convert');

const currencies = {
    KEN: "Kenyan Shilling",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    EUR: "Euro",
    GBP: "British Pound",
    INR: "Indian Rupee",
    JPN: "Japanese Yen",
    USD: "United States Dollar",
    ZAR: "South African Rand",
  };
  const getOptions = (data)=>{
      return Object.entries(data).map(([country, currency])=>{
          `<option value=${country}>${country}|${currency}</option>`
      }).join('');
  }

primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);

const fetchCurrencies = ()=>{
    const primary = primaryCurrency.value;
    const secondary = secondaryCurrency.value;
    const amount = document.getElementById('amount').value;

    fetch('https://v6.exchangerate-api.com/v6/9e3a324d9269f390bd8cd0ea/latest/USD'+ primary)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error("NETWORK RESPONSE ERROR")
        }
    });
    then((data)=>{
        console.log(data);
        displayCurrency(data,primary,secondary,amount);
    })
    .catch((error)=>console.error("FETCH ERROR:",error));
}

buttonClick.addEventListener('click', fetchCurrencies());


const displayCurrency = (data, primary, secondary, amount)=>{
    const calculated = amount*dataconversion_rates[secondary];
    document.getElementById('result').setAttribute('style','display:block');
    document.getElementById('txt-primary').innerText = amount + '' + primary + '='; 
    document.getElementById('txt-secondary').innerText = calculated + '' + secondary; 
}