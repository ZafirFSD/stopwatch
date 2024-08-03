let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let minute = 0;
let second = 0;
let millisecond = 0;
let timer;

startButton.addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(stopWatch, 10);
        document.getElementById('minutes').classList.remove('blinking');
        document.getElementById('seconds').classList.remove('blinking');
        document.getElementById('milliseconds').classList.remove('blinking');
    }
});

stopButton.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    document.getElementById('minutes').classList.add('blinking');
    document.getElementById('seconds').classList.add('blinking');
    document.getElementById('milliseconds').classList.add('blinking');
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    minute = 0;
    second = 0;
    millisecond = 0;
    updateDisplay();
    document.getElementById('minutes').classList.remove('blinking');
    document.getElementById('seconds').classList.remove('blinking');
    document.getElementById('milliseconds').classList.remove('blinking');
});

function stopWatch() {
    millisecond += 10;

    if (millisecond >= 1000) {
        second++;
        millisecond = 0;
    }

    if (second >= 60) {
        minute++;
        second = 0;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').textContent = minute.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = second.toString().padStart(2, '0');
    document.getElementById('milliseconds').textContent = (millisecond / 10).toString().padStart(2, '0');
}
