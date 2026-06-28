const modCustomSelect = document.getElementById("modConditionSelect");
const modTrigger = modCustomSelect.querySelector(".mod_select_trigger");
const modSelectedText = modCustomSelect.querySelector(".mod_selected_text");
const modOptions = modCustomSelect.querySelectorAll(".mod_select_options li");
const modHiddenInput = document.getElementById("modSelServ");

modTrigger.addEventListener("click", () => {
  modCustomSelect.classList.toggle("exp");
});

modOptions.forEach(option => {
  option.addEventListener("click", () => {
    modSelectedText.textContent = option.textContent;
    modHiddenInput.value = option.dataset.value;
    modSelectedText.style.color = 'var(--bs-body-color)';
    modSelectedText.style.fontWeight = '450';
    modSelectedText.style.fontSize = '1rem';

    modOptions.forEach(item => item.classList.remove("selected"));
    option.classList.add("selected");

    modCustomSelect.classList.remove("exp");
  });
});

document.addEventListener("click", event => {
  if (!modCustomSelect.contains(event.target)) {
    modCustomSelect.classList.remove("exp");
  }
});

const calendarMonth = document.getElementById("calendarMonth");
const calendarDays = document.getElementById("calendarDays");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedDate = null;

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

let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDate();
firstDayOfMonth = (firstDayOfMonth + 6) % 7;
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

for (let empty = 0; empty < firstDayOfMonth; empty++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add(empty_day);
    calendarDays.appendChild(emptyDay);
}

for (let day = 1; day <= daysInMonth; day++) {
    const dayButton = document.createElement("button");
    dayButton.classList.add("calendar_day");
    dayButton.textContent = day;
    calendarDays.appendChild(dayButton);
}

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++
    }

    renderCalendar();
});

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if(currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar();
});

function renderCalendar() {
    calendarDays.innerHTML = "";
    calendarMonth.textContent = monthNames[currentMonth] + " " + currentYear;

    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth + 6) % 7;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let empty = 0; empty < firstDayOfMonth; empty++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("empty_day");
        calendarDays.appendChild(dayButton);
    }

    for (let day = 1; dat <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.classList.add("calendar_day");
        dayButton.textContent = day;
        calendarDays.appendChild(dayButton);
    }
}

renderCalendar();