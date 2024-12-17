const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClock() {
    const d = new Date();
    const month = months[d.getMonth()];

    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");
    const text = document.getElementById("text");

    const hour24 = d.getHours();
    const hour12 = hour24 % 12 || 12; //or
    const amPm = hour24 >= 12 ? "PM" : "AM";
    const date = document.getElementById("date-elements");
    h.innerText = String(hour12).padStart(2,'0');
    m.innerText = String(d.getMinutes()).padStart(2,'0');
    s.innerText = String(d.getSeconds()).padStart(2,'0');
    text.innerText = amPm;

    date.innerText = `${String(d.getDate()).padStart(2,'0')} ${month} ${d.getFullYear()}`;
}

setInterval(updateClock,1000);
updateClock();