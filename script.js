let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let continueButton = document.createElement('button');

continueButton.id = 'continue';
continueButton.textContent = 'Continue';
continueButton.className = 'btn btn-success mx-2 mb-2';
continueButton.style.display = 'none';
document.querySelector('.mt-4').insertBefore(continueButton, resetButton);

let minute = 0;
let second = 0;
let millisecond = 0;
let timer;

startButton.addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(stopWatch, 10);
        startButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
        document.getElementById('minutes').classList.remove('blinking');
        document.getElementById('seconds').classList.remove('blinking');
        document.getElementById('milliseconds').classList.remove('blinking');
    }
});

stopButton.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    stopButton.style.display = 'none';
    continueButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';
    document.getElementById('minutes').classList.add('blinking');
    document.getElementById('seconds').classList.add('blinking');
    document.getElementById('milliseconds').classList.add('blinking');
});

continueButton.addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(stopWatch, 10);
        continueButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
        document.getElementById('minutes').classList.remove('blinking');
        document.getElementById('seconds').classList.remove('blinking');
        document.getElementById('milliseconds').classList.remove('blinking');
    }
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    minute = 0;
    second = 0;
    millisecond = 0;
    updateDisplay();
    startButton.style.display = 'inline-block';
    stopButton.style.display = 'none';
    continueButton.style.display = 'none';
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
