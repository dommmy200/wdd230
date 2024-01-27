function getCurrentYear() {
    return new Date().getFullYear();
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
// Call the function to insert the date and icon when the page is loaded
document.addEventListener('DOMContentLoaded', insertDateAndIcon);