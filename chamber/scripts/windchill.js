// Wind Chill Computation
const getTemp = document.getElementById("temp-input");
const getWind = document.getElementById("wind-input");
const chillButton = document.getElementById("wind-chill");
const displayResult = document.querySelector(".result");

chillButton.addEventListener('click', (event) => {
  const temperature = parseFloat(getTemp.value);
  const windSpeed = parseFloat(getWind.value);

  if (!isNaN(temperature) && !isNaN(windSpeed)) {
    const windChill = computeResult(temperature, windSpeed);
    displayResult.textContent = `Wind chill: ${windChill.toFixed(2)}°F`;
  } else {
    displayResult.textContent = 'Invalid Text! Please, re-enter.';
  }
  event.preventDefault();
});

function computeResult(temperature, windSpeed) {
  return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

// Program for clear button
const result = document.querySelector(".result-wrap");
const para = document.createElement("p");
para.className = "clear-button";
para.textContent = "Clear Result!"
result.appendChild(para);

para.addEventListener("click", () => {
    const clear = document.querySelector(".result");
    clear.textContent = "";
});