// script.js
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time_record');
const startButton = document.getElementById('start_button_onwatch');
const pauseButton = document.getElementById('pause_button_onwatch');
const continueButton = document.getElementById('continue_button_onwatch');
const resetButton = document.getElementById('reset_button_onwatch');
const historyDiv = document.getElementById('stopWatchHistory');
const initialText = document.getElementById('history_initial_text');
const clearHistoryButton = document.getElementById('clear_history_button');

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
        startButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
        resetButton.disabled = false;
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
    pauseButton.style.display = 'none';
    continueButton.style.display = 'inline-block';
}

function continueStopwatch() {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
    continueButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
    continueButton.style.display = 'none';
    resetButton.disabled = true;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;
}

function addToHistory() {
    const historyItem = document.createElement('div');
    historyItem.textContent = timeDisplay.textContent;
    historyDiv.appendChild(historyItem);
    historyDiv.style.display = 'block';
    initialText.style.display = 'none';
}

function clearHistory() {
    historyDiv.innerHTML = '';
    historyDiv.style.display = 'none';
    initialText.style.display = 'block';
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
continueButton.addEventListener('click', continueStopwatch);
resetButton.addEventListener('click', resetStopwatch);
clearHistoryButton.addEventListener('click', clearHistory);