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
const selectedRepairDate = document.getElementById("selectedRepairDate");
const selectedRepairTime = document.getElementById("selectedRepairTime");
const repairForm = document.getElementById("repairForm");

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
let  selectedTime = null;
let displayedWeekStart = getInitialWeekStart();

//for (let empty = 0; empty < firstDayOfMonth; empty++) {
//    const emptyDay = document.createElement("div");
//    emptyDay.classList.add(empty_day);
//    calendarDays.appendChild(emptyDay);
//}

//for (let day = 1; day <= daysInMonth; day++) {
//    const dayButton = document.createElement("button");
//    dayButton.type = "button";
//    dayButton.classList.add("calendar_day");
//    dayButton.textContent = day;
//    calendarDays.appendChild(dayButton);
//}

function isMobileCalendar() {
    return window.matchMedia("(max-width: 600px)").matches;
}

function getMonday(date) {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);

    const dayOfWeek = result.getDay();
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    result.setDate(result.getDate() - daysSinceMonday);

    return result;
}

function getInitialWeekStart() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (today.getDay() === 0) {
        const nextMonday = newDate(today);
        nextMonday.setDate(today.getDate() + 1);
        return nextMonday;
    }

    return getMonday(today);
}

function getDefaultSelectedDate() {
    const defaultDate = new Date();

    defaultDate.setHours(0, 0, 0, 0);
    if (defaultDate.getDay() === 0) {
        defaultDate.setDate(defaultDate.getDate() + 1);
    }

    return defaultDate;
}

function renderCalendar() {
    if (!selectedDate) {
        selectedDate = getDefaultSelectedDate();
        currentMonth = selectedDate.getMonth();
        currentYear = selectedDate.getFullYear();

        selectedRepairDate.value = selectedDate.toISOString().split("T")[0];
    }

    calendarDays.innerHTML = "";

    calendarMonth.textContent = monthNames[currentMonth] + " " + currentYear;

    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth + 6) % 7;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    if (!isMobileCalendar()) {
        for (let empty = 0; empty < firstDayOfMonth; empty++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("empty_day");
            calendarDays.appendChild(emptyDay);
        }
    }

    const startDay = isMobileCalendar() ? displayedWeekStart.getDate() : 1;
    const mobileEmptyDays = isMobileCalendar() && startDay === 1 ? (displayedWeekStart.getDay() + 6) % 7 : 0;
    const endDay = isMobileCalendar() ? startDay + (6 - mobileEmptyDays) : daysInMonth;

    if (isMobileCalendar()) {
        for (let empty = 0; empty < mobileEmptyDays; empty++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("empty_day");
            calendarDays.appendChild(emptyDay);
        }
    }

    for (let day = startDay; day <= endDay; day++) {
        const dayButton = document.createElement("button");
        dayButton.type = "button";
        dayButton.classList.add("calendar_day");
        let buttonDate;
        if (isMobileCalendar()) {
            buttonDate = new Date(displayedWeekStart);
            buttonDate.setDate(displayedWeekStart.getDate() + (day - startDay));
        } else {
            buttonDate = new Date(currentYear, currentMonth, day);
        }

        if(isMobileCalendar() && buttonDate.getMonth() != currentMonth) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("empty_day");
            continue;
        }

        dayButton.textContent = buttonDate.getDate();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        //dayButton.textContent = day;

        //const today = new Date();
        //today.setHours(0, 0, 0, 0);

        //const buttonDate = new Date(currentYear, currentMonth, day);

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
            selectedRepairDate.value = selectedDate.toISOString().split("T")[0];

            timeButtons.forEach((button) => {
                button.classList.remove("disabled");
            });
            updateAvailableTimes();
        });
        calendarDays.appendChild(dayButton);
    }
    updateAvailableTimes();
}

function updateAvailableTimes() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const now = new Date();
    const isToday = selectedDate && selectedDate.toDateString() == today.toDateString();
    timeButtons.forEach((button) => {
        const buttonHour = Number(button.dataset.hour);
        button.classList.remove("disabled");

        if (isToday) {
            const firstAvailableHour = now.getHours() + 2;

            if (buttonHour < firstAvailableHour) {
                button.classList.add("disabled");

                if (selectedTime === button.textContent) {
                    selectedTime = null;
                    selectedRepairTime.value = "";
                    button.classList.remove("selected");
                }
            }
        }

//        if (isToday && buttonHour <= now.getHours()) {
//            button.classList.add("disabled");
//            button.classList.remove("disabled");
//            
//            if (selectedTime === button.textContent) {
//                selectedTime = null;
//                selectedRepairTime.value = "";
//            }
//        } 
    });
}

nextMonthBtn.addEventListener("click", () => {
    if (isMobileCalendar()) {
        const nextWeekStart = new Date(displayedWeekStart);

        if ( displayedWeekStart.getDate() === 1 && displayedWeekStart.getDay() !== 1) {
            nextWeekStart.setDate(displayedWeekStart.getDate() + (8 - displayedWeekStart.getDay()));
        } else {
            nextWeekStart.setDate(displayedWeekStart.getDate() + 7);
        }

        if (
            nextWeekStart.getMonth() !== displayedWeekStart.getMonth()
        ) {
            displayedWeekStart = new Date(
                nextWeekStart.getFullYear(),
                nextWeekStart.getMonth(),
                1
            );
        } else {
            displayedWeekStart = nextWeekStart;
        }

        currentMonth = displayedWeekStart.getMonth();
        currentYear = displayedWeekStart.getFullYear();
    } else {
        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }

    renderCalendar();
});

prevMonthBtn.addEventListener("click", () => {
    if (isMobileCalendar()) {
        const previousWeekStart = new Date(displayedWeekStart);

        if (
            displayedWeekStart.getDate() === 3 &&
            displayedWeekStart.getDay() === 1
        ) {
            previousWeekStart.setDate(1);
        } else {
            previousWeekStart.setDate(displayedWeekStart.getDate() - 7);
        }

        displayedWeekStart = previousWeekStart;

        currentMonth = displayedWeekStart.getMonth();
        currentYear = displayedWeekStart.getFullYear();
    } else {
        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
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

function resetRepairBooking () {
    selectedDate = null;
    selectedTime = null;
    
    selectedRepairDate.value = "";
    selectedRepairTime.value = "";

    document.querySelectorAll(".calendar_day").forEach((button) => {
        button.classList.remove("selected");
    });

    timeButtons.forEach((button) => {
        button.classList.remove("selected");
        button.classList.add("disabled");
    });

    repairForm.reset();
    renderCalendar();
}

const modCancel = document.getElementById("modCancel");

modCancel.addEventListener("click", () => {
    resetRepairBooking();
});

const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    hamburger.style.display = "none";
    closeMenu.style.display = "block";
    document.body.classList.add("menu_open");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    document.body.classList.remove("menu_open");
});

document.querySelectorAll(".nav_links a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu_open");

        hamburger.style.display = "block";
        closeMenu.style.display = "none";
    });
});