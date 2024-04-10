const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const main = document.querySelector('.weather1');
const forecastTemp = document.querySelector('#forecast');
const forecastTime = document.querySelector('#threePM');

const forecastWxUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.47&lon=-86.91&appid=07723eae89f8687bda9ae582fd3d6585&units=imperial';

async function fetchForeCast() {
    const response = await fetch(forecastWxUrl);
    const data = await response.json();
    return data;
}
async function updatePage() {
    const wxForecast = await fetchForeCast();
    
    // Access the data after it's fetched
    const iconSrc = `https://openweathermap.org/img/w/${wxForecast.list[0].weather[0].icon}.png`;

    const maxTemp = `${wxForecast.list[0].main.temp_max}`;
    const tempt = `${wxForecast.list[0].main.temp}`;
    const humidity = `${wxForecast.list[0].main.humidity}`;
    let roundedTempt = Math.round(tempt)
    currentTemp.innerHTML = `${roundedTempt}&deg;F`;
    currentHumidity.innerHTML = `${humidity}&deg;F`;
    
    let desc = `${wxForecast.list[0].weather[0].description}`;
    let myDesc = capitalizedFirstLetters(desc);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${myDesc}`;
}

function capitalizedFirstLetters(words){
    const mySentence = words.split(" ");

    for (let i = 0; i < mySentence.length; i++) {
        mySentence[i] = mySentence[i][0].toUpperCase() + mySentence[i].substr(1);
    }
    return mySentence.join(" ");
}

function users() {
    const closableContainer = document.querySelector('.highest-temp');
    const p1 = document.createElement('p');
    p1.classList.add('temp-max1');

    const p2 = document.createElement('p');
    p2.classList.add('temp-max2');

    p1.textContent = 'CLICK HERE FOR';
    p2.textContent = 'MAX TEMP';
    closableContainer.appendChild(p1);
    closableContainer.appendChild(p2);

    const foreC = maxForecast();
    
    closableContainer.addEventListener('click', function() {
        p1.classList.toggle('hidden');
        p2.classList.toggle('hidden');
        if (!p1.classList.contains('hidden')) {
            p1.textContent = 'CLICK TO HIDE';
            foreC.then(result => {
                p2.innerHTML = result;
            });
            closableContainer.appendChild(p1);
            closableContainer.appendChild(p2);

        } else {
            p1.textContent = 'CLICK HERE FOR';
            p2.textContent = 'MAX TEMP';
            closableContainer.appendChild(p1);
            closableContainer.appendChild(p2);
        }
    });
}
async function maxForecast() {
    const wxForecast = await fetchForeCast();
    const forecast = `${wxForecast.list[0].main.temp_max}`;
    let roundedTempt = Math.round(forecast);
    return `${roundedTempt}&deg;F`;
}

// Function to fetch weather data
function getWeatherData() {

    fetch(forecastWxUrl)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
        const tomorrowForecast14 = findForecastForTime(data.list, 14); // Find forecast for 14:00 (2pm) tomorrow
        const tomorrowForecast15 = findForecastForTime(data.list, 15); // Find forecast for 15:00 (3pm) tomorrow
        const tomorrowForecast16 = findForecastForTime(data.list, 16); // Find forecast for 16:00 (4pm) tomorrow

        if (tomorrowForecast15) {
            const temp = tomorrowForecast15.main.temp;
            document.getElementById('forecast15').textContent = `Tomorrow's forecast temperature for 3pm is: ${temp}°C`;
        } else {
            document.getElementById('forecast15').textContent = "Tomorrow's forecast temperature for 3pm was not found.";
        }
        if (tomorrowForecast14) {
            const temp = tomorrowForecast14.main.temp;
            document.getElementById('forecast14').textContent = `Tomorrow's forecast temperature for 2pm is: ${temp}°C`;
        } else {
            document.getElementById('forecast14').textContent = "Tomorrow's forecast temperature for 2pm was not found.";
        }
        if (tomorrowForecast16) {
            const temp = tomorrowForecast16.main.temp;
            document.getElementById('forecast16').textContent = `Tomorrow's forecast temperature for 4pm is: ${temp}°C`;
        } else {
            document.getElementById('forecast116').textContent = "Tomorrow's forecast temperature for 4pm was not found.";
        }
    })
    .catch(error => console.error("Error fetching weather data:", error));
}

// Function to find forecast for a specific time (hour of the day)
function findForecastForTime(forecasts, targetHour) {
  for (const forecast of forecasts) {
    const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to Date object
    
    // Check if forecast is for tomorrow and at the target hour
    if (forecastDate.getDate() === new Date().getDate() + 1 && forecastDate.getHours() === targetHour) {
      return forecast;
    }
  }
  
  return null; // No matching forecast found
}

updatePage();
users();
getWeatherData()