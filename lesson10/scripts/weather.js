// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/___________'(;https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial)
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=07723eae89f8687bda9ae582fd3d6585&units=imperial';

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             var data = response.json();
//             console.log(data);
//             displayResults(data);
//         } else {
//             throw Error (await response.text());
//         }
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }
// function displayResults(data) {
//     const tempt = `${data}`;
//     const iconCode = `${data}`;
//     if (tempt && iconCode) {
//         currentTemp.innerHTML = `${tempt}&deg;F`;
//     } else {
//         currentTemp.innerHTML = `${0}&deg;F`;
//     }
//     //   const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;


//     let desc = `${data}`;
//     weatherIcon.setAttribute('src', iconSrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
// }
// apiFetch();
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const main = document.querySelector('.weather1');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=07723eae89f8687bda9ae582fd3d6585&units=imperial';

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
  
async function updatePage() {
    const data = await fetchData();
    console.log(data); // Display the json object for ease of reference
    
    // Access the data after it's fetched
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const tempt = `${data.main.temp}`;
    let roundedTempt = Math.round(tempt)
    currentTemp.innerHTML = `${roundedTempt}&deg;F`;


    let desc = `${data.weather[0].description}`;
    let myDesc = capitalizedFirstLetters(desc);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${myDesc}`;


    const ul = getWeatherEvents(data);
    main.appendChild(ul);
}

function capitalizedFirstLetters(words){
    const mySentence = words.split(" ");

    for (let i = 0; i < mySentence.length; i++) {
        mySentence[i] = mySentence[i][0].toUpperCase() + mySentence[i].substr(1);
    }
    return mySentence.join(" ");
    // OR

    // mySentence.map((word) => { 
    //     return word[0].toUpperCase() + word.substring(1); 
    // }).join(" ");
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
  
updatePage();