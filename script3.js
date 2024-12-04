// Set the target date and time for the countdown
const targetDate3 = new Date("December 20, 2024 15:15:00").getTime();

// Update the countdown every second
const countdownInterval3 = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate3 - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days3").textContent = days;
  document.getElementById("hours3").textContent = hours;
  document.getElementById("minutes3").textContent = minutes;
  document.getElementById("seconds3").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval3);
    document.getElementById("timer3").innerHTML = "Countdown expired";
  }
}, 1000);