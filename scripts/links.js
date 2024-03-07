const baseURL = "https://dommmy200.github.io/wdd230/";
const linksURL = "https://dommmy200.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // temporary testing of data retrieval
    // displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getLinks();