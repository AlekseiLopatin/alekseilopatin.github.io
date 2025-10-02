let stopwatchInterval;
let startTime;
let elapsedTime = 0;

// Stopwatch Functions
function updateStopwatchDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const ms = Math.floor((time % 1000) / 10);
  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  document.getElementById("time_record").textContent =
  `${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}.${String(ms).padStart(2,'0')}`;
}

function stopWatchStart() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
  document.getElementById("start_button_onwatch").style.display = "none";
  document.getElementById("pause_button_onwatch").style.display = "inline-block";
  document.getElementById("reset_button_onwatch").disabled = false;
}

function stopWatchPause() {
  clearInterval(stopwatchInterval);
  elapsedTime += Date.now() - startTime;
  document.getElementById("pause_button_onwatch").style.display = "none";
  document.getElementById("continue_button_onwatch").style.display = "inline-block";
}

function stopWatchContinue() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
  document.getElementById("continue_button_onwatch").style.display = "none";
  document.getElementById("pause_button_onwatch").style.display = "inline-block";
}

function stopWatchStop() {
  clearInterval(stopwatchInterval);
  addToHistory(document.getElementById("time_record").textContent);
  elapsedTime = 0;
  document.getElementById("time_record").textContent = "00 : 00 : 00.00";
  document.getElementById("start_button_onwatch").style.display = "inline-block";
  document.getElementById("pause_button_onwatch").style.display = "none";
  document.getElementById("continue_button_onwatch").style.display = "none";
  document.getElementById("reset_button_onwatch").disabled = true;
}

function addToHistory(record) {
  const li = document.createElement("li");
  li.textContent = record;
  document.getElementById("stopwatch-history").appendChild(li);
}

// Timer Functions
let timerInterval;
let timerTime = 15 * 60 * 1000; // default 15 minutes
let remainingTime = timerTime;
let timerRunning = false;

function updateTimerDisplay() {
  const ms = Math.floor((remainingTime % 1000) / 10);
  const totalSeconds = Math.floor(remainingTime / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  document.getElementById("timer_record").textContent =
  `${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}.${String(ms).padStart(2,'0')}`;
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  const endTime = Date.now() + remainingTime;

  timerInterval = setInterval(() => {
    remainingTime = endTime - Date.now();
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      remainingTime = 0;
      alert("Time’s up!");
    }
    updateTimerDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  remainingTime = timerTime;
  updateTimerDisplay();
}

function setTimer(minutes) {
  timerTime = minutes * 60 * 1000;
  remainingTime = timerTime;
  updateTimerDisplay();
}

function setCustomTimer() {
  const minutes = document.getElementById("customTimer").value;
  if (minutes > 0) {
    setTimer(minutes);
  }
}

// Mode Switch
document.getElementById("switchModeBtn").addEventListener("click", () => {
  const stopwatch = document.getElementById("stopwatch-display");
  const timer = document.getElementById("timer-display");
  if (stopwatch.style.display !== "none") {
    stopwatch.style.display = "none";
    timer.style.display = "block";
    document.getElementById("switchModeBtn").textContent = "Switch to Stopwatch";
    updateTimerDisplay();
  } else {
    stopwatch.style.display = "block";
    timer.style.display = "none";
    document.getElementById("switchModeBtn").textContent = "Switch to Timer";
  }
});


