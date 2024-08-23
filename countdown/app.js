
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  // Set the date we're counting down to
const endDate = new Date("2025-02-14T08:00:00");

// Function to update the countdown
const updateCountdown = () => {
  const now = new Date();
  const timeLeft = endDate - now;

  // Calculate days, hours, minutes, and seconds left
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the HTML elements
  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;

  // If the countdown is over, display "EXPIRED"
  if (timeLeft < 0) {
    document.querySelector('.days').textContent = '0';
    document.querySelector('.hours').textContent = '0';
    document.querySelector('.minutes').textContent = '0';
    document.querySelector('.seconds').textContent = '0';
    clearInterval(countdownInterval); // Stop the countdown
  }
};

// Initial call to set the countdown immediately
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);







