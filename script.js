document.querySelector('.icons').addEventListener('click', () => {
    document.querySelector('section').classList.toggle('dark');
});

function formatTime(date) {
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let partOfTheDay;
    partOfTheDay = hour < 12 ? 'AM' : 'PM';
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    document.querySelector('.hour-num').innerText = hour;
    document.querySelector('.min-num').innerText = min;
    document.querySelector('.sec-num').innerText = sec;
    document.querySelector('.am-pm').innerText = partOfTheDay;
}

function formatDate(date) {
    let weekDay = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.querySelector('.date span').innerText = `${week[weekDay]}, ${months[month]} ${day}, ${year}`;
}

setInterval(() => {
    let date = new Date();

    formatTime(date);
    formatDate(date);
}, 200);
