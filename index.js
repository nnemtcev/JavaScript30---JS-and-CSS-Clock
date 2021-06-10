// Helper function to update the position of the second hand
function updateSecondHandPosition() {
  const secondHand = document.querySelector(".second-hand");
  const currentNumberOfSeconds = new Date().getSeconds();
  const currentNumberOfSecondsToDegrees = currentNumberOfSeconds * 6;

  secondHand.style = `transform: rotate(${
    90 + currentNumberOfSecondsToDegrees
  }deg)`;
}

// Helper function to update the position of the minute hand
function updateMinuteHandPosition() {
  const minuteHand = document.querySelector(".min-hand");
  const currentNumberOfMinutes = new Date().getMinutes();
  const currentNumberOfMinutesToDegrees = currentNumberOfMinutes * 6;

  minuteHand.style = `transform: rotate(${
    90 + currentNumberOfMinutesToDegrees
  }deg)`;
}

// Helper function to update the position of the hour hand
function updateHourHandPosition() {
  const hourHand = document.querySelector(".hour-hand");
  const currentNumberOfHours = new Date().getHours();
  const currentNumberOfHoursToDegrees = currentNumberOfHours * 30;

  hourHand.style = `transform: rotate(${
    90 + currentNumberOfHoursToDegrees
  }deg)`;
}

function updatePositionsOfClockHands() {
  // Set initial positions of second, minute, and hour hands
  updateSecondHandPosition();
  updateMinuteHandPosition();
  updateHourHandPosition();

  // Update the positions of the second, minute, and hour hands every second
  setInterval(function () {
    updateSecondHandPosition();
    updateMinuteHandPosition();
    updateHourHandPosition();
  }, 1000);
}

updatePositionsOfClockHands();
