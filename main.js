let $ = document;
let body = $.body;
let darkBtn = $.querySelector(".dark-mode")
let hourElem = $.querySelector(".hour")
let minuteElem = $.querySelector(".minute")
let secondElem = $.querySelector(".second")
let digitalClock = $.querySelector(".digital-clock");
let date = $.querySelector(".date");
let day = $.getElementById("day");
const months = [
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
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

darkBtn.addEventListener("click", () => { body.classList.toggle("darkMode") });

function changeTime() {
    let time = new Date()
    let Month = months[time.getMonth()];
    let Day = days[time.getDay()];
    let nowDate = time.getDate()
    let Hours = time.getHours()
    let clockHour = Hours >= 13 ? Hours % 12 : Hours;
    let Minutes = time.getMinutes()
    let Seconds = time.getSeconds()
    let amPm = Hours >= 12 ? "PM" : "AM"
    
    hourElem.style.transform = `translate(-50%, -100%) rotate(${clockChange(clockHour, 0, 12, 0, 360)}deg)`
    minuteElem.style.transform = `translate(-50%, -100%) rotate(${clockChange(Minutes, 0, 60, 0, 360)}deg)`
    secondElem.style.transform = `translate(-50%, -100%) rotate(${clockChange(Seconds, 0, 60, 0, 360)}deg)`

    digitalClock.innerHTML = `${Hours < 10 ? `0${Hours}` : Hours}:${Minutes < 10 ? `0${Minutes}` : Minutes}:${Seconds < 10 ? `0${Seconds}` : Seconds} ${amPm}`

    date.innerHTML = `${Day}, ${Month} <span id="day">${nowDate}</span>`;
}


let clockChange = (parameter, inMin, inMax, outMin, outMax) => {
    return (parameter - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

changeTime()

setInterval(changeTime, 1000)