// Input elements
const billInput = document.getElementById("bill");
const tipBtn5 = document.getElementById("5");
const tipBtn10 = document.getElementById("10");
const tipBtn15 = document.getElementById("15");
const tipBtn25 = document.getElementById("25");
const tipBtn50 = document.getElementById("50");
const tipBtnCustom = document.getElementById("custom");
const tipBtns = document.querySelectorAll(".tip-amounts__button");
const numPeopleInput = document.getElementById("number-of-people");
const resetBtn = document.getElementById("reset");

// Display elements
const errorMessage = document.querySelector(".error-message");
const tipPerPersonDisplay = document.getElementById("tip-amount-per-person");
const totalPerPersonDisplay = document.getElementById("total-per-person");

// Running totals
let billAmt = 0;
let tipRate = 0;
let tipAmt = 0;
let numPeople = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

// Set bill amount
billInput.onkeyup = (event) => {
  billAmt = parseInt(event.target.value);
  resetBtn.disabled = false;
  if (tipRate && numPeople) calculate();
};

// Set tip amount
tipBtn5.addEventListener("click", setTipRate);
tipBtn10.addEventListener("click", setTipRate);
tipBtn15.addEventListener("click", setTipRate);
tipBtn25.addEventListener("click", setTipRate);
tipBtn50.addEventListener("click", setTipRate);
tipBtnCustom.addEventListener("click", setTipRate);

function setTipRate(event) {
  tipBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.toggle("active");
  tipRate = parseInt(event.target.id);
  resetBtn.disabled = false;
  if (billAmt && numPeople) calculate();
}

tipBtnCustom.onkeyup = (event) => {
  tipRate = Number(event.target.value);
  if (billAmt && numPeople) calculate();
};

// Set number of people
numPeopleInput.onkeydown = (event) => {
  return event.keyCode !== 190; // Disable decimal input
};

numPeopleInput.onkeyup = (event) => {
  numPeopleInput.value = parseInt(numPeopleInput.value) || 0;

  // Validate
  if (numPeopleInput.value === "0") {
    errorMessage.innerHTML = "Can't be zero";
    numPeopleInput.classList.add("has-error");
  } else {
    errorMessage.innerHTML = "";
    numPeopleInput.classList.remove("has-error");
  }

  numPeople = event.target.value;
  resetBtn.disabled = false;
  if (billAmt && tipRate) calculate();
};

// Calculate
function calculate() {
  tipAmt = billAmt * (tipRate / 100);
  tipPerPerson = tipAmt / numPeople;
  totalPerPerson = (billAmt + tipAmt) / numPeople;
  setDisplay();
}

// Update display
function setDisplay() {
  if ((isFinite(tipAmt) || isFinite(totalPerPerson)) && numPeople >= 1) {
    tipPerPersonDisplay.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalPerPersonDisplay.innerHTML = "$" + totalPerPerson.toFixed(2);
  } else {
    tipPerPersonDisplay.innerHTML = "$0.00";
    totalPerPersonDisplay.innerHTML = "$0.00";
  }
}

// Enable reset button
resetBtn.addEventListener("click", () => {
  reset();
});

function reset() {
  billAmt = 0;
  tipRate = 0;
  tipAmt = 0;
  numPeople = 0;
  tipPerPerson = 0;
  totalPerPerson = 0;
  billInput.value = 0;
  numPeopleInput.value = 0;
  tipBtnCustom.value = null;
  tipPerPersonDisplay.innerHTML = "$0.00";
  totalPerPersonDisplay.innerHTML = "$0.00";
  resetBtn.disabled = true;
  tipBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
}
