// Set the target date and time for the countdown
const targetDate2 = new Date("December 6, 2024 15:15:00").getTime();

// Update the countdown every second
const countdownInterval2 = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate2 - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days2").textContent = days;
  document.getElementById("hours2").textContent = hours;
  document.getElementById("minutes2").textContent = minutes;
  document.getElementById("seconds2").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval2);
    document.getElementById("timer2").innerHTML = "Countdown expired";
  }
}, 1000);