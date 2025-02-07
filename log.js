// script.js

// Function to validate email format using a simple regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Function to handle form validation
function validateForm(event) {
    // Get the form elements
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email is valid
    if (!email || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Check if password is provided
    if (!password) {
        alert("Please enter a password.");
        return false; // Prevent form submission
    }

    // If everything is valid, the form will be submitted
    return true;
}