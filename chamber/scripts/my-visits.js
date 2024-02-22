const visitMessage = document.querySelector("#messages");
const currentTime = Date.now();
const visitHours = getHoursSinceLastVisit();

let numVisits = Number(localStorage.getItem('visitTime')) || 0;
if (numVisits !== 0) {
    if (visitHours < 24) {
        visitMessage.textContent = 'Back so soon! Awesome!';
    } else {
    const days = getDays(visitHours);
    const plural = getPlural(days);
    visitMessage.textContent = `You last visited ${Number(days)} day${plural} ago.`;
    }
} else {
    localStorage.setItem('visitTime', currentTime);
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
}

function getHoursSinceLastVisit() {
  const lastVisitTimeString = localStorage.getItem('visitTime');
  if (lastVisitTimeString) {
    try {
      const lastVisitTime = new Date(Number(lastVisitTimeString));
      const timeDifference = Date.now() - lastVisitTime.getTime();
      const hoursElapsed = Math.round(timeDifference / 3600000); //ms to hours is equivalent to 3600000
      return hoursElapsed;
    } catch (e) {
      console.error('Error retrieving or calculating hours since last visit:', e);
      return 0; // Return 0 in case of errors
    }
  } else {
    // Handle case where no last visit time is stored
    return 0;
  }
}
function getDays(hours) {
  const days = Math.round(hours / 24);
  return days
}
function getPlural(numbOfDays) {
  if (numbOfDays > 1){
    return 's';
  } else {
    return '';
  }
}