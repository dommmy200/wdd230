const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('#wx-icon');
const captionDesc = document.querySelector('.wx-description');

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

    let tempt = `${data.main.temp}`;
    let roundedTempt = Math.round(tempt)
    currentTemp.innerHTML = `${roundedTempt}&deg;F`;

    let desc = `${data.weather[0].description}`;
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
  
updatePage();