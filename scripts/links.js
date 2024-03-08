const baseURL = "https://dommmy200.github.io/wdd230/"; // No use for this?
const linksURL = "https://dommmy200.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data); // temporary testing of data retrieval
    displayLinks(data.lessons); 
}

const displayLinks = (weeks) => {
    const section = document.querySelector('.alpha');
    const h3 = document.createElement('h3');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    h3.classList.add('sub-card1');
    h3.textContent = 'Learning Activities';
    section.appendChild(h3);

    nav.classList.add('navigation');
    ul.classList.add('nav');

    let count = 1;
    weeks.forEach(week => {
        let wks = week.links;
        const weekCount = `Week 0${count}:`;

        const li = document.createElement('li');
        const a = document.createElement('a');
        li.textContent = weekCount;
        wks.forEach(wk => {
            // const li = document.createElement('li');
            // const a = document.createElement('a');
            
            a.setAttribute('href', `${wk.url}`);
            a.innerHTML = `${wk.title}`;
            li.appendChild(a);
            const index = wks.indexOf(wk);
            if (index !== -1 && index < wks.length-1) {
                li.appendChild(createPipe());
            }
        });
        count++;
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    section.appendChild(nav);
}

function createPipe() {
    const pipe = document.createElement("span");
    pipe.textContent = "|"; // Using the pipe character
    pipe.style.fontSize = "10px"; // Adjust font size for desired height (3px)
    pipe.style.fontWeight = "bold"; // Thicken the character
    pipe.style.lineHeight = 1; // Remove extra line spacing
  
    // Add a class for easier styling later
    pipe.classList.add("pipe");
  
    return pipe;
}

getLinks();