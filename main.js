class digitalClock {
    constructor(element) {
        this.element = element;
    }
    start() {
        this.update ();

        
        setInterval(() => {
            this.update ();

        }, 500);
    }
    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const secondFormatted = parts.second.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;
        const amPM = parts.isAm ? 'AM' : 'PM';

        this.element.querySelector('.clock-time').textContent = timeFormatted;
        this.element.querySelector('.clock-ampm').textContent = amPM;
    }
    getTimeParts() {
        const now = new Date();
        return {
            hour:now.getHours() > 12 ? now.getHours()-12:now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector('.clock');
const clockObject = new digitalClock(clockElement); 

clockObject.start();


// calender
var date = new Date();
 months = [
    "/January/",
    "/February/",
    "/March/",
    "/April/",
    "/May/",
    "/June/",
    "/July/",
    "/August/",
    "/September/",
    "/October/",
    "/November/",
    "/December/"
];
 days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

 
document.querySelector('.month').innerHTML = months[date.getMonth()];
document.querySelector('.date').innerHTML = date.getDate();
document.querySelector('.year').innerHTML = date.getFullYear();
document.querySelector('.day').innerHTML = days[date.getDay()];


// let days = "";
// for( let i = 1; i <= 1; i++) {
//     days += <div>${i};</div>;
//     day.innerHTML = days;
// }