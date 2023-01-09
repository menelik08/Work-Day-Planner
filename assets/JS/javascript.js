var dayOfYear = moment().format("dddd, MMM Do, YYYY")

$("#currentDay").text(dayOfYear);

var hourOfDay = moment().hour();

var container = $(".container");

var timeArray = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]

var timeArray2 = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var textArray = []

timePlanner();

function timePlanner() {
    for (i = 0; i < timeArray.length; i++) {
        var rowDiv = $("<div>");
        container.append(rowDiv);
        rowDiv.addClass("row");
        var div1 = $("<div>");
        div1.text(timeArray[i]);
        rowDiv.append(div1);
        div1.addClass("col hour time-block");
        div1.attr("id", timeArray2[i]);
        var textarea = $("<textarea>");
        rowDiv.append(textarea);
        textarea.addClass("col-md-10 description");
        textarea.attr("id", timeArray[i]);
        textarea.val(localStorage.getItem(timeArray2[i]));
        var time = moment(timeArray[i], "LT").format("HH");
        if (time > hourOfDay) {
            textarea.addClass("future");
            console.log(time);
        } else if (time < hourOfDay){
            textarea.addClass("past");
            console.log(time);
        } else {
            textarea.addClass("present");
            console.log(time);
        }
        var saveButton = $("<button>");
        rowDiv.append(saveButton);
        saveButton.addClass("col saveBtn");
        var saveIcon = $("<i>");
        saveButton.append(saveIcon);
        saveIcon.addClass("fas fa-save");
    };
};

$("button").on('click', saveToLocalStorage);
    
function saveToLocalStorage() {
    console.log($(this).siblings("textarea").val());
    console.log($(this).siblings("div").attr("id"));
    var userInput = $(this).siblings("textarea").val();
    var currentHour = $(this).siblings("div").attr("id");
    localStorage.setItem(currentHour, userInput);
};
