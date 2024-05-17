const $ = (selector) => document.querySelectorAll(selector)[0];
const dateInput = $("#dateField");
dateInput.max = new Date().toISOString().split("T")[0];
const convertToDate = (value) => new Date(value);
function calculateAge(date) {
  let currentDate = new Date();
  let years = currentDate.getFullYear() - date.getFullYear();
  let month = currentDate.getMonth() - date.getMonth();
  let day = currentDate.getDate() - date.getDate();

  if (month < 0) {
    years--;
    month += 12;
  }
  if (day < 0) {
    month--;
    day += date.getDate();
  }
  return {
    years,
    month,
    day,
  };
}
let form = $("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = dateInput?.value || "";
  let valueAsDate = convertToDate(value);
  const { years, day, month } = calculateAge(valueAsDate);
  $(
    ".alertValue"
  ).innerHTML = `you have <span class="">${years}</span> years , <span>${month} </span> months and <span> ${day}</span> days `;

  $(".alertMessage").style.top = "20px";
  setTimeout(() => {
    $(".alertMessage").style.top = "-50%";
  }, 5000);
});
