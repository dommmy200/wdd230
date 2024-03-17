const chamberWeather = document.querySelector('.weather');

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=6.89&lon=8.38&appid=07723eae89f8687bda9ae582fd3d6585&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.89&lon=8.38&appid=07723eae89f8687bda9ae582fd3d6585&units=imperial';

async function fetchCurrentData() {
    const responseCurrent = await fetch(currentUrl);

    var currentData = await responseCurrent.json();
    return currentData;
}

async function fetchForecastData() {
    const responseForecast = await fetch(forecastUrl);

    var forecastData = await responseForecast.json();
    return forecastData;
}
  
async function updateCurrentWx() {
    const data = await fetchCurrentData();
    console.log(data); // Display the json object for ease of reference
    
    // Access the data after it's fetched
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const currentWx = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Today's Weather";
    h1.setAttribute('class', 'currentH1');
    currentWx.appendChild(h1);

    const wxIcon = document.createElement('img');
    let desc = `${data.weather[0].description}`;
    wxIcon.setAttribute('src', iconSrc);
    wxIcon.setAttribute('alt', desc);
    wxIcon.style.height = '50px';
    wxIcon.style.width = '50px';
    wxIcon.style.border = 0
    currentWx.appendChild(wxIcon);

    const span1 = document.createElement('span');
    const tempt = `${data.main.temp}`;
    let roundedTempt = Math.round(tempt)
    span1.innerHTML = `  ${roundedTempt}&deg;F `;
    span1.style.color = 'red';
    currentWx.appendChild(span1); 

    const span2 = document.createElement('span');
    let myDesc = capitalizedFirstLetters(desc);
    span2.textContent = `${myDesc}`;
    currentWx.appendChild(span2);

    chamberWeather.appendChild(currentWx);
}

function getWeatherEvents(data) {
    const weather = data.weather;
    const ul = document.createElement('ul');

    weather.forEach(wx => {
        const li = document.createElement('li');
        li.textContent = wx;
    })
    ul.appendChild(li);
    return ul;
}

async function updateForecastWx() {
    const data = await fetchForecastData();
    console.log(data); // Display the json object for ease of reference
    const today = new Date();

    const forecastWx = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "3 Days Temperature Forecast";
    h1.setAttribute('class', 'forecastH1');
    forecastWx.appendChild(h1);

    for (let i = 0; i < data.list.length; i++) {
        var timestamp = data.list[i].dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object

        const ul = document.createElement('ul');

        // Iterate for 3 days
        if (date.getDate() === today.getDate() + 1 || date.getDate() === today.getDate() + 2 || date.getDate() === today.getDate() + 3) {

            const temp = data.list[i].main.temp;
            let roundedTempt = Math.round(temp)

            const dateTime = data.list[i].dt_txt;
            const date = dateTime.substring(0, 10);
            const time = dateTime.slice(11);

            var para  = document.createElement('span');
            para.textContent = date;

            const spanTime = document.createElement('span');
            spanTime.textContent = ` - ${time}`;

            const spanTemp = document.createElement('span');
            spanTemp.innerHTML = `  ${roundedTempt}&deg;F`;
            spanTemp.style.color = 'red';

            const li = document.createElement('li');
            li.setAttribute('class', 'wx-ul');
            
            li.append(para);
            li.appendChild(spanTime);
            li.appendChild(spanTemp);

            ul.appendChild(li);
        }
    forecastWx.appendChild(ul);
    chamberWeather.appendChild(forecastWx);
    }
}

function capitalizedFirstLetters(words){
    const mySentence = words.split(" ");

    for (let i = 0; i < mySentence.length; i++) {
        mySentence[i] = mySentence[i][0].toUpperCase() + mySentence[i].substr(1);
    }
    return mySentence.join(" ");
}

function enableUser() {
    const userEnable = document.querySelector('.userEnabled');
    
    const div = document.createElement('div');
    div.setAttribute('id', 'banner');
    div.innerHTML = `All members are hereby invited for Meet and Greet <span>Wednesdays by 7pm</span>`;

    const button = document.createElement('button');
    button.setAttribute('id', 'close-btn');
    button.textContent = 'Close';

    button.addEventListener('click', function() {
        div.style.display = 'none';
    });

    div.appendChild(button);
    userEnable.appendChild(div);
}
function showBanner() {
    const banner = document.querySelector('#banner');
    const timestamp = new Date();
    let dayNumber = timestamp.getDay();
    if (dayNumber < 1 && dayNumber < 3) {
        banner.style.display = none;
    }
}
//showBanner();
enableUser();
updateCurrentWx();
updateForecastWx();