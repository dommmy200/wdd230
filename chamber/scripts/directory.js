const membersURL = "..//chamber/data/members.json";

const section = document.querySelector(".directory-section");

const article = document.createElement("article");
article.classList.add("directory-grid");

const hr = document.createElement("hr");

const div = document.createElement("div");
div.classList.add("first-child")
const button1 = document.createElement("button");
const button2 = document.createElement("button");
button1.setAttribute("id", "directory-grid");
button2.setAttribute("id", "directory-list");
button1.textContent = "⏹️Grid";
button2.textContent = "📄List";

div.appendChild(button1);
div.appendChild(button2);

async function getLinks() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayCoyMembership(data.members); 
}

const displayCoyMembership = (members) => {
    section.appendChild(div);
    section.appendChild(hr);
    
    members.forEach(member => {
        const section2 = document.createElement("section");
        const h2 = document.createElement("h2");

        const image = document.createElement("img");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.classList.add("phone");
        p2.classList.add("category");
        p3.classList.add("address");

        const anchor = document.createElement("a");
        
        h2.textContent = `${member.name}`;
        image.setAttribute("src", `${member.images}`);
        image.setAttribute("alt", `${member.alternate}`);
        
        p1.textContent = `Phone: ${member.phone}`;
        p2.textContent = `Category: ${member.category}`;
        p3.textContent = `Address: ${member.address}`;

        anchor.setAttribute("href", `${member.url}`);
        anchor.setAttribute("target", "_blank");
        anchor.textContent = "Company Link";

        section2.appendChild(h2);
        section2.appendChild(p3);
        section2.appendChild(image);
        section2.appendChild(p1);
        section2.appendChild(p2);
        section2.appendChild(anchor);

        article.appendChild(section2);
    });
    section.appendChild(article);
}

button1.addEventListener("click", showGrid);
button2.addEventListener("click", showList);

function showList() {
    article.classList.add("directory-list");
    article.classList.remove("directory-grid");
}
function showGrid() {
    article.classList.add("directory-grid");
    article.classList.remove("directory-list");
}

getLinks();