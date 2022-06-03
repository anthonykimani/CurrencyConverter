
//allow one to enter number to input-bar

//allow user to select current currency
const currencyObject = {
    "US Dollar":"100",
    "KE Shilling":"150",
    "TZ Shilling":"400",
    "UG Shilling":"1200",
    "SA Rand":"110",
    "NG Naira":"300",
}

const currentCurrency = document.getElementById('primary');
currentCurrency.innerHTML = currentCurrencySelector(currencyObject);

function currentCurrencySelector(data){
    
    const selectOptions = Object.keys(data).map((currency)=>`<option value=${currency}>${currency}</option>`).join("");
    console.log(selectOptions);
    return selectOptions;
}

//allow user to select new currency
//allow user to convert the currency using the convert button
//displays to  the currency to the user