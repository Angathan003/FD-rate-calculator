document.getElementById("calculateBtn").addEventListener("click", fdRate);

function fdRate() {
  const months = Number(document.getElementById("input").value);
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

  let result = document.getElementById("result");
  result.textContent = "Your interest rate is " + rate + "%";
}
