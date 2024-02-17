const options = {
    weekday : 'long',
    day : 'numeric',
    month : 'long',
    year : 'numeric'
}

function getCurrentYear() {
    return new Date().getFullYear();
}
function getModifiedDate() {
    return new Date(document.lastModified).toLocaleDateString('en-US', options);
}

function insertDateAndIcon() {
    const dateContainer = document.querySelector("#copy-date");

    // Create a text node with the copyright symbol
    const copyrightSymbol = document.createTextNode(' \u00A9'); // Unicode character for the copyright symbol

    // Create a text node with the current date
    const dateTextNode = document.createTextNode(getCurrentYear());

    // Append the icon and text node to the container element
    dateContainer.appendChild(copyrightSymbol);
    dateContainer.appendChild(dateTextNode);
}

function insertTextAndModifiedDate() {
    const dateContainer = document.getElementById('lastModified');

    // Create an icon element (Font Awesome icon used as an example)
    // const iconElement = document.createElement('i');
    // iconElement.classList.add('icon', 'fas', 'fa-calendar');

    // Create a text node with Last Modified Date
    const lastModifiedDate = document.createTextNode("Last Modified Date: ");

    // Create a text node with the current date
    const dateTextNode = document.createTextNode(getModifiedDate());

    // Append the icon and text node to the container element
    dateContainer.appendChild(lastModifiedDate);
    dateContainer.appendChild(dateTextNode);
}
// Call the function to insert the date and icon when the page is loaded
document.addEventListener('DOMContentLoaded', insertDateAndIcon);
// Call the function to insert the date and text when the page is loaded
document.addEventListener('DOMContentLoaded', insertTextAndModifiedDate);

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const modeSwitch = document.getElementById('modeSwitch');
const modeText = document.getElementById('modeText');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        document.body.classList.add('dark-mode');
        modeText.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        modeText.textContent = 'Light Mode';
    }
});

const hero = document.querySelector(".hero-image")
const images = hero.querySelectorAll("picture source");

// const overlay = document.querySelector(".image-label");

images.forEach(image => {
  const parent = image.parentElement;
  const sourceLarge = parent.querySelector("source[media='(min-width: 1025px)']");
  const sourceMedium = parent.querySelector("source[media='(min-width: 768px)]");
  const sourceSmall = parent.querySelector("source[media='(max-width: 767px)']");

  // One method of media querying
  const overlay = document.createElement("p");
  overlay.className = "image-label";

  function updateLabel() {
    if (matchMedia(sourceLarge.media).matches) {
      overlay.textContent = "Large";
    } else if (matchMedia(sourceMedium.media).matches) {
      overlay.textContent = "Medium";
    } else if (matchMedia(sourceSmall.media).matches){
      overlay.textContent = "Small";
    }
  }
  // if (matchMedia(sourceSmall.media).matches) 
  // Initial update 
  updateLabel();

  // Update label on window resize
  window.addEventListener("resize", updateLabel);

  // Add label to the image container
  hero.appendChild(overlay);
});

// Another method of media querying 


// function getSelectedSourceMedia(pictureElement) {
//   // Access all child source elements
//   const sources = pictureElement.querySelectorAll("source");

//   // Iterate through each source element
//   for (const source of sources) {
//     // Check if the media query in the "media" attribute matches the current screen size
//     if (matchMedia(source.media).matches) {
//       // If it matches, return the source element
//       return {source};
//     }
//   }

//   // If no matching source is found, return null
//   return null;
// }

// const pictureElement = document.querySelector("picture");
// const selectedSource = getSelectedSourceMedia(pictureElement);
// const selectedMedia = selectedSource.media;

// if (selectedMedia == "(min-width: 1200px)") {
//   overlay.textContent = "Large";
// } else if (selectedMedia == "(max-width: 1199px)") {
//   overlay.textContent = "Medium";
// } else {
//   overlay.textContent = "Small";
// }

// updateLabel();

// // Update label on window resize
// window.addEventListener("resize", updateLabel);

// // Add label to the image container
// hero.appendChild(overlay);

// const getTemp = document.getElementById("temp-input");
// const getWind = document.getElementById("wind-input");
// const chillButton = document.getElementById("wind-chill");
// const displayResult = document.querySelector(".result");

// chillButton.addEventListener('click', () => {
//   const temperature = parseFloat(getTemp.value);
//   const windSpeed = parseFloat(getWind.value);

//   if (!isNaN(temperature) && !isNaN(windSpeed)) {
//     const windChill = computeResult(temperature, windSpeed);
//     displayResult.textContent = `Wind chill: ${windChill.toFixed(2)}°F`;
//   } else {
//     displayResult.textContent = 'Invalid Text! Please, re-enter.';
//   }
//   event.preventDefault();
// });

// function computeResult(temperature, windSpeed) {
//   return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
// }