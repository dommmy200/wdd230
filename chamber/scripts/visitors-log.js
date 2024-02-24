// Get references to the message element and local storage
const visitMessageElement = document.getElementById('messages');

// Function to update the visit message
function updateVisitMessage() {
  let startTime;
  let currentTimeSpent;

  // Get the start and time spent in this session
  startTime = performance.now();
  currentTimeSpent = performance.now() - startTime;

  // Start the timer on page load and stop it when the user navigates away
  window.onload = startTime;
  window.onbeforeunload = currentTimeSpent;

  // Get the stored data from local storage
  const storedData = JSON.parse(localStorage.getItem('visitData'));

  // Initialize variables if no data is found
  let totalVisits = storedData?.totalVisits || 0;
  let totalTimeSpent = storedData?.totalTimeSpent || 0;

  // Check if it's the user's first visit
  const isFirstVisit = totalVisits === 0;

  // Update visit count
  totalVisits++;
  totalTimeSpent += currentTimeSpent;

  const hoursSpent = getHours(totalTimeSpent);
  const allHoursSpent = hoursSpent < 24;

  // Update local storage with the new data
  const newData = {
    totalVisits,
    totalTimeSpent
  };
  localStorage.setItem('visitData', JSON.stringify(newData));

  const days = getDays(hoursSpent);
  const plural = getPlural(days);

  // Create the message based on the visit details
  let message = '';
  if (isFirstVisit) {
    message = 'Welcome! Let us know if you have any questions.';
  } else if (allHoursSpent) {
    message = `Back so soon! Awesome!`;
  } else {
    message = `You last visited ${days} day${plural} ago.`;
  }

  // Display the message
  visitMessageElement.textContent = message;
}
// Function to convert milliseconds to hours
function getHours(totalTimeSpent) {
  const hours = Math.round(Number(totalTimeSpent) / 3600000);
  return hours;
}
// Function to hours to days
function getDays(hours) {
  const days = Math.round(Number(hours) / 24);
  return days
}
// Function to determine common singular or plural
function getPlural(numbOfDays) {
  if (numbOfDays > 1){
    return 's';
  } else {
    return '';
  }
}
// Call the function to update the message on page load
updateVisitMessage();