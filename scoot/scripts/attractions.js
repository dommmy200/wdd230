const attractions = "..//scoot/data/attraction.json";
const container = document.querySelector('#cozumel');

async function getLinks() {
    const response = await fetch(attractions);
    const data = await response.json();
    
    console.log(data);
    // console.table(data);
    displayAttractionPix(data);
}

const displayAttractionPix = (aList) => {
    aList.forEach(element => {
        
        console.log(element.images);
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const textOverlay = document.createElement("div");
        textOverlay.classList.add("text-overlay");

        const para = document.createElement("p");

        const serialNumber = `${element.number}`;
        const title = `${element.title}`;
        const alternate = `${element.alternate}`;
        const source = `${element.images}`;

        para.textContent = serialNumber;
        textOverlay.textContent = title;

        const image = document.createElement("img");
        image.setAttribute("src", source);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "180");
        image.setAttribute("height", "180");
        image.setAttribute("alt", alternate)

        imageContainer.appendChild(image);
        imageContainer.appendChild(textOverlay);
        imageContainer.appendChild(para);

        container.append(imageContainer);
    });
}

getLinks();