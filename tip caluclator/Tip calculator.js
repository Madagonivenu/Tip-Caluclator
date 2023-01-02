let billElement = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let errorMessage = document.getElementById("errorMessage");
let a = document.getElementById("tipAmount");
let b = document.getElementById("totalAmount");

function calculateButton() {
    let amounts = billElement.value;
    let percents = percentage.value;
    if (amounts == "") {
        errorMessage.textContent = "please enter a valid Input";
    } else if (percents == "") {
        errorMessage.textContent = "please enter a valid Input";

    } else {
        amounts = parseInt(billElement.value);
        percents = parseInt(percentage.value);
        let tipAmounts = (percents / 100) * amounts;
        let totalAmounts = amounts + tipAmounts;
        a.value = tipAmounts;
        b.value = totalAmounts;
        errorMessage.textContent = "";


    }
}