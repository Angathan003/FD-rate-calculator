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

  let result = document.getElementById("result");
  result.innerHTML = `<p>Your interest rate is ${rate}%</p><p>Your interest is ${interest.toFixed(2)}</p>`;
}
