document.getElementById("calculateBtn").addEventListener("click", calculateInterest);

function calculateInterest() {
  const amount = Number(document.getElementById("amountInput").value);
  const months = Number(document.getElementById("monthsInput").value);
  const rates = [5.8, 6.5, 6.8, 7];
  let rate = 0;

  if (months < 3) {
    rate = rates[0];
  } else if (months >= 3 && months <= 6) {
    rate = rates[1];
  } else if (months >= 7 && months <= 9) {
    rate = rates[2];
  } else {
    rate = rates[3];
  }

  const interest = (amount * rate * months) / 12 / 100;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<p>Your interest rate is ${rate}%</p><p>Your interest is ${interest.toFixed(2)}</p>`;
}

// Add event listeners for "mousedown" and "mouseup" on the button
const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("mousedown", addHighlightClass);
calculateBtn.addEventListener("mouseup", removeHighlightClass);

function addHighlightClass() {
  const resultElement = document.getElementById("result");
  resultElement.classList.add("highlight");
}

function removeHighlightClass() {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("highlight");
}
