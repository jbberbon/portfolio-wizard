// Get form and input elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-field');
const emailInput = document.getElementById('email-field');
const mobileInput = document.getElementById('mobile-field');

// Get error elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const mobileError = document.getElementById('mobile-error');

// Function to validate name
function validateName(name) {
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Function to validate mobile number
function validateMobile(mobile) {
    const mobilePattern = /^[0-9]{10}$/; // Validates a 10-digit number
    if (!mobilePattern.test(mobile)) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number.";
        return false;
    } else {
        mobileError.textContent = "";
        return true;
    }
}

// Form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isMobileValid = validateMobile(mobileInput.value);

    // If all fields are valid, submit the form
    if (isNameValid && isEmailValid && isMobileValid) {
        alert("Form submitted successfully!");
        form.reset(); // Reset form fields after submission
    }
});
