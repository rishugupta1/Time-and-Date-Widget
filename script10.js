let dateContainer = document.querySelector(".date-container"); // Corrected the querySelector argument
let hoursContainer = document.querySelector(".hours"); // Corrected variable name to use camelCase
let minutesContainer = document.querySelector(".minutes"); // Corrected variable name to use camelCase
let secondsContainer = document.querySelector(".seconds"); // Corrected variable name to use camelCase

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time; // Corrected the function name to use camelCase
}

function updateClock() {
    const today = new Date();

    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${today.getDate()}</span></p><p>${month}</p>`; // Added today.getDate() to display the date

    hoursContainer.textContent = hours + " :";
    minutesContainer.textContent = minutes + " :";
    secondsContainer.textContent = seconds + " :";
}

setInterval(updateClock, 1000); // Corrected setInterval function name to use camelCase
