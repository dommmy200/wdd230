// const submitTime = document.getElementById('submit-time');
const submitDate = document.getElementById('submit-date');

// const form = document.querySelector('#join-form');

const dateTime = new Date();

const currentDate = dateTime.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'});
// const currentTime = dateTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second:'2-digit'});

submitDate.value = currentDate;

// form.addEventListener('submit', () => {
//     // submitTime.value = currentTime;
//     submitDate.value = currentDate;
// });