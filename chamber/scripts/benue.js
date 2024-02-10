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

// Learn from this one when necessary

// function toggleMenu() {
//     var menu = document.querySelector('.menu');
//     menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
// }

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// const modeButton = document.querySelector("#mode");
// const main = document.querySelector("#black-body");
// const headerBg = document.querySelector(".bottom-header");
// const footerBg = document.querySelector("#page-foot");
// const companyName = document.querySelector(".company-name");
// // const joinUs = document.querySelector("#nav-section h2, li a");
// const navBg = document.querySelector("#nav-section");
// const shadow = document.querySelector("img.full-bleed");

// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("🔆")) {
// 		main.style.background = "#000";
// 		main.style.color = "#fff";
//         headerBg.style.background = "#825b58";
//         footerBg.style.background =  "#825b58";
//         footerBg.style.color = "#000";
//         companyName.style.color = "#000";
//         navBg.style.background = "#000";
//         navBg.style.color = "#fff";
//         shadow.style.boxShadow = "5px 5px 13px rgb(93, 94, 94)";
// 		modeButton.textContent = "🕶️";
// 	} else {
// 		main.style.background = "#eee";
// 		main.style.color = "#000";
//         headerBg.style.background = "#5d0f09";
//         footerBg.style.background =  "#000";
//         companyName.style.color = "#fff";
//         footerBg.style.color = "#fff";
//         navBg.style.color = "#000";
//         navBg.style.background = "#fff";
//         shadow.style.boxShadow = "5px 5px 7px rgb(179, 71, 32)";
// 		modeButton.textContent = "🔆";
// 	}
// });
// const lightAndDark = document.querySelector(".switch");
// let isToggled = false;
// lightAndDark.addEventListener('click', () => {
//   isToggled = !isToggled;
//   this.classList.toggle('active');
//   // You may also want to trigger other actions based on the value of isToggled
//     main.style.background = "#000";
//     main.style.color = "#fff";
//     headerBg.style.background = "#825b58";
//     footerBg.style.background =  "#825b58";
//     footerBg.style.color = "#000";
//     companyName.style.color = "#000";
//     navBg.style.background = "#000";
//     navBg.style.color = "#fff";
//     shadow.style.boxShadow = "5px 5px 13px rgb(93, 94, 94)";
//     modeButton.textContent = "🕶️";
// });



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