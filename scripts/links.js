const baseURL = "https://dommmy200.github.io/wdd230/";
const linksURL = "https://dommmy200.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data); // temporary testing of data retrieval
    displayLinks(data.lessons); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayLinks = (weeks) => {
    const section = document.querySelector('.alpha');
    const h3 = document.createElement('h3');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    // section.classList.add('alpha card');
    h3.classList.add('sub-card1');
    h3.textContent = 'Learning Activities';
    section.appendChild(h3);

    nav.classList.add('navigation');
    ul.classList.add('nav');

    weeks.forEach(week => {
        let wks = week.links;
        wks.forEach(wk => {

            const li = document.createElement('li');
            const a = document.createElement('a');

            a.setAttribute('href', `${wk.url}`);
            a.innerHTML = `${wk.title}`;
            li.appendChild(a);
            ul.appendChild(li);
        });
    });
    nav.appendChild(ul);
    section.appendChild(nav);
}

getLinks();