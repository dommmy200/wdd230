const url = './/data/rental-pricing.json';

const table = document.getElementById('pricing-table');
const thead = document.createElement('thead');

async function getScootPricingData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data); // temporary testing of data retrieval
    displayPriceList(data);
}

const displayPriceList = (pricing) => {
    const tbody = document.createElement('tbody');
    pricing.forEach(item => {
        const newRow = `<tr>
            <th scope='row'>${item.rental_type}</th>
            <td>${item.max_person}</td>
            <td>${item.reservation[0].half_day}</td>
            <td>${item.reservation[1].full_day}</td>
            <td>${item.walk_in[0].half_day}</td>
            <td>${item.walk_in[1].full_day}</td>
            <td><img src="${item.image[0].src}" alt="${item.image[1].alt}"></td>
        </tr>`;
        tbody.innerHTML += newRow;
    });
    table.appendChild(tbody);
}

const caption = document.createElement('caption');
caption.textContent = 'Table 1: Vehicle Pricing';
table.appendChild(caption);


const tr1 = document.createElement('tr');
const th1 = document.createElement('th');
th1.setAttribute('colspan', '7');
th1.textContent = 'Max Rental Pricing';
tr1.appendChild(th1);

thead.appendChild(tr1);

const tr2 = document.createElement('tr');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
const thx = document.createElement('th');

th2.setAttribute('colspan', '2');
th3.setAttribute('colspan', '2');
th4.setAttribute('colspan', '2');
thx.setAttribute('colspan', '1');

th2.setAttribute('scope', 'col');
th3.setAttribute('scope', 'col');
th4.setAttribute('scope', 'col');
thx.setAttribute('scope', 'col');

th2.innerHTML = '&nbsp;';
th3.textContent = 'Reservation';
th4.textContent = 'Walk-In';
thx.innerHTML = '&nbsp;';

tr2.appendChild(th2);
tr2.appendChild(th3);
tr2.appendChild(th4);
tr2.appendChild(thx);

thead.appendChild(tr2);

const tr3 = document.createElement('tr');

const th5 = document.createElement('th');
const th6 = document.createElement('th');
const th7 = document.createElement('th');
const th8 = document.createElement('th');
const th9 = document.createElement('th');
const th10 = document.createElement('th');
const th11 = document.createElement('th');

th5.setAttribute('scope', 'col');
th6.setAttribute('scope', 'col');
th7.setAttribute('scope', 'col');
th8.setAttribute('scope', 'col');
th9.setAttribute('scope', 'col');
th10.setAttribute('scope', 'col');
th11.setAttribute('scope', 'col');

th5.textContent = 'Rental Type';
th6.textContent = 'Max. Persons';
th7.textContent = 'Half Day(3 hrs)';
th8.textContent = 'Full Day';
th9.textContent = 'Half Day(3 hrs)';
th10.textContent = 'Full Day';
th11.textContent = 'Images';

tr3.appendChild(th5);
tr3.appendChild(th6);
tr3.appendChild(th7);
tr3.appendChild(th8);
tr3.appendChild(th9);
tr3.appendChild(th10);
tr3.appendChild(th11);

thead.appendChild(tr3);
table.appendChild(thead);

getScootPricingData();
