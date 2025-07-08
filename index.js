const checkbox = document.getElementById("checkbox");
const VisaBtn = document.getElementById("VisaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const rupay = document.getElementById("rupay");
const paypal = document.getElementById("paypal");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function(){
    if(checkbox.checked){
        subresult.textContent = "you have selected checkbox";
    }
    else{
        subresult.textContent = "you have selected no checkbox";
    }
    if(VisaBtn.checked){
        paymentresult.textContent = "you have selected visa";
    }
    else if(MasterCardBtn.checked){
        paymentresult.textContent = "you have selected mastercard";
    }
    else if(rupay.checked){
        paymentresult.textContent = "you have selected rupay";
    }
    else if(paypal.checked){
        paymentresult.textContent = " you have selected paypal";
    }
    else{
        paymentresult.textContent = "you have not selected";
    }
}
