$(document).ready(function(){

    // Add current date & time to top of the page
    var headerTime = moment().format('LLLL');
    $("#currentDay").text(headerTime);

    // Create timeblocks for all business hours
    var currentHour = moment().format('H');
    var adjustedHour = currentHour - 8;
    //var adjustedHour = 6;
    // 7 is 3pm

    buildCalendar();

    function buildCalendar() {
        var businessHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",];
        for (var i = 0; i < businessHours.length; i++) {
            console.log("array index: " + i);
            console.log("array time: " + businessHours[i]);
            
            var timeBlock = $('<div class="time-block">');
            $("#container").append(timeBlock);
            var rowDiv = $('<div class="row">');
            timeBlock.append(rowDiv);
            var hourDiv = $('<div class="hour">');
            hourDiv.text(businessHours[i]);
            rowDiv.append(hourDiv);
            var descriptionInput = $('<input type="textarea" class="description" id="' + businessHours[i] + '">');
            descriptionInput.value(localStorage.getItem(businessHours[i]));
            rowDiv.append(descriptionInput);
            var saveBtn = $('<button class="saveBtn">');
            rowDiv.append(saveBtn);

            if (i < adjustedHour) {
                console.log(businessHours[i] + " is BEFORE the current time");
                hourDiv.addClass("past");
                descriptionInput.addClass("past");
            } else if (i === adjustedHour) {
                console.log(businessHours[i] + " IS the current time");
                hourDiv.addClass("present");
                descriptionInput.addClass("present");
            } else if (i > adjustedHour) {
                console.log(businessHours[i] + " is AFTER the current time");
                hourDiv.addClass("future");
                descriptionInput.addClass("future");
            }


        }
    }
    
    //console.log(currentHour);
    //console.log(adjustedHour);

    $(document).on("click", ".saveBtn", function(event) {
        event.preventDefault();
        $(this)
    });

    function saveDescription() {

    }

    // Store
localStorage.setItem("lastname", "Smith");


});