let clock;

// Getting clock by ID
window.onload = function() {
  clock = document.getElementById("clock");
}

// Returning if clock is null
function setLocalTime() {
  if (clock == null) { return; }

  // Setting clock time
  let currentTime = luxon.DateTime.now().setZone("Europe/Amsterdam").toFormat("hh:mm:ss ZZZZ");
  clock.innerText = currentTime;
}

// Setting update loop
setInterval(setLocalTime, 1000);
