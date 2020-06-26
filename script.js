$(document).ready(function(){

    // Add current date & time to top of the page
    var headerTime = moment().format('LLLL');
    $("#currentDay").text(headerTime);

    // Create timeblocks for all business hours
    var currentHour = moment().format('H');
    var adjustedHour = currentHour - 8;

    // On page load & ready, run build calendar
    buildCalendar();


    function buildCalendar() {
        // Create array to hold all hours that we want on our planner
        var businessHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",];
        
        // Iterate through array of hours
        for (var i = 0; i < businessHours.length; i++) {
            //console.log("array index: " + i);
            //console.log("array time: " + businessHours[i]);
            
            // Create element group for each hour
            var timeBlock = $('<div class="time-block">');
            $("#container").append(timeBlock);
            var rowDiv = $('<div class="row">');
            timeBlock.append(rowDiv);
            var hourDiv = $('<div class="hour">');
            hourDiv.text(businessHours[i]);
            rowDiv.append(hourDiv);
            var descriptionInput = $('<input type="textarea" class="description" id="' + businessHours[i] + '-input">');
            
            // Get hour's description from localstorage and insert it back in.
            descriptionInput.val(localStorage.getItem(businessHours[i]));
            rowDiv.append(descriptionInput);
            var saveBtn = $('<button class="saveBtn" id="' + businessHours[i] + '">');
            rowDiv.append(saveBtn);
            var saveIcon = $('<i class="far fa-save"></i>');
            saveBtn.append(saveIcon);

            // Color rows based on whether they are past/present/future
            if (i < adjustedHour) {
                //console.log(businessHours[i] + " is BEFORE the current time");
                hourDiv.addClass("past");
                descriptionInput.addClass("past");
            } else if (i === adjustedHour) {
                //console.log(businessHours[i] + " IS the current time");
                hourDiv.addClass("present");
                descriptionInput.addClass("present");
            } else if (i > adjustedHour) {
                //console.log(businessHours[i] + " is AFTER the current time");
                hourDiv.addClass("future");
                descriptionInput.addClass("future");
            }


        }
    }

    // If save button is clicked, save input description to local storage.
    $(document).on("click", ".saveBtn", function(event) {
        event.preventDefault();
        var inputValue = $(this).siblings(".description").val();
        var timeValue = $(this).attr('id');
        localStorage.setItem(timeValue, inputValue);
    });


});