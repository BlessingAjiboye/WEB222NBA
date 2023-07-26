var form = document.querySelector('#info-form');

// Get the value form the <textarea>
var text = form.text.value.trim();

// Get the chosen colour value from the radio button group
var colour;
var colourChoices = Array.from(form.colour); // convert to array
colourChoices.forEach(function(option) {
    if(option.checked) {
        colour = option.value;
    }
});

// Get the chosen food value form the <select>
var food = "None"; // there may be nothing selected
var foodChoices = Array.from(form.food); // convert to array
foodChoices.forEach(function(option) {
    if(option.selected) {
        food = option.value;
    }
});

infoForm.onsubmit = function () {
    window.alert(successfully submitted)
        // Perform extra validation here.  When finished validating, return
        // either `true` (form is valid) or `false` (form is invalid) to tell
        // the browser how to proceed.
    };

    // reset event fired when the user clicks a "reset" button
    infoForm.onreset = function() {
        // If you ever need to do extra work to clear a form, do it here.
    };