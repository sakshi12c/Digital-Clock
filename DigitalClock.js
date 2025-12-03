let is12HourFormat = true;

const clockDisplay = document.getElementById('clock');
const btn12hr = document.getElementById('btn12hr');
const btn24hr = document.getElementById('btn24hr');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let timeString;

    if (is12HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    } else {
        timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    clockDisplay.textContent = timeString;
}

btn12hr.addEventListener('click', function() {
    is12HourFormat = true;
    btn12hr.classList.add('active');
    btn24hr.classList.remove('active');
    updateClock();
});

btn24hr.addEventListener('click', function() {
    is12HourFormat = false;
    btn24hr.classList.add('active');
    btn12hr.classList.remove('active');
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);