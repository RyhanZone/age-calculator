let idate   = document.getElementById('date');
let imonth  = document.getElementById('month');
let iyear   = document.getElementById('year');
let button  = document.getElementById('button');

let outputdate  = document.getElementById('outputdate');
let outputmonth = document.getElementById('outputmonth');
let outputyear  = document.getElementById('outputyear');

button.addEventListener('click', function() {
    let bDate = Number(idate.value);
    let bMonth = Number(imonth.value);
    let bYear = Number(iyear.value);

    let today = new Date();
    let tDate = today.getDate();
    let tMonth = today.getMonth() + 1;
    let tYear = today.getFullYear();

    let y = tYear - bYear;
    let m = tMonth - bMonth;
    let d = tDate - bDate;

    if (d < 0) {
        m--;
        let daysInPrevMonth = new Date(tYear, tMonth - 1, 0).getDate();
        d += daysInPrevMonth;
    }

    if (m < 0) {
        y--;
        m += 12;
    }

    outputyear.innerText = y;
    outputmonth.innerText = m;
    outputdate.innerText = d;
});
