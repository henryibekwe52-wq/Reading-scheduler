const form = document.getElementById("schedule-form");
const scheduleList = document.getElementById("schedule-list");

function loadSchedule() {
  const schedule = JSON.parse(localStorage.getItem("readingSchedule")) || [];
  scheduleList.innerHTML = "";
  schedule.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.date} at ${item.time} - ${item.subject} for ${item.duration} Hours`;
    scheduleList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const duration = document.getElementById("duration").value;

  const newEntry = { subject, date, time, duration };

  const schedule = JSON.parse(localStorage.getItem("readingSchedule")) || [];
  schedule.push(newEntry);
  localStorage.setItem("readingSchedule", JSON.stringify(schedule));

  form.reset();
  loadSchedule();
});

document.addEventListener("DOMContentLoaded", loadSchedule);
