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
    const dateContainer = document.querySelector(".copyright-logo");

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

// 'DOMContentLoaded': This is the type of the event being listened for. 
// The 'DOMContentLoaded' event is fired when the initial HTML document has 
// been completely loaded and parsed.

// Call the function to insert the date and text when the page is loaded
document.addEventListener('DOMContentLoaded', insertTextAndModifiedDate);
// Call the function to insert the date and icon when the page is loaded
document.addEventListener('DOMContentLoaded', insertDateAndIcon);

const mainnav = document.querySelector('.topnav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const visitsDisplay = document.querySelector('.visits');
const span = document.querySelector('span');
const txtNode = document.createTextNode('Page visits: ');
let numVisits = Number(window.localStorage.getItem('numbVisits-ls')) || 0;
if (numVisits !== 0) {
    span.textContent = numVisits;
} else {
    span.textContent = `This is your first visit. 🥳 Welcome!`;
}
visitsDisplay.appendChild(txtNode);
visitsDisplay.appendChild(span);
numVisits++;
localStorage.setItem('numbVisits-ls', numVisits);