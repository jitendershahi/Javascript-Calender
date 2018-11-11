let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalender(currentMonth, currentYear)

function next() {
    currentYear = (currentMonth === 11) ? (currentYear + 1) : currentYear
    currentMonth = (currentMonth + 1) % 12; //after 11 get 0 i.e use remainder
    showCalender(currentMonth, currentYear)
}

function previous() {
    currentYear = (currentMonth === 0) ? (currentYear - 1) : currentYear
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1
    showCalender(currentMonth, currentYear)
}

function jump() {
    currentYear = parseInt(selectYear.value)
    currentMonth = parseInt(selectMonth.value)
    showCalender(currentMonth, currentYear)
}

function showCalender(month, year) {

    let firstDay = (new Date(year, month)).getDay() // get first day of the month
    let daysInMonth = 32 - new Date(year, month, 32).getDate()

    let tbl = document.getElementById("calendar-body") // body of the calendar
    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    //creating cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                //create empty cell
                let cell = document.createElement("td"); // create empty cell before start date of the month
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell)
            } else if (date > daysInMonth) {
                break;
            } else {
                // fill cell with dates
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }
                cell.appendChild(cellText)
                row.appendChild(cell)
                date++
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }

}
