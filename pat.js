function validateForm() {
  var ssnInput = document.getElementsByName("ssn")[0];
  var ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

  if (!ssnPattern.test(ssnInput.value)) {
    alert("Please enter a valid Social Security Number in the format ###-##-####");
    return false;
  }

  // Other form validation logic can go here (if needed)

  return true; // Form will submit if all validations pass
}
