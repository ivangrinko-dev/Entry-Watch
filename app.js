const clock = document.getElementById(`clock`);

function hexoClock(clock_) {
  let date = new Date();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();

  if (hours.length < 2) {
    hours = `0` + hours;
  }
  if (minutes.length < 2) {
    minutes = `0` + minutes;
  }
  if (seconds.length < 2) {
    seconds = `0` + seconds;
  }

  let clockString = hours + `:` + minutes + `:` + seconds;
  clock.textContent = clockString;
}
hexoClock(clock);
setInterval(hexoClock, 1000);
