var exchangeForm = document.querySelector(".exchangeForm");
exchangeForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    var amount = elements[0].value;
    var currency = elements[1].value;
    if(currency == "dollar"){
        amount = amount / 3.7;
    }else if(currency == "dinar"){
        amount = amount / 5.3;
    }else{
        amount = amount;
    }
    document.querySelector(".result").innerHTML = amount;
}