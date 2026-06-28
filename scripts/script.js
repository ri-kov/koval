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
const timeButtons = document.querySelectorAll(".time_btn");
const selectedRepairTime = document.getElementById("selectedRepairTime");
let  selectedTime = null;

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

function renderCalendar() {
    calendarDays.innerHTML = "";
    calendarMonth.textContent = monthNames[currentMonth] + " " + currentYear;

    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth + 6) % 7;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let empty = 0; empty < firstDayOfMonth; empty++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("empty_day");
        calendarDays.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.classList.add("calendar_day");
        dayButton.textContent = day;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const buttonDate = new Date(currentYear, currentMonth, day);

        if (buttonDate < today || buttonDate.getDay() == 0) {
            dayButton.classList.add("disabled");
            dayButton.disabled = true;
        }

        if (selectedDate && buttonDate.toDateString() === selectedDate.toDateString()) {
            dayButton.classList.add("selected");
        }

//!!!!DAY EVENT
        dayButton.addEventListener("click", () => {
            selectedDate = new Date(currentYear, currentMonth, day);

            selectedTime = null;
            selectedRepairTime.value = "";

            timeButtons.forEach((button) => {
                button.classList.remove("selected");
            });

            document.querySelectorAll(".calendar_day").forEach((button) => {
                button.classList.remove("selected");
            });
            
            dayButton.classList.add("selected");
            document.getElementById("selectedRepairDate").value = selectedDate.toISOString().split("T")[0];

            timeButtons.forEach((button) => {
                button.classList.remove("disabled");
            });
            updateAvailableTimes();
        });
        calendarDays.appendChild(dayButton);
    }
}

function updateAvailableTimes() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const now = new Date();
    const isToday = selectedDate && selectedDate.toDateString() == today.toDateString();
    const hour = Number(button.dataset.hour);
    timeButtons.forEach((button) => {
        const buttonHour = Number(button.dataset.hour);
        button.classList.remove("disabled");

        if (isToday && buttonHour <= now.getHours()) {
            button.classList.add("disabled");
            button.classList.remove("disabled");
            
            if (selectedTime === button.textContent) {
                selectedTime = null;
                selectedRepairTime.value = "";
            }
        }
    });
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

timeButtons.forEach((button) => {
    button.classList.add("disabled");
});

renderCalendar();

timeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("disabled")) {
            return;
        }

        selectedTime = button.textContent;
        timeButtons.forEach((timeButton) => {
            timeButton.classList.remove("selected");
        });
        button.classList.add("selected");
        selectedRepairTime.value = selectedTime;
    });
});