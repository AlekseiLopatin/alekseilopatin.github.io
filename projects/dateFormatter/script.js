const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const weekday = date.getDay();
let thOrNot = "th";
if (day===1 || day===21 || day===31) {
    thOrNot = "st";
} else if (day===2 || day===22) {
    thOrNot = "nd";
} else if (day===3 || day===23) {
    thOrNot = "rd";
};
const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    case "wd-dd-mm-yyyy":
      currentDateParagraph.textContent = `${daysOfTheWeek[weekday]}, ${day}${thOrNot} ${months[month - 1]} ${year}` ;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
