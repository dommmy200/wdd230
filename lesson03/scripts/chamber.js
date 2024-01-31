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
// Create a new Image object
var image = new Image();
// Set the source (URL) of the image
image.src = '/lesson03/images/id-city.jpeg';

image.onload = function() {
    // Get the placeholder element by its ID
    var dynamicImage = document.getElementById('dynamicImage');

    // Update the src attribute of the image element with the loaded image
    // imageElement.src = image.src;
    
    // You can also set other attributes or styles if needed
    // imageElement.alt = 'Description of the image';
    // imageElement.style.width = '100%';
    // imageElement.style.height = 'auto';
    // Set the background image of the container
    dynamicImage.style.backgroundImage = 'url(' + image.src + ')';
};

// Append the image object to the body (this triggers the image loading)
// document.body.appendChild(image);

// Call the function to insert the date and icon when the page is loaded
document.addEventListener('DOMContentLoaded', insertDateAndIcon);
// Call the function to insert the date and text when the page is loaded
document.addEventListener('DOMContentLoaded', insertTextAndModifiedDate);