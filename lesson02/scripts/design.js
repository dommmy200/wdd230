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
    const copyrightAndYear = document.querySelector(".copy");

    // Create a text node with the copyright symbol
    const copyrightSymbol = document.createTextNode(' \u00A9');

    // Create a text node with the current date
    const dateTextNode = document.createTextNode(getCurrentYear());

    // Append the icon and text node to the container element
    copyrightAndYear.appendChild(copyrightSymbol);
    copyrightAndYear.appendChild(dateTextNode);
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