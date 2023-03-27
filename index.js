// Select all input elements for verification
const cardName = document.querySelector("#cardname");
const cardNumber = document.querySelector("#cardnumber");
const expMonth = document.querySelector("#expmonth");
const expYear = document.querySelector("#expyear");
const cardCVC = document.querySelector("#cardcvc");
const confirm = document.querySelector("#confirm");

// Return true if the input argument is empty
const isRequired = value => value === '' ? false : true;

const isCardNameValid = (cardName) => {
    const regexCName = /^\w+\s\w+$/gm;
    return regexCName.test(cardName);
}

const isCardNumberValid = (cardNumber) => {
    const regexCNumber = /^[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}$/;
    return regexCNumber.test(cardNumber);
}

const isCardCVCValid = (cardCVC) => {
    const regexCVC = /^\d{3}$/;
    return regexCVC.test(cardCVC);
}

// Get the form field element, add error class and show the error message
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.style.fontSize = "12px";
    error.style.color = "#ff0000";
    error.textContent = message;
}

// Get the form field element, remove error class and hide the error message
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = "";
}

// checking card name validity
const checkCardName = () => {
    let valid = false;
    const nameCard = cardName.value.trim();
    if (!isRequired(nameCard)) {
        showError(cardName, "Can't be blanc.");
        cardName.style.borderColor = "red";
        cardName.placeholder = "";
    } else if (!isCardNameValid(nameCard)) {
        showError(cardName, 'Please, enter a full name.');
        cardName.style.borderColor = "red";
        cardName.placeholder = "";
    } else {
        showSuccess(cardName);        
        cardName.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking card number validity
const checkCardNumber = () => {
    let valid = false;
    const numberCard = cardNumber.value.trim();
    if (!isRequired(numberCard)) {
        showError(cardNumber, "Can't be blanc.");
        cardNumber.style.borderColor = "red";
        cardNumber.placeholder = "";
    } else if (!isCardNumberValid(numberCard)) {
        showError(cardNumber, 'Card Number must be 16 digits.');
        cardNumber.style.borderColor = "red";
        cardNumber.placeholder = "";
    } else {
        showSuccess(cardNumber);        
        cardNumber.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking expiration month validity
const checkExpMonth = () => {
    let valid = false;
    const eMonth = expMonth.value.trim();
    if (!isRequired(eMonth)) {
        showError(expMonth, "Can't be blanc.");
        expMonth.style.borderColor = "red";
        expMonth.placeholder = "";
    } else {
        showSuccess(expMonth);        
        expMonth.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking expiration year validity
const checkExpYear = () => {
    let valid = false;
    const eYear = expYear.value.trim();
    if (!isRequired(eYear)) {
        showError(expYear, "Can't be blanc.");
        expYear.style.borderColor = "red";
        expYear.placeholder = "";
    } else {
        showSuccess(expYear);        
        expYear.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

// checking card CVC validity
const checkCardCVC = () => {
    let valid = false;
    const cvcCard = cardCVC.value.trim();
    if (!isRequired(cvcCard)) {
        showError(cardCVC, "Can't be blanc.");
        cardCVC.style.borderColor = "red";
        cardCVC.placeholder = "";
    } else if (!isCardCVCValid(cvcCard)) {
        showError(cardCVC, 'invalid CVC.');
        cardCVC.style.borderColor = "red";
        cardCVC.placeholder = "";
    } else {
        showSuccess(cardCVC);        
        cardCVC.style.borderColor = "green";
        valid = true;
    }
    return valid;
};

function updateCard() {
    let nameCard = document.getElementById("namecard");
    let numCard = document.getElementById("numcard");
    let expCard = document.getElementById("expcard");
    let cvcCard = document.getElementById("cvccard");
    if (cardName.value) {
        nameCard.innerHTML = cardName.value;
    }
    if (cardNumber.value) {
        numCard.innerHTML = cardNumber.value;
    }
    if (expMonth.value && expYear.value) {
        expCard.innerHTML = expMonth.value + '/' + expYear.value;
    }
    if (cardCVC.value) {
        cvcCard.innerHTML = cardCVC.value;
    }
    return true;
}

// Prevent the form from submitting and validate fields
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isCardNameValid = checkCardName();
    let isCardNumberValid = checkCardNumber();
    let isExpMonthValid = checkExpMonth();
    let isExpYearValid = checkExpYear();
    let isCardCVCValid = checkCardCVC();

    let isCardValid = isCardNameValid && isCardNumberValid && isExpMonthValid && isExpYearValid && isCardCVCValid;

    // Submit the form if it is valid
    if (isCardValid) {
        const theForm = document.getElementById("form");
        theForm.style.display = "none";
        const cardValid = document.getElementById("confirm");
        cardValid.style.display = "block";
    }
    if (expMonth.value < 10) {
        expMonth.value = 0 + expMonth.value;
    }
    if (!isCardValid) {
        expMonth.value = "";
    }
    updateCard();
});