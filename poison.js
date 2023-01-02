import * as dateFns from "https://cdn.skypack.dev/date-fns@2.29.3";

// Adjust accordingly to test
const dueDate = dateFns.addDays(new Date(), 10);

const daysLeft = dateFns.differenceInDays(dueDate, new Date());
document.body.style.opacity = daysLeft / 10;

if (daysLeft === 0) {
  window.onclick = () => {
    window.alert("You gotta pay the developer first!!");
  };
}
