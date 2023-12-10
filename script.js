var currentDateElement = document.getElementById("current-date");
var currentDate = new Date();
currentDateElement.textContent = currentDate.toLocaleDateString();
