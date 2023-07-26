var infoForm = document.getElementById('info-form');

    infoForm.onsubmit = function() {
        // Check if number list is valid, and return true if it is
        if(validateNumberList()) {
            // Hide the error message if it was displayed previously
            hideErrorMessage();
            return true;
        }

        // Number list is invalid, so display error message and return false
        showErrorMessage("Number list is invalid: expected 2 to 4 numbers in a list.");
        return false;
    };

    function showErrorMessage(msg) {
        var errMessage = document.querySelector('#error-msg');
        // Remove the hidden class so the error message shows.
        errMessage.classList.remove('hidden');
        // Set the error message text
        errMessage.innerHTML = msg;
    }

    function hideErrorMessage(msg) {
        var errMessage = document.querySelector('#error-msg');
        // Add the hidden class so the error message goes away.
        errMessage.classList.add('hidden');
    }

    function getNumberList() {
        // Get the number-list <input> value
        var list = document.querySelector('#number-list').value;

        // Get rid of leading/trailing spaces
        list = list.trim();

        // Split the string into an array, separated by spaces, commas, or a combo of each
        return list.split(/[ ,]+/);
    }

    function validateNumberList() {
        var list = getNumberList();

        // Make sure we have between 2 and 4 elements.  If not, return `false`
        // to indicate this form is invalid (don't submit)
        if(!(list.length >=2 && list.length <=4)) {
            return false;
        }

        // Make sure each element in the list is a number
        function isNumber(n) {
            return !isNaN(n);
        }

        // Loop across every value in the array, and call isNumber() on the value.
        // Return true if EVERY element passes isNumber, and false otherwise.
        return list.every(isNumber);
    }