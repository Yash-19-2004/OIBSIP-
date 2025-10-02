// Buttons
document.getElementById("convertBtn").addEventListener("click", convertTemp);
document.getElementById("resetBtn").addEventListener("click", resetForm);

function convertTemp() {
  let temp = document.getElementById("temperature").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  if (temp === "" || isNaN(temp)) {
    result.innerHTML = "⚠️ Please enter a valid number!";
    return;
  }

  temp = parseFloat(temp);
  let converted = "";

  if (unit === "C") {
    converted = `${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
  } else if (unit === "F") {
    converted = `${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
  } else if (unit === "K") {
    converted = `${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
  }

  result.innerHTML = `✅ Converted: ${converted}`;
}

function resetForm() {
  document.getElementById("temperature").value = "";
  document.getElementById("unit").value = "C";
  document.getElementById("result").innerHTML = "🔍 Result will be shown here...";
}
