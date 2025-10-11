var clock;

function setClockTime() {
  let date = luxon.DateTime.now().setZone("Europe/Amsterdam").toFormat("hh:mm:ss ZZZZ");

  clock.innerText = date;
}

window.onload = function() {
  clock = document.getElementById("clock");

  if (clock == null) {
    console.warn("Clock Element not found!");
  } else {
    setInterval(setClockTime, 1000);
  }
}
